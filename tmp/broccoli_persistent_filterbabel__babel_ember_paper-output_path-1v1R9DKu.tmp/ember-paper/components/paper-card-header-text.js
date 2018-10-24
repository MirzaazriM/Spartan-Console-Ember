define('ember-paper/components/paper-card-header-text', ['exports', 'ember-paper/templates/components/paper-card-header-text'], function (exports, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperCardHeaderText.default,
    tagName: 'md-card-header-text'
  });
});