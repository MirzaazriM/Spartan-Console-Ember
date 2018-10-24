define('spartan-console/controllers/languages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // ajax service for making requests
    ajax: Ember.inject.service(),

    // inject application controller to communicate over it with toast element
    applicationController: Ember.inject.controller('application'),
    // id
    currentLanguageId: 0,

    actions: {

      openAddLanguageDialog() {
        // clear input values
        document.getElementById('languageText').value = '';
        document.getElementById('isoText').value = '';

        document.getElementById('languageDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      addLanguage() {

        var main = this;

        // set body data
        var languageData = {
          "name": document.getElementById('languageText').value,
          "iso": document.getElementById('isoText').value
        };

        // show progress
        this.showProgress();

        var data = this.get('ajax').request('/language', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: languageData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.callToast('Language added');

              main.getLanguages();

              // hide progress
              main.hideProgress();
            } else {
              main.callToast('Error');

              // hide progress
              main.hideProgress();
            }
          }
        });
      },

      deleteLanguage() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // show progress
        this.showProgress();

        var id = this.get('currentLanguageId');

        this.get('ajax').request('/language?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.callToast('Language deleted');
            main.getLanguages();

            // hide progress
            main.hideProgress();
          },
          error: function () {
            main.callToast('Error');

            // hide progress
            main.hideProgress();
          }
        });
      }
    },

    getLanguages() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/language', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
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