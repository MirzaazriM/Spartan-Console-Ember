define('ember-paper/validators/maxlength', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.maxlength = maxlength;
  function maxlength(value, maxlength) {
    return Ember.isEmpty(maxlength) || Ember.isNone(value) || `${value}`.length <= parseInt(maxlength, 10);
  } /**
     * @module ember-paper
     */
  exports.default = {
    param: 'maxlength',
    message: 'Must not exceed %@ characters.',
    validate: maxlength
  };
});