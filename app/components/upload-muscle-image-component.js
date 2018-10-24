import Component from '@ember/component';

export default Component.extend({

  image: '/assets/pictures/image-placeholder.png',

  actions: {

    // this function opens browse window for uploading images
    openUploadMuscleImageWindow(){
      // click on inputFileElement in application template (browse window can only be called from application template)
      document.getElementById('inputMuscleFileElement').click();
    },

  }
});
