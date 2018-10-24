define('ember-paper/mixins/color-mixin', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    classNameBindings: ['warn:md-warn', 'accent:md-accent', 'primary:md-primary']
  });
});