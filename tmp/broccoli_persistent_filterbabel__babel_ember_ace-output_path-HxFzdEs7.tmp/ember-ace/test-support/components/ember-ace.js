define('ember-ace/test-support/components/ember-ace', ['exports', 'ember-cli-page-object', 'ember-ace/test-support/helpers/editor-interaction', 'ember-ace/test-support/components/ember-ace/line', 'ember-ace/test-support/components/ember-ace/marker', 'ember-ace/test-support/components/ember-ace/annotation', 'ember-ace/test-support/components/ember-ace/autocomplete'], function (exports, _emberCliPageObject, _editorInteraction, _line, _marker, _annotation, _autocomplete) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    /**
     * The current text value of the entire contents of the editor, with any
     * leading or trailing whitespace removed.
     */
    value: {
      isDescriptor: true,
      get: (0, _editorInteraction.default)(editor => {
        return editor.getValue();
      })
    },

    /**
     * Update the current value of this editor.
     */
    setValue: (0, _editorInteraction.default)((editor, value) => {
      editor.setValue(value, 1);
      editor.renderer.updateFull(true);
    }),

    /**
     * Moves the cursor to the given position.
     */
    moveCursorTo: (0, _editorInteraction.default)((editor, row, column) => {
      editor.moveCursorTo(row, column);
    }),

    /**
     * A collection of lines making up the editor contents.
     */
    lines: (0, _emberCliPageObject.collection)('.ace_line', _line.default),

    /**
     * The autocomplete dropdown box.
     */
    autocomplete: _autocomplete.default,

    /**
     * A collection of line gutter annotations.
     */
    annotations: (0, _emberCliPageObject.collection)('.ace_gutter-cell:not([class$=" "])', _annotation.default),

    /**
     * A collection of markers overlaying text.
     */
    frontMarkers: (0, _emberCliPageObject.collection)('.ace_layer:nth-child(4) .ace_start', _marker.default),

    /**
     * A collection of markers underlaying text.
     */
    backMarkers: (0, _emberCliPageObject.collection)('.ace_layer:nth-child(2) .ace_start:not(.ace_selection)', _marker.default)
  };
});