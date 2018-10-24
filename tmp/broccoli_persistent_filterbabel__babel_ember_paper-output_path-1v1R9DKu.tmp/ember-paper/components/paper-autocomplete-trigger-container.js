define('ember-paper/components/paper-autocomplete-trigger-container', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _trigger.default.extend({
    attributeBindings: ['label:md-floating-label', 'disabled:disabled']
  });
});