define('ember-power-select/helpers/ember-power-select-is-selected', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.emberPowerSelectIsSelected = emberPowerSelectIsSelected;


  // TODO: Make it private or scoped to the component
  function emberPowerSelectIsSelected([option, selected] /* , hash*/) {
    if (selected === undefined || selected === null) {
      return false;
    }
    if (Ember.isArray(selected)) {
      for (let i = 0; i < selected.length; i++) {
        if (Ember.isEqual(selected[i], option)) {
          return true;
        }
      }
      return false;
    } else {
      return Ember.isEqual(option, selected);
    }
  }

  exports.default = Ember.Helper.helper(emberPowerSelectIsSelected);
});