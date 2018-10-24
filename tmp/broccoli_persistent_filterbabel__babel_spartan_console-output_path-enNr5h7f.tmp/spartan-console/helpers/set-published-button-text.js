define('spartan-console/helpers/set-published-button-text', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setPublishedButtonText = setPublishedButtonText;
  function setPublishedButtonText(data) {
    var value = data[0];

    var text = '';

    if (value === 'R') {
      text = 'PUBLISHED';
    } else {
      text = 'PUBLISH';
    }

    return text;
  }

  exports.default = Ember.Helper.helper(setPublishedButtonText);
});