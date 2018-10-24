define('ember-paper/mixins/parent-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    childComponents: Ember.computed(function () {
      return Ember.A();
    }),

    register(child) {
      this.get('childComponents').pushObject(child);
    },

    unregister(child) {
      this.get('childComponents').removeObject(child);
    }
  });
});