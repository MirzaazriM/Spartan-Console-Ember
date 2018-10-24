define('ember-paper/validators/minlength', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.minlength = minlength;
  function minlength(value, minlength) {
    return Ember.isEmpty(minlength) || Ember.isNone(value) || `${value}`.length >= parseInt(minlength, 10);
  } /**
     * @module ember-paper
     */
  exports.default = {
    param: 'minlength',
    message: 'Must have at least %@ characters.',
    validate: minlength
  };
});