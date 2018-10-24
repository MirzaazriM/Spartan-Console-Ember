define('ember-paper/components/paper-card-title-media', ['exports', 'ember-paper/templates/components/paper-card-title-media'], function (exports, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperCardTitleMedia.default,
    tagName: 'md-card-title-media',
    size: 'md'
  });
});