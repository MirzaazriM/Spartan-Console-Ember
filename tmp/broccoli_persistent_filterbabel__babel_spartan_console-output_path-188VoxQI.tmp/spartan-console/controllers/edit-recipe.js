define('spartan-console/controllers/edit-recipe', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // old image
    oldImage: '',

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      var recipe = this.get('model.recipe');

      // set values to edit
      this.set('name', recipe[0].title);
      this.set('biography', recipe[0].text);
      this.set('languageFilterDefaultValue', recipe[0].lang);

      // set old image
      var image = recipe[0].thumbnail;
      this.set('oldImage', image); // image.substr(image.lastIndexOf('/') + 1)

      // set default tags
      this.set('selectedTags', recipe[0].tags);
    }),

    // controller actions
    actions: {

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = this.get('oldImage');

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        } else {
          imageName = this.get('oldImage');
          imageName = imageName.substr(imageName.lastIndexOf('/') + 1);
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
          "id": sessionStorage.getItem('idToEdit'),
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
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: recipeData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Recipe edited');
              // if data is added, send images to the server if the image is new
              if (main.get('oldImage').indexOf(imageName) === -1) {
                main.sendImages(image);
              } else {
                // wait for 1 second so that image is uploaded to the server before request for the new data is made
                setTimeout(function () {
                  // redirect to recipes page
                  location.href = '/#/recipes';
                }, 1000);
              }
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit recipe');
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

            main.clearData();

            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {
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