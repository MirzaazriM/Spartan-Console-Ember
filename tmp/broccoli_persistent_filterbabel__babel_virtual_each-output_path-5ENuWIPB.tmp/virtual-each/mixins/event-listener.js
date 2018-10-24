define('virtual-each/mixins/event-listener', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    init() {
      this._super(...arguments);

      if (!this.eventHandlers) {
        this.eventHandlers = {};
      }
    },

    handleEvent(event) {
      const fn = this.eventHandlers[event.type];

      if (typeof fn === 'function') {
        return fn.call(this, event);
      }
    },

    didInsertElement() {
      this._super(...arguments);

      Object.keys(this.eventHandlers).forEach(eventName => {
        this.element.addEventListener(eventName, this, false);
      });
    },

    willDestroyElement() {
      this._super(...arguments);

      Object.keys(this.eventHandlers).forEach(eventName => {
        this.element.removeEventListener(eventName, this, false);
      });
    }
  });
});