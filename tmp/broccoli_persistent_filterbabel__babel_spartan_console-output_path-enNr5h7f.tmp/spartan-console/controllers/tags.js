define('spartan-console/controllers/tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentTagId: 0,
    currentTagIdObserver: Ember.observer('currentTagId', function () {
      var id = this.get('currentTagId');
      var length = this.get('model').tags.data.length;

      for (var i = 0; i < length; i++) {
        var tagId = this.get('model').tags.data[i].id;

        if (id === tagId) {
          var type = this.get('model').tags.data[i].behaviour;
          var language = this.get('model').tags.data[i].language;

          if (type === 'M') {
            type = 'Muscle';
          } else if (type === 'R') {
            type = 'Regular';
          } else {
            type = 'Equipment';
          }

          document.getElementById('typeFilterDefaultValue').innerHTML = type;
          document.getElementById('languageFilterDefaultValue').innerHTML = language;
          document.getElementById('languageHiddenValue').innerHTML = language;

          break;
        }
      }

      // var tags = this.get('model').tags.data;
      // document.getElementById('languageFilterDefaultValue').innerHTML = this.get('model').tags.data[id];
      //
      // // set language
      // var length = this.get('model').tags.data.length;
      //
      // for(var i = 0; i < length; i++){
      //   var tag = this.get('model').tags.data[i];
      //
      //   if(tag.id === id){
      //     var language = this.get('model').tags.data[i].language;
      //     document.getElementById('languageFilterDefaultValue').innerHTML = language;
      //
      //     break;
      //   }
      // }
    }),

    // dialog message for confirmation dialog
    dialogMessage: '',

    // heading for tag dialog
    dialogHeading: 'Add tag',

    // action
    functionName: 'deleteTag',

    // edit text to show when editing
    editText: '',

    editTextObserver: Ember.observer('editText', function () {
      var id = this.get('currentTagId');
      var text = this.get('editText');

      document.getElementById('tagText').value = text;
      //document.getElementById('languageFilterDefaultValue').innerHTML = this.get('model.tags').data[id].language;
    }),

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model.tags').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model.tags').data);
        this.set('modelLength', this.get('model.tags').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model.tags').data);
        this.set('modelLength', this.get('model.tags').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {

      openEditTagDialog() {

        this.set('dialogHeading', 'Edit tag');

        document.getElementById('tagDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";

        document.getElementById('languageFilterDefaultValue').style = "pointer-events: none; opacity: 0.54;";
      },

      openAddTagDialog() {
        // clear input value
        document.getElementById('tagText').value = '';
        document.getElementById('languageFilterDefaultValue').innerHTML = 'English';
        document.getElementById('languageHiddenValue').innerHTML = 'En';

        this.set('dialogHeading', 'Add tag');
        this.set('editText', '');

        document.getElementById('tagDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";

        document.getElementById('languageFilterDefaultValue').style = "pointer-events: auto; opacity: 1;";
      },

      addTag() {
        var main = this;

        // show progress
        this.showProgress();

        var type = document.getElementById('typeFilterDefaultValue').innerHTML;

        // set body data
        var tagData = {
          "names": [{
            "name": document.getElementById('tagText').value,
            "lang": document.getElementById('languageHiddenValue').innerHTML
          }],
          "behavior": type.substr(0, 1)
        };

        var data = this.get('ajax').request('/tags', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag added');
            } else if (status === 304) {
              main.callToast('Not modified');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

      editTag() {

        var main = this;

        // show progress
        this.showProgress();

        var type = document.getElementById('typeFilterDefaultValue').innerHTML;

        // set body data
        var tagData = {
          "id": this.get('currentTagId'),
          "names": [{
            "name": document.getElementById('tagText').value,
            "lang": document.getElementById('languageHiddenValue').innerHTML
          }],
          "behavior": type.substr(0, 1)
        };

        var data = this.get('ajax').request('/tags', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag edited');
            } else if (status === 304) {
              main.getTags();

              main.callToast('Tag edited');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

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
          this.set('model.tags.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.tags.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteTag() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // show progress
        this.showProgress();

        var id = this.get('currentTagId');

        var data = this.get('ajax').request('/tags?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag deleted');
            } else if (status === 304) {
              main.callToast('Not modified');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

      publishTag() {

        var main = this;

        // show progress
        this.showProgress();

        // set body data
        var tagData = {
          "id": this.get('currentTagId')
        };

        var data = this.get('ajax').request('/tags', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag released');
            } else if (status === 304) {
              main.callToast('Not modified');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      }
    },

    getTags() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/tags/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model.tags', data);
        },
        error: function () {}
      });
    },

    callToast(text) {
      // use injected application controller to call its toast element
      this.get('applicationController').set('textForToast', text);
      this.get('applicationController').actions.openToast();
    },

    showProgress() {
      document.getElementById('progressBar').classList.add('progressBarAnimation');
    },

    hideProgress() {
      document.getElementById('progressBar').classList.remove('progressBarAnimation');
    }

  });
});