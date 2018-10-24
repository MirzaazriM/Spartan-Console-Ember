define('ember-power-select/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/utils/group-utils'], function (exports, _groupUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.emberPowerSelectIsGroup = emberPowerSelectIsGroup;
  function emberPowerSelectIsGroup([maybeGroup]) {
    return (0, _groupUtils.isGroup)(maybeGroup);
  }

  exports.default = Ember.Helper.helper(emberPowerSelectIsGroup);
});