define('spartan-console/helpers/color-item-state', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colorItemState = colorItemState;
  function colorItemState(status) {
    // check status and return right color
    if (status[0] === 'pending') {
      return Ember.String.htmlSafe("color: red");
    } else {
      return Ember.String.htmlSafe("color: green");
    }
  }

  exports.default = Ember.Helper.helper(colorItemState);
});