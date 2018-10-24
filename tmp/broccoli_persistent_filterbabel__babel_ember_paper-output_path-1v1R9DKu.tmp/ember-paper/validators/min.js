define('ember-paper/validators/min', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.min = min;
  function min(value, min) {
    return Ember.isEmpty(min) || Ember.isEmpty(value) || parseFloat(value) >= parseFloat(min);
  } /**
     * @module ember-paper
     */
  exports.default = {
    param: 'min',
    message: 'Must be at least %@.',
    validate: min
  };
});