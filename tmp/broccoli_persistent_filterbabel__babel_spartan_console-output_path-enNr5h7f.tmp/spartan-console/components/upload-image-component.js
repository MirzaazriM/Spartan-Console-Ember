define('spartan-console/components/upload-image-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    image: '/assets/pictures/image-placeholder.png',

    actions: {
      // this function opens browse window for uploading images
      openUploadImageWindow() {
        // click on inputFileElement in application template (browse window can only be called from application template)
        document.getElementById('inputFileElement').click();
      }

    }

  });
});