define('spartan-console/helpers/check-delete-button', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkDeleteButton = checkDeleteButton;
  function checkDeleteButton(data) {

    var className = '';

    if (data[0] === 'R') {
      className = 'inactiveDeleteButton';
    } else {
      className = '';
    }

    return className;
  }

  exports.default = Ember.Helper.helper(checkDeleteButton);
});