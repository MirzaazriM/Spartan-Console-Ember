define('spartan-console/helpers/merged-hash', ['exports', 'ember-froala-editor/helpers/merged-hash'], function (exports, _mergedHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mergedHash.default;
    }
  });
  Object.defineProperty(exports, 'mergedHash', {
    enumerable: true,
    get: function () {
      return _mergedHash.mergedHash;
    }
  });
});