define('ember-composability-tools/mixins/child', ['exports', 'ember-composability-tools/mixins/parent'], function (exports, _parent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({

    // This is intended as an escape hatch, but ideally you would
    // `{{yield` a child contextual component with `parentComponent=this`
    parentComponent: Ember.computed(function () {
      return this.nearestOfType(_parent.default);
    }),

    init() {
      this._super(...arguments);
      Ember.tryInvoke(this, 'initParent');
      Ember.tryInvoke(this, 'initChild');
    },

    initChild() {
      this.registerWithParent();
    },

    willDestroyElement() {
      this._super(...arguments);
      if (!this._isComposableDestroying) {
        this._isComposableDestroying = true;
        Ember.tryInvoke(this, 'willDestroyElementParent');
        Ember.tryInvoke(this, 'willDestroyElementChild');
      }
    },

    willDestroyElementChild() {
      this._super(...arguments);
      this.unregisterWithParent();
    },

    shouldRegister: true,

    shouldRegisterToParent() /*parentComponent*/{
      return this.get('shouldRegister');
    },

    destroySelfAndChildren() {
      // We may be a child-parent. Destroy children if we can.
      Ember.tryInvoke(this, 'destroyChildren');
      Ember.tryInvoke(this, 'willDestroyParent');
      this._didInsert = false;
    },

    registerWithParent() {
      let parentComponent = this.get('parentComponent');
      if (parentComponent && this.shouldRegisterToParent(parentComponent)) {
        parentComponent.registerChild(this);
      }
    },

    unregisterWithParent() {
      let parentComponent = this.get('parentComponent');
      if (parentComponent) {
        parentComponent.unregisterChild(this);
      }
    }

  });
});