define('ember-paper/utils/promise-proxies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.promiseObject = promiseObject;
  exports.promiseArray = promiseArray;


  // See http://emberjs.com/api/data/classes/DS.PromiseArray.html
  /**
   * @module ember-paper
   */
  const PromiseArray = exports.PromiseArray = Ember.ArrayProxy.extend(Ember.PromiseProxyMixin);
  // See http://emberjs.com/api/data/classes/DS.PromiseObject.html
  const PromiseObject = exports.PromiseObject = Ember.ObjectProxy.extend(Ember.PromiseProxyMixin);

  function promiseObject(promise, label) {
    return PromiseObject.create({
      promise: Ember.RSVP.Promise.resolve(promise, label)
    });
  }

  function promiseArray(promise, label) {
    return PromiseArray.create({
      promise: Ember.RSVP.Promise.resolve(promise, label)
    });
  }
});