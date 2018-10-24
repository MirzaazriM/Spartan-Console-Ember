define('ember-paper/services/paper-toaster', ['exports', 'ember-get-config'], function (exports, _emberGetConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const DEFAULT_PROPS = {
    duration: 3000,
    position: 'bottom left'
  };

  exports.default = Ember.Service.extend({
    queue: Ember.A(),

    activeToast: Ember.computed.reads('queue.firstObject'),

    show(text, options) {
      let t = Ember.Object.create(Ember.assign({ text, show: true }, this.buildOptions(options)));
      this.get('queue').pushObject(t);
      return t;
    },

    showComponent(componentName, options) {
      let t = Ember.Object.create(Ember.assign({ componentName, show: true }, this.buildOptions(options)));
      this.get('queue').pushObject(t);
      return t;
    },

    cancelToast(toast) {
      toast.set('show', false);

      if (this.get('activeToast') === toast) {
        Ember.run.later(() => {
          Ember.tryInvoke(toast, 'onClose');
          this.get('queue').removeObject(toast);
        }, 400);
      } else {
        Ember.tryInvoke(toast, 'onClose');
        this.get('queue').removeObject(toast);
      }
    },

    buildOptions(options) {
      let toasterOptions = {};
      if (_emberGetConfig.default['ember-paper'] && _emberGetConfig.default['ember-paper']['paper-toaster']) {
        toasterOptions = _emberGetConfig.default['ember-paper']['paper-toaster'];
      }
      return Ember.assign({}, DEFAULT_PROPS, toasterOptions, options);
    }
  });
});