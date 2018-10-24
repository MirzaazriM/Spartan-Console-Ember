define('spartan-console/mixins/default-attrs', ['exports', 'virtual-each/mixins/default-attrs'], function (exports, _defaultAttrs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultAttrs.default;
    }
  });
});