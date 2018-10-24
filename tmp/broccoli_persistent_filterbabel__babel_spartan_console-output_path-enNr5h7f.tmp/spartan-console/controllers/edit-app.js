define('spartan-console/controllers/edit-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    currentTab: 'basicTab',

    selected: Ember.computed(function () {
      return [];
    }),

    packageTags: Ember.computed(function () {
      return [];
    }),

    appPackages: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      //this.set('defaultWorkoutPlansModelData', this.get('model.worplans').data);
      //this.set('defaultNutritionPlansModelData', this.get('model.nutplans').data);

      this.set("name", this.get("model.packages.data.name"));
      this.set("identifier", this.get("model.packages.data.identifier"));

      var duplicateTags = this.get("model.tags.data");
      var nonduplicateTags = [];

      for (var i = 0; i < duplicateTags.length; i++) {

        var first = duplicateTags[i];
        var firstName = duplicateTags[i].name;
        var tagIn = false;

        for (var j = 0; j < nonduplicateTags.length; j++) {
          if (firstName === nonduplicateTags[j].name) {
            tagIn = true;
            break;
          }
        }

        if (tagIn === false) {
          nonduplicateTags.push(first);
        }
      }

      this.set("packageTags", nonduplicateTags);

      this.set("appPackages", this.get("model.packages.data.packages"));
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // // inject application controller
    applicationController: Ember.inject.controller('application'),

    // controller actions
    actions: {

      saveData() {

        // set title
        var name = this.get('name');

        // set rawname
        var identifier = this.get('identifier');

        // check if all necessary data is set
        if (name.length === 0 || identifier.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        var collectionData = [];
        var packagesSelected = document.getElementsByClassName("packageListItem");

        for (var i = 0; i < packagesSelected.length; i++) {

          if (packagesSelected[i].style.backgroundColor === "rgb(244, 67, 54)") {
            var collectionItem = {
              "sku": packagesSelected[i].getElementsByClassName("md-input")[0].value,
              "package": packagesSelected[i].id
            };

            collectionData.push(collectionItem);
          }
        }

        // format data to send
        var appData = {
          "id": sessionStorage.getItem("idToEdit"),
          "name": name,
          "identifier": identifier,
          "collection": collectionData
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/apps', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: appData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('App updated');

              location.href = "/#/apps";
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit app');
            }
          }
        });
      }

    },

    // send uploaded image to the server
    sendImages(image) {

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

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/packages';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
      this.set('biography', '');
      document.getElementById('languageHiddenValue').innerHTML = '';
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