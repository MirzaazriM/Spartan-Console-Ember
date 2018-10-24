define('spartan-console/controllers/policies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    currentPolicy: 0,
    currentId: 0,

    modelObserver: Ember.observer('model', function () {
      if (this.get('model').data) {
        var id = this.get('model').data[0].id;
        this.set('currentId', id);
        this.set('currentPolicy', 0);
      }
    }),

    currentPolicyObserver: Ember.observer('currentPolicy', function () {

      if (this.get('currentPolicy') === 0) {
        return;
      }

      var id = this.get('currentPolicy');
      var policies = this.get('model').data;

      for (var i = 0; i < policies.length; i++) {

        var idPolicy = this.get('model').data[i].id;

        if (policies[i].id === id) {
          var body = this.get('model').data[i].body;
          this.set('currentId', id);

          // style selected policy item
          document.getElementById(idPolicy).style = "background-color: rgba(0,0,0, 0.1);";

          document.getElementById('policyBody').innerHTML = body;
        } else {
          document.getElementById(idPolicy).style = "background-color: transparent;";
        }
      }
    }),

    actions: {
      goToEditPolicyPage() {

        var id = this.get('currentId');

        sessionStorage.setItem('currentPolicy', id);

        location.href = '/#/edit-policy';
      },

      goToAddPolicyPage() {
        location.href = '/#/add-policy';
      },

      openConfirmationDialog() {
        document.getElementById('dialogOverlay').style = "display: block;";
        document.getElementById('confirmationDialog').style = "display: block;";
      },

      deletePolicy() {

        // check if this is a last policy
        if (this.get('model').data.length === 1) {
          return;
        }

        // show progress
        this.showProgress();

        // set this to main so that there is no conflict inside ajax request
        var main = this;

        // delete admin request and fetch new data
        this.get('ajax').request('/policy?id=' + this.get('currentId'), {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            main.getPolicies();

            main.callToast('Policy deleted');

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

    getPolicies() {

      // set this to main so that there is no conflict inside ajax request
      var main = this;

      // get new data and update model for refreshing the page
      return this.get('ajax').request('policy', {
        method: 'GET',
        success: function (data) {
          main.set('model', data);
        },
        error: function (data) {}
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