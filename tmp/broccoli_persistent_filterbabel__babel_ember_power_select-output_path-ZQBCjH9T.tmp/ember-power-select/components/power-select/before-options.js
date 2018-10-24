define('ember-power-select/components/power-select/before-options', ['exports', 'ember-power-select/templates/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    layout: _beforeOptions.default,
    autofocus: true,

    // Lifecycle hooks
    didInsertElement() {
      this._super(...arguments);

      if (this.get('autofocus')) {
        this.focusInput();
      }
    },

    willDestroyElement() {
      this._super(...arguments);
      if (this.get('searchEnabled')) {
        Ember.run.scheduleOnce('actions', this, this.get('select').actions.search, '');
      }
    },

    // Actions
    actions: {
      onKeydown(e) {
        let onKeydown = this.get('onKeydown');
        if (onKeydown(e) === false) {
          return false;
        }
        if (e.keyCode === 13) {
          let select = this.get('select');
          select.actions.close(e);
        }
      }
    },

    // Methods
    focusInput() {
      this.input = document.querySelector(`.ember-power-select-search-input[aria-controls="${this.get('listboxId')}"]`);
      if (this.input) {
        Ember.run.scheduleOnce('afterRender', this.input, 'focus');
      }
    }
  });
});