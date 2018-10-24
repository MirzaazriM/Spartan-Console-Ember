define('spartan-console/controllers/add-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions

    name: "",
    identifier: "",

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
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: appData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('App added');

              location.href = "/#/apps";
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add app');
            }
          }
        });
      }

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