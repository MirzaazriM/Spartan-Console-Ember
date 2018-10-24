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

      this.set('message', 'This will delete selected plan.');
      this.set('function', 'deletePlan');

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

      location.href = '/#/edit-nutrition-plan';
    },


    openPublishDialog(id){

      var state = this.get('item').state;

      if(state === 'R'){
        return;
      }

      this.set('message', 'This will publish selected plan.');
      this.set('function', 'publishPlan');

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    }
  }
});
