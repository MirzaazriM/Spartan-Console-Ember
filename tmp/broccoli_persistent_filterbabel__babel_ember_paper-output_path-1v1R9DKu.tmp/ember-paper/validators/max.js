define('ember-paper/validators/max', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.max = max;
  function max(value, max) {
    return Ember.isEmpty(max) || Ember.isEmpty(value) || parseFloat(value) <= parseFloat(max);
  } /**
     * @module ember-paper
     */
  exports.default = {
    param: 'max',
    message: 'Must be less than %@.',
    validate: max
  };
});