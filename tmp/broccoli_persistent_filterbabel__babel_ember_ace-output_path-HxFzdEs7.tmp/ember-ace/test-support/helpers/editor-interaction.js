define('ember-ace/test-support/helpers/editor-interaction', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = editorInteraction;
  function editorInteraction(callback) {
    return function () {
      const $pre = (0, _emberCliPageObject.findElementWithAssert)(this, 'pre');
      return callback.call(this, $pre[0].env.editor, ...arguments);
    };
  }
});