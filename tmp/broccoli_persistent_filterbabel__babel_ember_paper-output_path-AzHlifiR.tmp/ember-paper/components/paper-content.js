define('ember-paper/components/paper-content', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'md-content',
    classNames: ['md-default-theme'],
    attributeBindings: ['layout-padding', 'scroll-y:md-scroll-y'],
    classNameBindings: ['padding:md-padding']
  });
});