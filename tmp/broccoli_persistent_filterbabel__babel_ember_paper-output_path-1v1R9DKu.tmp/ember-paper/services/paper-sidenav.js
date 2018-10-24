define('ember-paper/services/paper-sidenav', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    init() {
      this._super(...arguments);
      this._sidenavs = {};
    },

    willDestroy() {
      this._super(...arguments);
      delete this._sidenavs;
    },

    register(name, sidenav) {
      if (!this._sidenavs[name]) {
        this._sidenavs[name] = [];
      }
      this._sidenavs[name].push({ name, sidenav });
    },

    unregister(name, sidenav) {
      (true && !(this._sidenavs[name] && this._sidenavs[name].length) && Ember.assert(`You tried to unregister a sidenav named '${name}' but no such sidenav is registered`, this._sidenavs[name] && this._sidenavs[name].length));

      let sidenavs = this._sidenavs[name] || [];
      this._sidenavs[name] = sidenavs.filter(s => s.sidenav !== sidenav);
    },

    open(name = 'default') {
      (true && !(this._sidenavs[name] && this._sidenavs[name].length) && Ember.assert(`You tried to open a sidenav named '${name}' but no such sidenav is registered`, this._sidenavs[name] && this._sidenavs[name].length));

      let sidenavs = this._sidenavs[name] || [];
      sidenavs.forEach(s => s.sidenav.open());
    },

    close(name = 'default') {
      (true && !(this._sidenavs[name] && this._sidenavs[name].length) && Ember.assert(`You tried to close a sidenav named '${name}' but no such sidenav is registered`, this._sidenavs[name] && this._sidenavs[name].length));

      let sidenavs = this._sidenavs[name] || [];
      sidenavs.forEach(s => s.sidenav.close());
    },

    toggle(name = 'default') {
      (true && !(this._sidenavs[name] && this._sidenavs[name].length) && Ember.assert(`You tried to toggle a sidenav named '${name}' but no such sidenav is registered`, this._sidenavs[name] && this._sidenavs[name].length));

      let sidenavs = this._sidenavs[name] || [];
      sidenavs.forEach(s => s.sidenav.toggle());
    }
  });
});