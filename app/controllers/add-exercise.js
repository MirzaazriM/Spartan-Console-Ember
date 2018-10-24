import Controller from '@ember/controller';
import { observer, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({

  // inject ajax service for making ajax requests
  ajax: service(),

  // inject application controller
  applicationController: controller('application'),

  containers: computed(function(){
    return ['bas', 'tag', 'imag'];
  }),

  nameObserver: observer('name', function(){

    var rawname = this.get('name').toLowerCase();
    rawname = rawname.replace(/ /g,"_");

    this.set('rawname', rawname);
  }),

  selectedTags: computed(function(){
    return [];
  }),

  // controller actions
  actions: {

    getDataByLanguage(){

      // show progress
      this.showProgress();

      this.set('selectedTags', []);

      var main = this;

      // get lang
      var lang = document.getElementById('languageHiddenValue').innerHTML;

      this.get('ajax').request('/tags?lang=' + lang + '&state=R', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model.tags', data);

          // hide progress
          main.hideProgress();

        }, error: function(){
          // hide progress
          main.hideProgress();
        }
      });

    },


    saveData(){
      // get exercise image
      var exerciseImage = document.getElementById('inputFileElement').files[0];

      // get exercise muscle image
      var muscleImage = document.getElementById('inputMuscleFileElement').files[0];

      // get media files
      var media = this.get('applicationController').get('mediaHolder');

      // get language
      var lang = document.getElementById('languageHiddenValue').innerHTML;
      // get hardness
      var hardness = document.getElementById('difficultyFilterDefaultValue').innerHTML;
      hardness = hardness.substr(0,1);

      // get title
      var name = this.get('name');

      // get tags
      var tags = this.get('selectedTags');

      // get rawname
      var rawname = this.get('rawname');

      // check if all necessary data is set
      if(exerciseImage === undefined || muscleImage === undefined || media.length === 0 || lang.length === 0 || name.length === 0 || tags.length === 0 || rawname.length === 0){
        // if not return from the function and send warning
        this.callToast('Incomplete data');

        return;
      }

      // set files unique names which will be used for database and for files on system server
      var exerciseImageName = this.setFileName(exerciseImage.name);
      var muscleImageName = this.setFileName(muscleImage.name);
      var mediaToSend = this.formatMedia(media);

      // format data to send
      var exerciseData = {
        "hardness": hardness,
        "muscles_involved": muscleImageName,
        "thumbnail": exerciseImageName,
        "raw_name": rawname,
        "names": [
          {
            "name": name,
            "lang": lang
          }
        ],
        "tags": tags,
        "media": mediaToSend
      };


      // if all data is there procede with the request and show progress bar
      document.getElementById('progressBar').classList.add('progressBarAnimation');

      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // send request for adding product data to the database
      var data = this.get('ajax').request('/exercises', {
        method: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        data: exerciseData,
        success: function () {

          var status = data.xhr.status;

          if(status === 200){
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            var imageFilesToSend = [
              {
                'source': exerciseImage,
                'name': exerciseImageName
              },
              {
                'source': muscleImage,
                'name': muscleImageName
              }
            ];

            // send image files
            for(var i = 0; i < imageFilesToSend.length; i++){
              main.sendImage(imageFilesToSend[i].source, imageFilesToSend[i].name);
            }

            // send media files
            for(var i = 0; i < mediaToSend.length; i++){
              main.sendImage(media[i], mediaToSend[i].source);
            }

            main.callToast('Exercise added');
            // return to the exercises page
            location.href = '/#/exercises';

          }else {
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            // call toast
            main.callToast('Unable to add exercise');
          }

        }
      });

    }
  },


  formatMedia(data){
    var media = [];

    // loop through data and format it for the request
    for(var i = 0; i < data.length; i++){

      var name = data[i].name;

      var item = {
        "type": name.substr(name.indexOf('.') + 1),
        "source": this.setFileName(name)
      };

      media.push(item);
    }

    return media;
  },


  // send uploaded image to the server
  sendImage(file, name){

    var main = this;

    // create form data object
    var formData = new FormData();

    // set formData object to send
    formData.set('file', file, name);

    // get url to send
    var url = this.get('applicationController').get('imageUploadEndpoint');

    // send request
    var data = this.get('ajax').request(url, {
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
      dataType: 'text',
      success: function () {

        var status = data.xhr.status;

        if(status === 200){
          // clear data
          main.clearData();
        }

      }
    });

  },


  setFileName(name){
    // remove whitespaces from the file name
    name = name.split(' ').join('_');

    // set unique name
    var updatedName = (Math.floor(Math.random() * 10000) + 1) + '-' + name;

    // return new name
    return updatedName;
  },


  clearData(){
    // this.set('selectedTags', []);
    // this.set('name', '');
    // this.set('biography', '');
    // document.getElementById('languageHiddenValue').innerHTML = '';
  },

  callToast(text){
    // use injected application controller to call its toast element
    this.get('applicationController').set('textForToast',text);
    this.get('applicationController').actions.openToast();
  },


  showProgress(){
    document.getElementById('progressBar').classList.add('progressBarAnimation');
  },


  hideProgress(){
    document.getElementById('progressBar').classList.remove('progressBarAnimation');
  }

});
