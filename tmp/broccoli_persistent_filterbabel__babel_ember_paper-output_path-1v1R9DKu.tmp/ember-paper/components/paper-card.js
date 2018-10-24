define('ember-paper/components/paper-card', ['exports', 'ember-paper/templates/components/paper-card'], function (exports, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperCard.default,
    tagName: 'md-card'
  });
});