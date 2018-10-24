define('ember-froala-editor/helpers/merged-hash', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.mergedHash = mergedHash;
  function mergedHash(params, hash) {
    // Assumes all params are objects
    if (params.length > 0) {
      return Ember.assign({}, ...params, hash);
    } else {
      return hash;
    }
  } // mergedHash()


  exports.default = Ember.Helper.helper(mergedHash);
});