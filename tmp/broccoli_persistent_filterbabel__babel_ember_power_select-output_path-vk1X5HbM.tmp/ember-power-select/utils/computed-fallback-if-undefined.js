define('ember-power-select/utils/computed-fallback-if-undefined', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = computedFallbackIfUndefined;
  function computedFallbackIfUndefined(fallback) {
    return Ember.computed({
      get() {
        return fallback;
      },
      set(_, v) {
        return v === undefined ? fallback : v;
      }
    });
  }
});