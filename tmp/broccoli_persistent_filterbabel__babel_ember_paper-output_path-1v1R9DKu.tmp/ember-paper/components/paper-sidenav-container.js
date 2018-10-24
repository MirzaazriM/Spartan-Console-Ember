define('ember-paper/components/paper-sidenav-container', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['flex', 'layout-row'],
    attributeBindings: ['style'],
    style: Ember.String.htmlSafe('overflow: hidden')
  });
});