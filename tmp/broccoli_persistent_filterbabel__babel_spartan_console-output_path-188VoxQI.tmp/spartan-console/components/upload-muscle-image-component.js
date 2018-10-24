define('spartan-console/components/upload-muscle-image-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    image: '/assets/pictures/image-placeholder.png',

    actions: {

      // this function opens browse window for uploading images
      openUploadMuscleImageWindow() {
        // click on inputFileElement in application template (browse window can only be called from application template)
        document.getElementById('inputMuscleFileElement').click();
      }

    }
  });
});