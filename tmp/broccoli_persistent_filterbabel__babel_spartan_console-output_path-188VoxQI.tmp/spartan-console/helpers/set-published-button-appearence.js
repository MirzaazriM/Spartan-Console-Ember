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
      return Ember.String.htmlSafe('background-color: #aaa');
    } else {
      return Ember.String.htmlSafe('background-color: #F44336');
    }
  }

  exports.default = Ember.Helper.helper(setPublishedButtonAppearence);
});