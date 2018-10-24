define('spartan-console/controllers/add-recipe', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      getDataByLanguage() {

        // show progress
        this.showProgress();

        this.set('selectedTags', []);

        var main = this;

        // get lang
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        this.get('ajax').request('/tags?lang=' + lang + '&state=R', {
          method: 'GET',
          success: function (data) {
            // set new data to model for refreshing the page
            main.set('model.tags', data);

            // hide progress
            main.hideProgress();
          }, error: function () {
            // hide progress
            main.hideProgress();
          }
        });
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set tags
        var tags = this.get('selectedTags');

        var description = [this.get('biography')];

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || description.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var recipeData = {
          "names": [{
            "name": title,
            "lang": lang
          }],
          "tags": tags,
          "thumbnail": imageName,
          "recepies": description,
          "behavior": "M"
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/recepies', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: recipeData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Recipe added');
              // if data is added, send images to the server
              main.sendImages(image);
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add recipe');
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
              location.href = '/#/recipes';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
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