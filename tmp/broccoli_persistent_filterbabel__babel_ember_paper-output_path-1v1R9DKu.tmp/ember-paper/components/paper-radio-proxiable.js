define('ember-paper/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-base', 'ember-paper/mixins/proxiable-mixin'], function (exports, _paperRadioBase, _proxiableMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperRadioBase.default.extend(_proxiableMixin.default, {
    processProxy() {
      this.click();
    }
  });
});