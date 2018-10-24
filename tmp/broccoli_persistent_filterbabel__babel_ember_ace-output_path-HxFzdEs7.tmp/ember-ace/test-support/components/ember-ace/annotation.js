define('ember-ace/test-support/components/ember-ace/annotation', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    /**
     * The type of annotation this is, typically one of 'info', 'warning', or 'error'.
     */
    type: {
      isDescriptor: true,
      get() {
        const classes = (0, _emberCliPageObject.findElementWithAssert)(this).attr('class').split(/\s+/);
        return classes[classes.length - 1].replace(/^ace_/, '');
      }
    },

    /**
     * The 0-indexed row number of this annotation.
     */
    row: {
      isDescriptor: true,
      get() {
        const el = (0, _emberCliPageObject.findElementWithAssert)(this)[0];
        return [].slice.call(el.parentElement.children).indexOf(el);
      }
    }
  };
});