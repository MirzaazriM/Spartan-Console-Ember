import Component from '@ember/component';

export default Component.extend({

  currentId: 0,

  actions: {

    openDialog(id){

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    }
  }
});
