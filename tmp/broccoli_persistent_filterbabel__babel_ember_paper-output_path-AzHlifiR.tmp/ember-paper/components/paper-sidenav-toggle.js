define('ember-paper/components/paper-sidenav-toggle', ['exports', 'ember-paper/templates/components/paper-sidenav-toggle'], function (exports, _paperSidenavToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperSidenavToggle.default,
    tagName: '',

    name: 'default',

    paperSidenav: Ember.inject.service(),

    toggle() {
      this.get('paperSidenav').toggle(this.get('name'));
    }

  });
});