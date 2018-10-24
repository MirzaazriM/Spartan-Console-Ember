define('spartan-console/helpers/set-published-button-appearence', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setPublishedButtonAppearence = setPublishedButtonAppearence;
  function setPublishedButtonAppearence(data) {
    var value = data[0];

    var color = '';

    if (value === 'R') {
      color = '#aaa';
    } else {
      color = '#F44336';
    }

    return color;
  }

  exports.default = Ember.Helper.helper(setPublishedButtonAppearence);
});