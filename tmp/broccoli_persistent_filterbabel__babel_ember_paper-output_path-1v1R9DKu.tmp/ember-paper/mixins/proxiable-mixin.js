define('ember-paper/mixins/proxiable-mixin', ['exports', 'ember-composability-tools'], function (exports, _emberComposabilityTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create(_emberComposabilityTools.ChildMixin, {

    classNameBindings: ['secondary:md-secondary'],

    shouldRegister: false,

    registerWithParent() {
      Ember.run.next(this, this._super);
    },

    mouseDown() {
      this._super(...arguments);
      let parentComponent = this.get('parentComponent');
      if (parentComponent) {
        parentComponent.set('mouseActive', true);
        Ember.run.later(() => {
          if (parentComponent.isDestroyed) {
            return;
          }
          parentComponent.set('mouseActive', false);
        }, 100);
      }
    },

    focusIn() {
      this._super(...arguments);
      let parentComponent = this.get('parentComponent');
      if (parentComponent && !parentComponent.get('mouseActive')) {
        parentComponent.set('focused', true);
      }
    },

    focusOut() {
      this._super(...arguments);
      let parentComponent = this.get('parentComponent');
      if (parentComponent) {
        parentComponent.set('focused', false);
      }
    }
  });
});