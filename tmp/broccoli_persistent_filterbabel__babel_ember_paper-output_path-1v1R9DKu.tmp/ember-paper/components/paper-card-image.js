define('ember-paper/components/paper-card-image', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'img',
    classNames: ['md-card-image'],
    attributeBindings: ['src', 'title', 'alt']
  });
});