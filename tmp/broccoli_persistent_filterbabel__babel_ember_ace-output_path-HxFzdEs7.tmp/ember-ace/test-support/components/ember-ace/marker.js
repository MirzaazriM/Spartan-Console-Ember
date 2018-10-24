define('ember-ace/test-support/components/ember-ace/marker', ['exports', 'ember-cli-page-object'], function (exports, _emberCliPageObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    /**
     * The type of marker this is, as designated by the specified `class` for the marker.
     */
    type: {
      isDescriptor: true,
      get() {
        return (0, _emberCliPageObject.findElementWithAssert)(this).attr('class').split(/\s+/)[0];
      }
    },

    /**
     * The number of segments this marker is composed from. Typically a marker will have
     * one segment per document line that it spans.
     */
    segmentCount: {
      isDescriptor: true,
      get() {
        const type = this.type;
        let sibling = (0, _emberCliPageObject.findElementWithAssert)(this)[0];
        let count = 1;

        while (sibling = sibling.nextElementSibling) {
          if (!sibling.classList.contains(type) || sibling.classList.contains('ace_start')) {
            break;
          }
          count++;
        }

        return count;
      }
    }
  };
});