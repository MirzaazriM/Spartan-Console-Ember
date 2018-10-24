define('ember-ace/test-support/components/ember-ace/token', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    /**
     * The text value of this token
     */
    text: (0, _emberCliPageObject.text)(null, { normalize: false }),

    /**
     * The type of this token, as specified by the Ace tokenizer,
     * e.g. `variable` or `punctuation.operator`.
     *
     * See https://github.com/ajaxorg/ace/wiki/Creating-or-Extending-an-Edit-Mode#common-tokens
     */
    type: {
      isDescriptor: true,
      get() {
        const $el = (0, _emberCliPageObject.findElementWithAssert)(this);
        const classes = $el.attr('class').split(/\s+/);
        return classes.map(cls => cls.replace(/^ace_/, '')).join('.');
      }
    }
  };
});