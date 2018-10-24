import Component from '@ember/component';

export default Component.extend({

  currentDate: '',

  actions: {

    openDialog(date){

      this.set('currentDate', date);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    }
  }
});
