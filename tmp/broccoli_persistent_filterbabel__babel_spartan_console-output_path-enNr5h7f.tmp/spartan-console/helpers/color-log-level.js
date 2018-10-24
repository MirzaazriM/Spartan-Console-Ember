define('spartan-console/helpers/color-log-level', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colorLogLevel = colorLogLevel;
  function colorLogLevel(status) {
    if (status[0] === 'ERROR') {
      return 'red';
    } else {
      return '#f4b042';
    }
  }

  exports.default = Ember.Helper.helper(colorLogLevel);
});