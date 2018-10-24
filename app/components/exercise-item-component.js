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

      this.set('message', 'This will delete selected exercise.');
      this.set('function', 'deleteExercise');

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    },


    goToEditPage(id){
      sessionStorage.setItem('idToEdit', id);

      // set session state
      sessionStorage.setItem('state', this.get('item').state);

      // set session lang
      sessionStorage.setItem('lang', this.get('item').language);

      location.href = '/#/edit-exercise';
    },


    openPublishDialog(id){

      var state = this.get('item').state;

      if(state === 'R'){
        return;
      }

      this.set('message', 'This will publish selected exercise.');
      this.set('function', 'publishExercise');

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    }
  }

});
