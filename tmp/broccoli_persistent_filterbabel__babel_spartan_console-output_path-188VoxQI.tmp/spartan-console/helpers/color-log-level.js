define('spartan-console/helpers/color-log-level', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colorLogLevel = colorLogLevel;
  function colorLogLevel(status) {
    if (status[0] === 'ERROR') {
      return Ember.String.htmlSafe("color: red");
    } else {
      return Ember.String.htmlSafe("color: #f4b042");
    }
  }

  exports.default = Ember.Helper.helper(colorLogLevel);
});