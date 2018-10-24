define('ember-paper/components/paper-speed-dial-actions', ['exports', 'ember-paper/templates/components/paper-speed-dial-actions'], function (exports, _paperSpeedDialActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperSpeedDialActions.default,
    tagName: 'md-fab-actions'
  });
});