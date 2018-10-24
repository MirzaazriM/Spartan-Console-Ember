define('ember-power-select/helpers/ember-power-select-true-string-if-present', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.emberPowerSelectTrueStringIfPresent = emberPowerSelectTrueStringIfPresent;
  function emberPowerSelectTrueStringIfPresent([bool] /* , hash*/) {
    return bool ? 'true' : false;
  }

  exports.default = Ember.Helper.helper(emberPowerSelectTrueStringIfPresent);
});