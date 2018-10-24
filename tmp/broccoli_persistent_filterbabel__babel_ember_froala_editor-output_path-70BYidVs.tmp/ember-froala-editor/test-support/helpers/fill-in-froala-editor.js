define('ember-froala-editor/test-support/helpers/fill-in-froala-editor', ['exports', '@ember/test-helpers'], function (exports, _testHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fillInFroalaEditor = fillInFroalaEditor;
  exports.default = Ember.Test.registerAsyncHelper('fillInFroalaEditor', function (app, selector, html) {
    fillInFroalaEditor(selector, html);
  });
  async function fillInFroalaEditor(selector, html) {

    // Get the editor element of the selector
    let $editor = Ember.$('.froala-editor-instance', selector);

    // Convert SafeStrings to regular string
    html = html && typeof html.toString === 'function' ? html.toString() : '';

    // Apply html via Froala Editor method and trigger a change event
    Ember.run(() => {
      $editor.froalaEditor('html.set', html);
      $editor.froalaEditor('undo.saveStep');
    });

    // Wait for the above runloop to finish
    return (0, _testHelpers.settled)();
  }
});