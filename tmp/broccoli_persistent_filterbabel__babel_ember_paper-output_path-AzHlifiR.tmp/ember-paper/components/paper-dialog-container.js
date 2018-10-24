define('ember-paper/components/paper-dialog-container', ['exports', 'ember-invoke-action'], function (exports, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['md-dialog-container'],

    mouseDown(ev) {
      this._sourceEl = ev.target;
    },

    mouseUp(ev) {
      if (this._sourceEl === this.element && ev.target === this.element) {
        ev.stopPropagation();
        ev.preventDefault();
        (0, _emberInvokeAction.invokeAction)(this, 'outsideClicked');
      }
    }
  });
});