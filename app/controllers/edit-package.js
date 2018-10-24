import Controller from '@ember/controller';
import { observer, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({
  // set controller properties and actions

  currentTab: 'basicTab',

  oldImage: '',

  // data to use while searching
  defaultWorkoutPlansModelData: computed(function(){
    return [];
  }),

  // data to use while searching
  defaultNutritionPlansModelData: computed(function(){
    return [];
  }),

  nameObserver: observer('name', function(){
    var rawname = this.get('name').toLowerCase();
    rawname = rawname.replace(/ /g,"_");

    this.set('rawname', rawname);
  }),

  modelObserver: observer('model', function(){
    this.set('defaultWorkoutPlansModelData', this.get('model.worplans').data);
    this.set('defaultNutritionPlansModelData', this.get('model.nutplans').data);

    var packageData = this.get('model.package').data;
    this.set('name', packageData.name);
    this.set('rawname', packageData.raw_name);
    this.set('biography', packageData.description);
    this.set('selectedTags', packageData.tags);
    this.set('oldImage', packageData.thumbnail);

    // workoutplans ids
    var worplans = packageData.training_plans;
    var worIds = [];
    if(worplans !== null){
      for(var i = 0; i < worplans.length; i++){
        worIds.push(worplans[i].id);
      }
    }
    this.set('selectedWorkoutPlans', worIds);

    // nutritionplans ids
    var nutplans = packageData.nutrition_plans;
    var nutIds = [];
    if(nutplans !== null){
      for(var i = 0; i < nutplans.length; i++){
        nutIds.push(nutplans[i].id);
      }
    }

    this.set('selectedNutritionPlans', nutIds);
  }),

  // inject ajax service for making ajax requests
  ajax: service(),

  // inject application controller
  applicationController: controller('application'),

  selectedTags: computed(function(){
    return [];
  }),

  selectedNutritionPlans: computed(function(){
    return [];
  }),

  selectedWorkoutPlans: computed(function(){
    return [];
  }),

  // controller actions
  actions: {

    search(){
      // check at which tab is currently beig searched
      var tab = this.get('currentTab');

      // set model data as default model data
      var modelData;
      var value = '';
      if(tab === 'worplansTab'){
        modelData = this.get('defaultWorkoutPlansModelData');
      }else {
        modelData = this.get('defaultNutritionPlansModelData');
      }

      value = document.getElementById('searcher').value.toLowerCase();

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
        if(tab === 'worplansTab'){
          this.set('model.worplans.data', filteredModelData);
        }else {
          this.set('model.nutplans.data', filteredModelData);
        }

      }else {

        // set new model data as default model data
        if(tab === 'worplansTab'){
          this.set('model.worplans.data', this.get('defaultWorkoutPlansModelData'));
        }else {
          this.set('model.nutplans.data', this.get('defaultNutritionPlansModelData'));
        }

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
      }else {
        imageName = this.formatLink(this.get('oldImage'));
      }

      // set language
      var lang = document.getElementById('languageHiddenValue').innerHTML;

      // set title
      var title = this.get('name');

      // set rawname
      var rawname = this.get('rawname');

      // set tags
      var tags = this.get('selectedTags');

      // set nutrition plans
      var nutplans = this.get('selectedNutritionPlans');

      // set workout plans
      var worplans = this.get('selectedWorkoutPlans');

      // set description
      var description = this.get('biography');

      // check if all necessary data is set
      if(imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || rawname.length === 0 || description.length === 0 || worplans.length === 0 || nutplans.length === 0){
        // return from the function
        this.callToast('Incomplete data');

        return;
      }

      // format data to send
      var packageData = {
        "id": sessionStorage.getItem('idToEdit'),
        "thumbnail": imageName,
        "raw_name": rawname,
        "names": [
          {
            "name": title,
            "description": description,
            "language": lang
          }
        ],
        "tags": tags,
        "plans":
          {
            "workout_plans": worplans,
            "recepie_plans": nutplans
          }
      };


      // if all data is there procede with the request and show progress bar
      document.getElementById('progressBar').classList.add('progressBarAnimation');

      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // send request for adding product data to the database
      var data = this.get('ajax').request('/packages', {
        method: 'PUT',
        dataType: 'text',
        contentType: 'application/json',
        data: packageData,
        success: function () {

          var status = data.xhr.status;

          if(status === 200){
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            main.callToast('Package updated');

            if(imageName !== main.formatLink(main.get('oldImage'))){
              main.sendImages(image);
            }else {
              location.href = '/#/packages';
            }

          }else {
            // remove animation class from progress bar element
            document.getElementById('progressBar').classList.remove('progressBarAnimation');

            // call toast
            main.callToast('Unable to edit package');
          }

        }
      });

    }

  },


  formatLink(link){

    var newLink = link.substr(link.lastIndexOf('/') + 1);

    return newLink;
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
            location.href = '/#/packages';
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
