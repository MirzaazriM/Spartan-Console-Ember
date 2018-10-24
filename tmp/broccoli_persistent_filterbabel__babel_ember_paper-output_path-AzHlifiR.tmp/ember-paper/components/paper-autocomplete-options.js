define('ember-paper/components/paper-autocomplete-options', ['exports', 'ember-power-select/components/power-select/options', 'ember-paper/templates/components/paper-autocomplete-options'], function (exports, _options, _paperAutocompleteOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _options.default.extend({
    layout: _paperAutocompleteOptions.default,

    _optionFromIndex(index) {
      let parts = index.split('.');
      let options = this.get('options');
      let option = options[parseInt(parts[0], 10)];
      for (let i = 1; i < parts.length; i++) {
        option = option.options[parseInt(parts[i], 10)];
      }
      return option !== undefined ? Ember.get(option, 'raw') : option;
    }
  });
});