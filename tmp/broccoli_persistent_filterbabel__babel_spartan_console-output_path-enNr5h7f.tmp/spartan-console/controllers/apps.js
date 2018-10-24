define('spartan-console/controllers/apps', ['exports'], function (exports) {
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
    currentAppId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deleteApp',

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
            var name = modelData[i].name;
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

      deleteApp() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentAppId');

        this.get('ajax').request('/apps?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getApps();
          },
          error: function () {}
        });
      }
    },

    getApps() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/apps', {
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