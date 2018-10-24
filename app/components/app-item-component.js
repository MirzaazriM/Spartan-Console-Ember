import Component from '@ember/component';

export default Component.extend({

  currentId: 0,
  message: '',
  function: '',

  actions: {

    openDeleteDialog(id){

      var state = this.get('item').state;

      if(state === 'R'){
        return;
      }

      this.set('message', 'This will delete selected app.');
      this.set('function', 'deleteApp');

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    },


    goToEditPage(id){

      // set id to edit in session storage
      sessionStorage.setItem('idToEdit', id);

      // set session state
      sessionStorage.setItem('state', this.get('item').state);

      // set session lang
      sessionStorage.setItem('lang', this.get('item').language);

      // set session lang
      sessionStorage.setItem('app', this.get('item').identifier);

      location.href = '/#/edit-app';
    }
  }

});
