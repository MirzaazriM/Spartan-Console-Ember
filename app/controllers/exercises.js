import Controller from '@ember/controller';
import { inject } from '@ember/service';
import  {
  observer,
  computed
} from '@ember/object';

export default Controller.extend({

  // set controller properties and actions
  defaultModelData: computed(function(){
    return [];
  }),

  // id
  currentExerciseId: 0,

  // dialog message
  dialogMessage: '',

  // action
  functionName: 'deleteExercise',

  // this value will track old model data length
  modelLength: 0,
  searching: false,

  modelObserver: observer('model', function(){

    // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
    // --> defaultModelData when user is searching
    var oldLength = this.get('modelLength');
    var newLength = this.get('model').data.length;

    var searching = this.get('searching');

    // check if user edited added or deleted supplement
    if((oldLength === newLength || oldLength === (newLength - 1) || oldLength === (newLength +  1)) && searching === false){
      this.set('defaultModelData', this.get('model').data);
      this.set('modelLength', this.get('model').data.length);
    }

    // on first loading of the page set default model as model
    if(this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true){
      this.set('defaultModelData', this.get('model').data);
      this.set('modelLength', this.get('model').data.length);
    }

  }),

  // inject ajax service for making ajax requests
  ajax: inject(),


  // set actions
  actions: {
    search(){
      // set model data as default model data
      var modelData = this.get('defaultModelData');

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

        this.set('searching', true);

        // set new model data as filtered data
        this.set('model.data', filteredModelData);
      }

      else {

        this.set('searching', true);

        // set new model data as default model data
        this.set('model.data', this.get('defaultModelData'));
      }

      this.set('searching', false);

    },


    deleteExercise(){
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      var id = this.get('currentExerciseId');

      this.get('ajax').request('/exercises?id=' + id, {
        method: 'DELETE',
        dataType: 'text',
        success: function () {
          // after deleting log get current data
          main.getExercises();
        },
        error: function () {
        }
      });
    },


    publishExercise(){

      var main = this;

      // set body data
      var exerciseData = {
        "id": this.get('currentExerciseId')
      };

      var data = this.get('ajax').request('/exercises', {
        method: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        data: exerciseData,
        success: function () {

          // get status code
          var status = data.xhr.status;

          if(status === 200){

            main.getExercises();

          }else {

          }

        }
      });
    }
  },


  getExercises(){
    // set this to main to avoid conflicts inside ajax function
    var main = this;

    // get new data
    this.get('ajax').request('/exercises/list?from=0&limit=1000', {
      method: 'GET',
      success: function (data) {
        // set new data to model for refreshing the page
        main.set('model', data);
      },
      error: function () {

      }
    });
  }

});
