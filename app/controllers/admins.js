import Controller from '@ember/controller';
import { inject } from '@ember/service';
import  {
  observer,
  computed
} from '@ember/object';
import { inject as controller } from '@ember/controller';

export default Controller.extend({

  ajax: inject(),

  // inject application controller
  applicationController: controller('application'),

  // id
  currentAdminId: 0,
  currentAdminIdObserver: observer('currentAdminId', function(){
    var id = this.get('currentAdminId');
    var length = this.get('model').data.length;

    for(var i = 0; i < length; i++){
      var adminId = this.get('model').data[i].id;

      if(id === adminId){
        document.getElementById('adminFilterDefaultValue').innerHTML = this.get('model').data[i].scope;

        break;
      }
    }

  }),

  // heading for tag dialog
  dialogHeading: 'Add admin',

  // edit text to show when editing
  editText: '',

  editTextObserver: observer('editText', function(){
    document.getElementById('adminEmailInput').value = this.get('editText');
  }),

  actions: {

    openAddAdminDialog(){
      // clear input value
      document.getElementById('adminEmailInput').value = '';

      this.set('dialogHeading', 'Add admin');

      document.getElementById('adminDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    },


    openEditAdminDialog(){
      this.set('dialogHeading', 'Edit admin');

      document.getElementById('adminDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    },


    addAdmin(){
      var main = this;

      var scope = document.getElementById('adminFilterDefaultValue').innerHTML;

      // show progress
      this.showProgress();

      // set body data
      var adminData = {
        "name": "Unknown",
        "surname": "Unknown",
        "email": document.getElementById('adminEmailInput').value,
        "scope": scope.toLowerCase()
      };

      var data = this.get('ajax').request('/admins', {
        method: 'POST',
        dataType: 'text',
        contentType: 'application/json',
        data: adminData,
        success: function () {

          // get status code
          var status = data.xhr.status;

          if(status === 200){

            main.getAdmins();

            // hide progress
            main.hideProgress();

            main.callToast('Admin added');

          }else {
            // hide progress
            main.hideProgress();

            main.callToast('Error');
          }

        }
      });
    },


    editAdmin(){
      var main = this;

      // show progress
      this.showProgress();

      var scope = document.getElementById('adminFilterDefaultValue').innerHTML;

      // set body data
      var adminData = {
        "id": this.get('currentAdminId'),
        "name": "Unknown",
        "surname": "Unknown",
        "email": document.getElementById('adminEmailInput').value,
        "scope": scope.toLowerCase(),
        "state": "pending"
      };

      var data = this.get('ajax').request('/admins', {
        method: 'PUT',
        dataType: 'text',
        contentType: 'application/json',
        data: adminData,
        success: function () {

          // get status code
          var status = data.xhr.status;

          if(status === 200){
            main.getAdmins();

            main.callToast('Admin edited');

          }else if (status === 304){

            main.callToast('Not modified');
          }else {

            main.callToast('Error');
          }

          // hide progress
          main.hideProgress();

        }
      });
    },


    deleteAdmin(){
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // show progress
      this.showProgress();

      var id = this.get('currentAdminId');

      this.get('ajax').request('/admins?id=' + id, {
        method: 'DELETE',
        dataType: 'text',
        success: function () {
          // after deleting log get current data
          main.getAdmins();

          // hide progress
          main.hideProgress();

          main.callToast('Admin deleted');

        },
        error: function () {
          // hide progress
          main.hideProgress();

          main.callToast('Errorl');
        }
      });
    }
  },


  getAdmins(){
    // set this to main to avoid conflicts inside ajax function
    var main = this;

    // get new data
    this.get('ajax').request('/admins', {
      method: 'GET',
      success: function (data) {
        // set new data to model for refreshing the page
        main.set('model', data);
      },
      error: function () {

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
