
import { assertPolymorphicType } from 'ember-data/-debug';
import { PromiseManyArray } from '../../promise-proxies';
import Relationship from './relationship';
import OrderedSet from '../../ordered-set';
import ManyArray from '../../many-array';


export default class ManyRelationship extends Relationship {
  constructor(store, internalModel, inverseKey, relationshipMeta) {
    super(store, internalModel, inverseKey, relationshipMeta);
    this.belongsToType = relationshipMeta.type;
    this.canonicalState = [];
    // The ManyArray for this relationship
    this._manyArray = null;
    // The previous ManyArray for this relationship.  It will be destroyed when
    // we create a new many array, but in the interim it will be updated if
    // inverse internal models are unloaded.
    this._retainedManyArray = null;
    this._promiseProxy = null;
    this._willUpdateManyArray = false;
    this._pendingManyArrayUpdates = null;
  }

  get currentState() {
    return this.members.list;
  }

  /**
   * Flag indicating whether all inverse records are available
   *
   * true if inverse records exist and are all loaded (all not empty)
   * true if there are no inverse records
   * false if the inverse records exist and any are not loaded (any empty)
   *
   * @returns {boolean}
   */
  get allInverseRecordsAreLoaded() {
    // check currentState for unloaded records
    var hasEmptyRecords = this.currentState.reduce((hasEmptyModel, i) => {
      return hasEmptyModel || i.isEmpty();
    }, false);

    // check un-synced state for unloaded records
    if (!hasEmptyRecords && this.willSync) {
      hasEmptyRecords = this.canonicalState.reduce((hasEmptyModel, i) => {
        return hasEmptyModel || !i.isEmpty();
      }, false);
    }

    return !hasEmptyRecords;
  }

  _createProxy(promise, content) {
    return PromiseManyArray.create({
      promise,
      content
    });
  }

  get manyArray() {
    (true && !(this._manyArray === null || this._retainedManyArray === null) && Ember.assert(`Error: relationship ${this.parentType}:${this.key} has both many array and retained many array`, this._manyArray === null || this._retainedManyArray === null));


    if (!this._manyArray && !this.isDestroying) {
      var isLoaded = this.hasFailedLoadAttempt || this.isNew || this.allInverseRecordsAreLoaded;

      this._manyArray = ManyArray.create({
        canonicalState: this.canonicalState,
        store: this.store,
        relationship: this,
        type: this.store.modelFor(this.belongsToType),
        record: this.internalModel,
        meta: this.meta,
        isPolymorphic: this.isPolymorphic,
        isLoaded
      });

      if (this._retainedManyArray !== null) {
        this._retainedManyArray.destroy();
        this._retainedManyArray = null;
      }
    }

    return this._manyArray;
  }

  removeInverseRelationships() {
    super.removeInverseRelationships();
    if (this._manyArray) {
      this._manyArray.destroy();
      this._manyArray = null;
    }

    if (this._promiseProxy) {
      this._promiseProxy.destroy();
    }
  }

  updateMeta(meta) {
    super.updateMeta(meta);
    if (this._manyArray) {
      this._manyArray.set('meta', meta);
    }
  }

  addCanonicalInternalModel(internalModel, idx) {
    if (this.canonicalMembers.has(internalModel)) {
      return;
    }
    if (idx !== undefined) {
      this.canonicalState.splice(idx, 0, internalModel);
    } else {
      this.canonicalState.push(internalModel);
    }
    super.addCanonicalInternalModel(internalModel, idx);
  }

  inverseDidDematerialize(inverseInternalModel) {
    super.inverseDidDematerialize(inverseInternalModel);
    if (this.isAsync) {
      if (this._manyArray) {
        this._retainedManyArray = this._manyArray;
        this._manyArray = null;
      }
      this._removeInternalModelFromManyArray(this._retainedManyArray, inverseInternalModel);
    }
    this.notifyHasManyChange();
  }

  addInternalModel(internalModel, idx) {
    if (this.members.has(internalModel)) {
      return;
    }

    assertPolymorphicType(this.internalModel, this.relationshipMeta, internalModel);
    super.addInternalModel(internalModel, idx);
    this.scheduleManyArrayUpdate(internalModel, idx);
  }

  scheduleManyArrayUpdate(internalModel, idx) {
    // ideally we would early exit here, but some tests
    //   currently suggest that we cannot.
    // if (!this._manyArray) {
    //   return;
    // }

    var pending = this._pendingManyArrayUpdates = this._pendingManyArrayUpdates || [];
    pending.push(internalModel, idx);

    if (this._willUpdateManyArray === true) {
      return;
    }

    this._willUpdateManyArray = true;
    var backburner = this.store._backburner;

    backburner.join(() => {
      backburner.schedule('syncRelationships', this, this._flushPendingManyArrayUpdates);
    });
  }

  _flushPendingManyArrayUpdates() {
    if (this._willUpdateManyArray === false) {
      return;
    }

    var pending = this._pendingManyArrayUpdates;
    this._pendingManyArrayUpdates = [];
    this._willUpdateManyArray = false;

    for (var i = 0; i < pending.length; i += 2) {
      var internalModel = pending[i];
      var idx = pending[i + 1];

      this.manyArray._addInternalModels([internalModel], idx);
    }
  }

  removeCanonicalInternalModelFromOwn(internalModel, idx) {
    var i = idx;
    if (!this.canonicalMembers.has(internalModel)) {
      return;
    }
    if (i === undefined) {
      i = this.canonicalState.indexOf(internalModel);
    }
    if (i > -1) {
      this.canonicalState.splice(i, 1);
    }
    super.removeCanonicalInternalModelFromOwn(internalModel, idx);
  }

  removeAllCanonicalInternalModelsFromOwn() {
    super.removeAllCanonicalInternalModelsFromOwn();
    this.canonicalMembers.clear();
    this.canonicalState.splice(0, this.canonicalState.length);
  }

  removeCompletelyFromOwn(internalModel) {
    super.removeCompletelyFromOwn(internalModel);

    var canonicalIndex = this.canonicalState.indexOf(internalModel);

    if (canonicalIndex !== -1) {
      this.canonicalState.splice(canonicalIndex, 1);
    }

    var manyArray = this._manyArray;

    if (manyArray) {
      var idx = manyArray.currentState.indexOf(internalModel);

      if (idx !== -1) {
        manyArray.internalReplace(idx, 1);
      }
    }
  }

  flushCanonical() {
    if (this._manyArray) {
      this._manyArray.flushCanonical();
    }
    super.flushCanonical();
  }

  removeInternalModelFromOwn(internalModel, idx) {
    if (!this.members.has(internalModel)) {
      return;
    }
    super.removeInternalModelFromOwn(internalModel, idx);
    // note that ensuring the many array is created, via `this.manyArray`
    // (instead of `this._manyArray`) is intentional.
    //
    // Because we're removing from local, and not canonical, state, it is
    // important that the many array is initialized now with those changes,
    // otherwise it will be initialized with canonical state and we'll have
    // lost the fact that this internalModel was removed.
    this._removeInternalModelFromManyArray(this.manyArray, internalModel, idx);
    this._removeInternalModelFromManyArray(this._retainedManyArray, internalModel, idx);
  }

  removeAllInternalModelsFromOwn() {
    super.removeAllInternalModelsFromOwn();
    // as with removeInternalModelFromOwn, we make sure the many array is
    // instantiated, or we'll lose local removals, as we're not updating
    // canonical state here.
    this.manyArray.clear();
    if (this._retainedManyArray) {
      this._retainedManyArray.clear();
    }
  }

  _removeInternalModelFromManyArray(manyArray, internalModel, idx) {
    if (manyArray === null) {
      return;
    }

    if (idx !== undefined) {
      //TODO(Igor) not used currently, fix
      manyArray.currentState.removeAt(idx);
    } else {
      manyArray._removeInternalModels([internalModel]);
    }
  }

  notifyRecordRelationshipAdded(internalModel, idx) {
    this.internalModel.notifyHasManyAdded(this.key, internalModel, idx);
  }

  computeChanges(internalModels = []) {
    var members = this.canonicalMembers;
    var internalModelsToRemove = [];
    var internalModelSet = setForArray(internalModels);

    members.forEach(member => {
      if (internalModelSet.has(member)) {
        return;
      }

      internalModelsToRemove.push(member);
    });

    this.removeCanonicalInternalModels(internalModelsToRemove);

    for (var i = 0, l = internalModels.length; i < l; i++) {
      var internalModel = internalModels[i];
      this.removeCanonicalInternalModel(internalModel);
      this.addCanonicalInternalModel(internalModel, i);
    }
  }

  setInitialInternalModels(internalModels) {
    if (Array.isArray(internalModels) === false || internalModels.length === 0) {
      return;
    }

    for (var i = 0; i < internalModels.length; i++) {
      var internalModel = internalModels[i];
      if (this.canonicalMembers.has(internalModel)) {
        continue;
      }

      this.canonicalMembers.add(internalModel);
      this.members.add(internalModel);
      this.setupInverseRelationship(internalModel);
    }

    this.canonicalState = this.canonicalMembers.toArray();
  }

  // called by `getData()` when a request is needed
  //   but no link is available
  _fetchRecords() {
    var internalModels = this.currentState;
    var { shouldForceReload } = this;
    var promise = void 0;

    if (shouldForceReload === true) {
      promise = this.store._scheduleFetchMany(internalModels);
    } else {
      promise = this.store.findMany(internalModels);
    }

    return promise;
  }

  // called by `getData()` when a request is needed
  //   and a link is available
  _fetchLink() {
    return this.store.findHasMany(this.internalModel, this.link, this.relationshipMeta).then(records => {
      if (records.hasOwnProperty('meta')) {
        this.updateMeta(records.meta);
      }
      this.store._backburner.join(() => {
        this.updateInternalModelsFromAdapter(records);
      });
      return records;
    });
  }

  getData(isForcedReload = false) {
    //TODO(Igor) sync server here, once our syncing is not stupid
    var manyArray = this.manyArray;

    if (this.shouldMakeRequest()) {
      var promise = void 0;

      if (this.link) {
        promise = this._fetchLink();
      } else {
        promise = this._fetchRecords();
      }

      promise = promise.then(() => handleCompletedRequest(this), e => handleCompletedRequest(this, e));

      this.fetchPromise = promise;
      this._updateLoadingPromise(promise, manyArray);
    }

    if (this.isAsync) {
      if (this._promiseProxy === null) {
        this._updateLoadingPromise(Ember.RSVP.resolve(manyArray), manyArray);
      }

      return this._promiseProxy;
    } else {
      (true && !(this.allInverseRecordsAreLoaded || isForcedReload) && Ember.assert(`You looked up the '${this.key}' relationship on a '${this.internalModel.type.modelName}' with id ${this.internalModel.id} but some of the associated records were not loaded. Either make sure they are all loaded together with the parent record, or specify that the relationship is async (\`DS.hasMany({ async: true })\`)`, this.allInverseRecordsAreLoaded || isForcedReload));


      return manyArray;
    }
  }

  notifyHasManyChange() {
    this.internalModel.notifyHasManyAdded(this.key);
  }

  updateData(data, initial) {
    var internalModels = this.store._pushResourceIdentifiers(this, data);
    if (initial) {
      this.setInitialInternalModels(internalModels);
    } else {
      this.updateInternalModelsFromAdapter(internalModels);
    }
  }

  destroy() {
    super.destroy();
    var manyArray = this._manyArray;
    if (manyArray) {
      manyArray.destroy();
      this._manyArray = null;
    }

    var proxy = this._promiseProxy;

    if (proxy) {
      proxy.destroy();
      this._promiseProxy = null;
    }
  }
}

function handleCompletedRequest(relationship, error) {
  var manyArray = relationship.manyArray;

  //Goes away after the manyArray refactor
  if (!manyArray.get('isDestroyed')) {
    relationship.manyArray.set('isLoaded', true);
  }

  relationship.fetchPromise = null;
  relationship.setShouldForceReload(false);

  if (error) {
    relationship.setHasFailedLoadAttempt(true);
    throw error;
  }

  relationship.setHasFailedLoadAttempt(false);
  // only set to not stale if no error is thrown
  relationship.setRelationshipIsStale(false);

  return manyArray;
}

function setForArray(array) {
  var set = new OrderedSet();

  if (array) {
    for (var i = 0, l = array.length; i < l; i++) {
      set.add(array[i]);
    }
  }

  return set;
}