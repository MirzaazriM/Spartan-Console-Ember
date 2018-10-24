define('ember-paper/components/paper-toaster', ['exports', 'ember-paper/templates/components/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paperToaster.default,
    tagName: '',
    paperToaster: Ember.inject.service(),
    activeToast: Ember.computed.reads('paperToaster.activeToast'),

    onClose(toast) {
      this.get('paperToaster').cancelToast(toast);
    }
  });
});