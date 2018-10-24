import Component from '@ember/component';

export default Component.extend({

  currentId: 0,
  message: '',
  function: '',
  editText: '',

  actions: {

    openDeleteDialog(id){

      var state = this.get('item').state;

      if(state === 'R'){
        return;
      }

      this.set('message', 'This will delete selected tag.');
      this.set('function', 'deleteTag');

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
    },


    openEditTagDialog(id){

      // first set text to edit
      this.set('editText', this.get('item').name);
      this.set('currentId', id);

      // open dialog window
      this.callOpenEditTagDialog();
    },

    openPublishDialog(id){

      var state = this.get('item').state;

      if(state === 'R'){
        return;
      }

      this.set('message', 'This will publish selected tag.');
      this.set('function', 'publishTag');

      this.set('currentId', id);

      document.getElementById('confirmationDialog').style = "display: block;";
      document.getElementById('dialogOverlay').style = "display: block;";
   }
  }



});
