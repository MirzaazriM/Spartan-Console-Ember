define('ember-froala-editor/test-support/index', ['exports', 'ember-froala-editor/test-support/helpers/fill-in-froala-editor'], function (exports, _fillInFroalaEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'fillInFroalaEditor', {
    enumerable: true,
    get: function () {
      return _fillInFroalaEditor.fillInFroalaEditor;
    }
  });
});