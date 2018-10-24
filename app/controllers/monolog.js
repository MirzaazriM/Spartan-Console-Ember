import Controller from '@ember/controller';
import { observer } from '@ember/object';
import { inject } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default Controller.extend({

  ajax: inject(),

  // inject application controller
  applicationController: controller('application'),

  currentLogDate: '',
  currentFilter: 'Admin',

  // observe filter changes
  observeFilter: observer('currentFilter', function(){
    var filter = this.get('currentFilter').toUpperCase();
    this.getLogs();
  }),


  actions: {

    deleteLog(){

      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // show progress
      this.showProgress();

      // delete log
      var type = this.get('currentFilter').toUpperCase();
      var date = this.get('currentLogDate');

      this.get('ajax').request('/monolog/log?type=' + type +  '&date=' + date, {
        method: 'DELETE',
        dataType: 'text',
        success: function () {
          // after deleting log get current data
          main.getLogs();

          // hide progress
          main.hideProgress();

          main.callToast('Log deleted');

        },
        error: function () {
          // hide progress
          main.hideProgress();

          main.callToast('Error');

        }
      });

    }
  },

  getLogs(){
    // set this to main to avoid conflicts inside ajax function
    var main = this;

    // show progress
    this.showProgress();

    // get new data
    this.get('ajax').request('/monolog/logs?type=' + this.get('currentFilter').toUpperCase(), {
      method: 'GET',
      success: function (data) {
        // set new data to model for refreshing the page
        main.set('model', data);

        // hide progress
        main.hideProgress();

      },
      error: function () {

        // hide progress
        main.hideProgress();
      }
    });
  },


  callToast(text){
    // use injected application controller to call its toast element
    this.get('applicationController').set('textForToast',text);
    this.get('applicationController').actions.openToast();
  },


  showProgress(){
    document.getElementById('progressBar').classList.add('progressBarAnimation');
  },


  hideProgress(){
    document.getElementById('progressBar').classList.remove('progressBarAnimation');
  }

});