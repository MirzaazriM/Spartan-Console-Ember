define('ember-paper/components/paper-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'md-list',
    classNames: ['md-default-theme']
  });
});