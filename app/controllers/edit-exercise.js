import Controller from '@ember/controller';
import { observer, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({

  // inject ajax service for making ajax requests
  ajax: service(),

  // inject application controller
  applicationController: controller('application'),

  // old exercise image
  oldImage: '',

  // old muscle image
  oldMuscleImage: '',

  // old hardness value
  oldHardness: '',

  // media value
  media: computed(function(){
    return [];
  }),

  nameObserver: observer('name', function(){
    var rawname = this.get('name').toLowerCase();
    rawname = rawname.replace(/ /g,"_");

    this.set('rawname', rawname);
  }),

  // observe model
  modelObserver: observer('model', function(){
    var exercise = this.get('model.exercise.data');
    this.set('oldImage', exercise.thumbnail);
    this.set('oldMuscleImage', exercise.muscles_involved);
    this.set('selectedTags', exercise.tags);
    this.set('media', exercise.formats);
    this.set('name', exercise.name);
    this.set('rawname', exercise.raw_name);
    this.set('oldHardness', exercise.hardness);

  }),

  containers: computed(function(){
    return ['bas', 'tag', 'imag'];
  }),

  selectedTags: computed(function(){
    return [];
  }),

  // controller actions
  actions: {

    saveData(){
      // get exercise image and check if it is new or not
      var exerciseImage = document.getElementById('inputFileElement').files[0];
      var newExerciseImage = false;
      var exerciseImageName = '';
      if(exerciseImage === undefined){
         exerciseImageName = this.formatLink(this.get('oldImage'));
      }else {
        exerciseImageName = this.setFileName(exerciseImage.name);
        newExerciseImage = true;
      }

      // get muscle image and check if it is new or not
      var muscleImage = document.getElementById('inputMuscleFileElement').files[0];
      var newMuscleImage = false;
      var muscleImageName = '';
      if(muscleImage === undefined){
        muscleImageName = this.formatLink(this.get('oldMuscleImage'));
      }else {
        muscleImageName = this.setFileName(muscleImage.name);
        newMuscleImage = true;
      }


      // get media files and check if they are new or not
      var media = this.get('applicationController').get('mediaHolder');
      var newMedia = false;
      var mediaToSend = [];
      if(media.length === 0){
        mediaToSend = this.formatOldMedia(this.get('media'));
      }else {
        mediaToSend = this.formatMedia(media);
        newMedia = true;
      }

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
      if(name.length === 0 || tags.length === 0 || rawname.length === 0){
        // if not return from the function and send warning
        this.callToast('Incomplete data');

        return;
      }

      // format data to send
      var exerciseData = {
        "id": sessionStorage.getItem('idToEdit'),
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
        method: 'PUT',
        dataType: 'text',
        contentType: 'application/json',
        data: exerciseData,
        success: function () {

          var status = data.xhr.status;

          if(status === 200){
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            // check which images are new and set imageFilesToSend value
            var imageFilesToSend = [];
            if(newExerciseImage === true && newMuscleImage === true){
              imageFilesToSend = [
                {
                  'source': exerciseImage,
                  'name': exerciseImageName
                },
                {
                  'source': muscleImage,
                  'name': muscleImageName
                }
              ];
            }else if(newExerciseImage === true && newMuscleImage === false){
              imageFilesToSend = [
                {
                  'source': exerciseImage,
                  'name': exerciseImageName
                }
              ];
            }else if(newExerciseImage === false && newMuscleImage === true){
              imageFilesToSend = [
                {
                  'source': muscleImage,
                  'name': muscleImageName
                }
              ];
            }


            // if there is new uploaded images send them to the server
            if(imageFilesToSend.length !== 0){
              // send image files
              for(var i = 0; i < imageFilesToSend.length; i++){
                main.sendImage(imageFilesToSend[i].source, imageFilesToSend[i].name);
              }
            }


            // if there is new uploaded media send it to the server
            if(newMedia === true){
              // send media files
              for(var i = 0; i < mediaToSend.length; i++){
                main.sendImage(media[i], mediaToSend[i].source);
              }
            }


            main.callToast('Exercise updated');

            // clear data
            main.clearData();

            // return to the exercises page
            location.href = '/#/exercises';

          }else {
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            // call toast
            main.callToast('Unable to edit exercise');
          }

        }
      });

    }
  },


  formatLink(link){

    var newLink = link.substr(link.lastIndexOf('/') + 1);

    return newLink;
  },


  formatOldMedia(data){
    var media = [];

    // loop through data and format it for the request
    for(var i = 0; i < data.length; i++){

      var source = data[i].source;

      var item = {
        "type": data[i].type,
        "source": this.formatLink(source)
      };

      media.push(item);
    }

    return media;
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
    this.set('selectedTags', []);
    this.set('media', []);
    this.set('name', '');
    this.set('rawname','');
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
