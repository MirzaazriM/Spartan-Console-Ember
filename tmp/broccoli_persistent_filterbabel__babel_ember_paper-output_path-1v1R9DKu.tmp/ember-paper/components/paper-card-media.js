define('ember-paper/components/paper-card-media', ['exports', 'ember-paper/templates/components/paper-card-media'], function (exports, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperCardMedia.default,
    tagName: '',
    size: 'md'
  });
});