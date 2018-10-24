define('spartan-console/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ajax.default.extend({
    host: 'http://staging.admin.diamondappgroup.com' // 'http://spartan-admin:8888'   http://staging.admin.diamondappgroup.com
  });
});