define('ember-pell/components/pell-editor', ['exports', 'ember-pell/pell'], function (exports, _pell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    pellOptions: null,

    onChange() /*html*/{},

    valueObserver: Ember.observer('value', function () {
      if (this.get('pell')) {
        this._setValue();
      }
    }),

    didInsertElement() {
      this._super(...arguments);

      const options = this._options();
      const pellInstance = _pell.default.init(options);

      const contentClass = options.classes && options.classes.content || 'pell-content';
      const contentClassSelector = `.${contentClass.split(' ').join('.')}`;
      this.set('pell', pellInstance.querySelector(contentClassSelector));

      this._setValue();
    },

    _options() {
      return Object.assign({}, this.get('pellOptions'), {
        element: this.element,
        onChange: this.onChange
      });
    },

    _setValue() {
      const val = this.get('value');
      if (this.get('pell').innerHTML !== val && typeof val !== 'undefined') {
        this.get('pell').innerHTML = val;
      }
    }
  });
});