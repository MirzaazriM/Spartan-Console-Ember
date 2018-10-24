define('spartan-console/controllers/edit-policy', ['exports'], function (exports) {
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

        // show progress
        this.showProgress();

        // format data to send
        var dataToSend = {
          'id': this.get('model').data.id,
          'title': title,
          'body': body
        };

        // set this to main so that there is no conflict inside ajax request
        var main = this;

        // send post request for adding admin
        this.get('ajax').request('/policy', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: dataToSend,
          success: function () {
            main.callToast('Policy edited');

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