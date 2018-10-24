define('ember-paper/components/paper-card-title-text', ['exports', 'ember-paper/templates/components/paper-card-title-text'], function (exports, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperCardTitleText.default,
    tagName: 'md-card-title-text'
  });
});