define('ember-paper/components/paper-sidenav', ['exports', 'ember-paper/templates/components/paper-sidenav', 'ember-invoke-action'], function (exports, _paperSidenav, _emberInvokeAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperSidenav.default,
    tagName: '',

    name: 'default',
    position: 'left',
    lockedOpen: 'gt-sm',
    open: false,
    closed: Ember.computed.not('open'),
    closeOnClick: true,

    actions: {
      onToggle() {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', ...arguments);
      },
      onBackdropTap() {
        (0, _emberInvokeAction.invokeAction)(this, 'onToggle', false);
      }
    }
  });
});