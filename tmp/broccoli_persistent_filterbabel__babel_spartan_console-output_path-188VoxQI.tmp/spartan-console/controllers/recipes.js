define('spartan-console/controllers/recipes', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentRecipeId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deleteRecipe',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {

      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].title;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteRecipe() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentRecipeId');

        this.get('ajax').request('/recepies?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getRecipes();
          },
          error: function () {}
        });
      },

      publishRecipe() {

        var main = this;

        // set body data
        var tagData = {
          "id": this.get('currentRecipeId')
        };

        var data = this.get('ajax').request('/recepies', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getRecipes();
            } else {}
          }
        });
      }
    },

    getRecipes() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/recepies/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});