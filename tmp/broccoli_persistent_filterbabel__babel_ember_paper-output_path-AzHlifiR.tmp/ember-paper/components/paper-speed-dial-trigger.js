define('ember-paper/components/paper-speed-dial-trigger', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'md-fab-trigger',

    click() {
      this.get('speedDial').toggle();
    },

    focusOut() {
      this.get('speedDial').close();
    }
  });
});