define('ember-ace/test-support/components/ember-ace/line', ['exports', 'ember-cli-page-object', 'ember-ace/test-support/components/ember-ace/token'], function (exports, _emberCliPageObject, _token) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    /**
     * The text value of this entire line.
     */
    text: (0, _emberCliPageObject.text)(null, { normalize: false }),

    /**
     * A collection of tokens from which this line is composed.
     */
    tokens: (0, _emberCliPageObject.collection)('>', _token.default)
  };
});