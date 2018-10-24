define('ember-paper/mixins/child-mixin', ['exports', 'ember-paper/mixins/parent-mixin'], function (exports, _parentMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({

    // override to look for a specific parent class
    parentClass: _parentMixin.default,

    // this will typically be overriden when yielding a contextual component
    parentComponent: Ember.computed(function () {
      return this.nearestOfType(this.get('parentClass'));
    }),

    init() {
      this._super(...arguments);
      if (this.get('parentComponent')) {
        this.get('parentComponent').register(this);
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      if (this.get('parentComponent')) {
        this.get('parentComponent').unregister(this);
      }
    }
  });
});