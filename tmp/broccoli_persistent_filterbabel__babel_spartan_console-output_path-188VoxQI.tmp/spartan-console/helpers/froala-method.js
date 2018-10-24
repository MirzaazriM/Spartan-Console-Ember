define('spartan-console/helpers/froala-method', ['exports', 'ember-froala-editor/helpers/froala-method'], function (exports, _froalaMethod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _froalaMethod.default;
    }
  });
  Object.defineProperty(exports, 'froalaMethod', {
    enumerable: true,
    get: function () {
      return _froalaMethod.froalaMethod;
    }
  });
});