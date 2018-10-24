define('spartan-console/controllers/add-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    ajax: Ember.inject.service(),

    // inject application controller to communicate over it with toast element
    applicationController: Ember.inject.controller('application'),

    actions: {
      savePolicy() {

        var title = document.getElementsByClassName('pell-content')[0].innerHTML;
        var body = document.getElementsByClassName('pell-content')[1].innerHTML;

        // format data to send
        var dataToSend = {
          'title': title,
          'body': body
        };

        // show progress
        this.showProgress();

        // set this to main so that there is no conflict inside ajax request
        var main = this;

        // send post request for adding admin
        this.get('ajax').request('/policy', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: dataToSend,
          success: function () {
            main.callToast('Policy added');

            // hide progress
            main.hideProgress();

            location.href = '/#/policies';
          },
          error: function () {
            main.callToast('Error');

            // hide progress
            main.hideProgress();
          }
        });

        // sessionStorage.setItem('currentPolicy', sessionStorage.getItem('firstPolicy'));
      }

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