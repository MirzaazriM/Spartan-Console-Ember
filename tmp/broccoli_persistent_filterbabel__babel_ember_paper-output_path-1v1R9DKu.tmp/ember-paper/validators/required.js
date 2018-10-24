define('ember-paper/validators/required', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.required = required;
  function required(value, required) {
    return required === true && !Ember.isEmpty(value) || required !== true;
  } /**
     * @module ember-paper
     */
  exports.default = {
    param: 'required',
    message: 'This is required.',
    // required can be a boolean or 'style' for just required asterisk styling.
    validate: required
  };
});