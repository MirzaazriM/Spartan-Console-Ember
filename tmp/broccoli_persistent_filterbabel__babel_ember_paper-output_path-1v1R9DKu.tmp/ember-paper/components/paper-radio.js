define('ember-paper/components/paper-radio', ['exports', 'ember-paper/components/paper-radio-base', 'ember-composability-tools'], function (exports, _paperRadioBase, _emberComposabilityTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperRadioBase.default.extend(_emberComposabilityTools.ChildMixin, {
    shouldRegister: false
  });
});