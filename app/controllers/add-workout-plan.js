import Controller from '@ember/controller';
import { observer, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({
  // set controller properties and actions

  // data to use while searching
  defaultWorkoutsModelData: computed(function(){
    return [];
  }),

  modelObserver: observer('model', function(){
    this.set('defaultWorkoutsModelData', this.get('model.workouts').data);
  }),

  nameObserver: observer('name', function(){

    var rawname = this.get('name').toLowerCase();
    rawname = rawname.replace(/ /g,"_");

    this.set('rawname', rawname);
  }),

  // inject ajax service for making ajax requests
  ajax: service(),

  // inject application controller
  applicationController: controller('application'),

  containers: computed(function(){
    return ['bas', 'tag', 'imag'];
  }),

  selectedTags: computed(function(){
    return [];
  }),

  selectedWorkouts: computed(function(){
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

      // update tags
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

      // update workouts
      this.get('ajax').request('/workouts/list?from=0&limit=1000&state=R&lang=' + lang, {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model.workouts', data);

          // hide progress
          main.hideProgress();

        }, error: function(){
          // hide progress
          main.hideProgress();
        }
      });

    },


    search(){
      // set model data as default model data
      var modelData = this.get('defaultWorkoutsModelData');

      // get value entered in search field
      var value = document.getElementById('searcher').value.toLowerCase();

      if(value !== ''){
        // set value for filtered data
        var filteredModelData = [];

        // loop through values
        for(var i = 0; i < modelData.length; i++){

          // get name of current product
          var name = modelData[i].name;
          name = name.toLowerCase();

          // check if product name contains entered value
          if(name.indexOf(value) !== -1){
            // if yes set it to the filtered array
            filteredModelData.push(modelData[i])
          }
        }

        // set new model data as filtered data
        this.set('model.workouts.data', filteredModelData);
      }else {

        // set new model data as default model data
        this.set('model.workouts.data', this.get('defaultWorkoutsModelData'));
      }

    },



    saveData(){
      // get uploaded images
      var image = document.getElementById('inputFileElement').files[0];

      // images name holder
      var imageName = '';

      if(image){
        var name = image.name;
        // replace whitespaces with _
        name = name.split(' ').join('_');
        imageName = name;
      }

      // set language
      var lang = document.getElementById('languageHiddenValue').innerHTML;

      // set title
      var title = this.get('name');

      // set rawname
      var rawname = this.get('rawname');

      // set tags
      var tags = this.get('selectedTags');

      // set workouts
      var workouts = this.get('selectedWorkouts');

      // set description
      var description = this.get('biography');

      // check if all necessary data is set
      if(imageName.length === 0 || lang.length === 0 || title.length === 0 || rawname.length === 0 || tags.length === 0 || description.length === 0 || workouts.length === 0){
        // return from the function
        this.callToast('Incomplete data');

        return;
      }

      // format data to send
      var planData = {
          "thumbnail": imageName,
          "raw_name": rawname,
          "type": "W",
          "names": [
            {
              "name": title,
              "description": description,
              "language": lang
            }
          ],
          "tags": tags,
          "workouts": workouts
      };


      // if all data is there procede with the request and show progress bar
      document.getElementById('progressBar').classList.add('progressBarAnimation');

      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // send request for adding product data to the database
      var data = this.get('ajax').request('/workoutplans', {
        method: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        data: planData,
        success: function () {

          var status = data.xhr.status;

          if(status === 200){
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            main.callToast('Plan added');
            // if data is added, send images to the server
            main.sendImages(image);
          }else {
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            // call toast
            main.callToast('Unable to add plan');
          }

        }
      });

    }
  },


  // send uploaded image to the server
  sendImages(image){

    var main = this;

    // create form data object
    var formData = new FormData();

    // get uploaded image files
    var file = document.getElementById('inputFileElement');

    // get name of the current image and replace whitespaces with _
    var name = file.files[0].name;
    name = name.split(' ').join('_');

    // set formData object to send
    formData.set('file', file.files[0], name);

    // get url to send
    var url = this.get('applicationController').get('imageUploadEndpoint');

    // send request
    var data = this.get('ajax').request(url, { //
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
      dataType: 'text',
      success: function () {

        var status = data.xhr.status;

        if(status === 200){
          // wait for 1 second so that image is uploaded to the server before request for the new data is made
          setTimeout(function(){

            // clear data
            main.clearData();

            // redirect to recipes page
            location.href = '/#/workout-plans';
          }, 1000);
        }


      }
    });

  },


  clearData(){
    this.set('selectedTags', []);
    this.set('name', '');
    this.set('rawname');
    this.set('biography', '');
    document.getElementById('languageHiddenValue').innerHTML = '';
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