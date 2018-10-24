define('ember-ace/test-support/components/ember-ace/autocomplete', ['exports', 'ember-ace/test-support/helpers/poll-condition', 'ember-ace/test-support/helpers/editor-interaction', 'ember-cli-page-object'], function (exports, _pollCondition, _editorInteraction, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.tooltip = exports.suggestion = undefined;


  /**
   * A suggestion in the autocomplete list, with a caption on the left
   * and metadata on the right.
   */
  const suggestion = exports.suggestion = {
    caption: (0, _emberCliPageObject.text)('.ace_'),
    meta: (0, _emberCliPageObject.text)('.ace_completion-meta')
  };

  /**
   * A rendered tooltip for the focused suggestion in the autocomplete dropdown.
   */
  const tooltip = exports.tooltip = {
    resetScope: true,
    testContainer: 'body',
    scope: '.ace_doc-tooltip'
  };

  exports.default = {
    isVisible: (0, _emberCliPageObject.isVisible)('.ace_autocomplete', { testContainer: 'body' }),

    /**
     * Trigger a request for autocomplete suggestions.
     */
    trigger: (0, _editorInteraction.default)(function (editor) {
      editor.execCommand('startAutocomplete');
      return (0, _pollCondition.default)('autocomplete visible', () => this.isVisible);
    }),

    /**
     * Clear the open autocomplete suggestions list, if present.
     */
    close: (0, _editorInteraction.default)(editor => editor.completer.detach()),

    /**
     * Focus the next suggestion in the list.
     */
    focusNext: (0, _editorInteraction.default)(function (editor) {
      const index = this.focusedIndex;
      editor.completer.goTo('down');
      return (0, _pollCondition.default)('next suggestion focused', () => this.focusedIndex === index + 1);
    }),

    /**
     * Focus the previous suggestion in the list.
     */
    focusPrevious: (0, _editorInteraction.default)(function (editor) {
      const index = this.focusedIndex;
      editor.completer.goTo('up');
      return (0, _pollCondition.default)('previous suggestion focused', () => this.focusedIndex === index - 1);
    }),

    /**
     * Select the highlighted suggestion for insertion.
     */
    selectFocused: (0, _editorInteraction.default)(editor => editor.completer.insertMatch()),

    /**
     * The index of the currently-highlighted selection
     */
    focusedIndex: {
      isDescriptor: true,
      get: (0, _editorInteraction.default)(editor => {
        return editor.completer.popup.getRow();
      })
    },

    /**
     * The currently-highlighted suggestion.
     */
    focusedSuggestion: {
      isDescriptor: true,
      get() {
        return this.suggestions.objectAt(this.focusedIndex);
      }
    },

    /**
     * The list of active suggestions.
     */
    suggestions: (0, _emberCliPageObject.collection)('.ace_autocomplete .ace_line', Object.assign({
      resetScope: true,
      testContainer: 'body'
    }, suggestion)),

    /**
     * The active suggestion tooltip.
     */
    tooltip
  };
});