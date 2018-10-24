import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // media property
  media: computed(function(){
    return [];
  }),

  // action property
  action: '',

  didRender(){
    this._super(...arguments);

    if(this.get('action') === 'edit'){
      var mediaFiles = document.getElementById('uploadedMediaFiles');
      mediaFiles.innerHTML = '';

      // set uploaded files to the DOM
      for(var i = 0; i < this.get('media').length; i++){
        var element = document.createElement('p');
        var name = this.get('media')[i].source;
        name = name.substr(name.lastIndexOf('/') + 1);
        element.innerHTML = name;

        mediaFiles.appendChild(element);
      }
    }
  },

  actions: {

    // this function opens browse window for uploading images
    openUploadMuscleImageWindow(){
      // click on inputFileElement in application template (browse window can only be called from application template)
      document.getElementById('inputMediaFileElement').click();
    },

  }

});
