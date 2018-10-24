define('ember-paper/components/paper-select-search', ['exports', 'ember-power-select/components/power-select/before-options', 'ember-paper/templates/components/paper-select-search'], function (exports, _beforeOptions, _paperSelectSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _beforeOptions.default.extend({
    layout: _paperSelectSearch.default
  });
});