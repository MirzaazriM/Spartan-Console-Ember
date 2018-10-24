import Component from '@ember/component';

export default Component.extend({

  actions: {

    closeDialog(){
      document.getElementById('dialogOverlay').style="display: none;";
      document.getElementById('languageDialog').style="display: none;";
    },


    do(){

      var text = document.getElementById('languageText').value;
      var iso = document.getElementById('isoText').value;

      if(text.length === 0 || iso.length === 0){
        return;
      }

      this.callAddLanguage();

      document.getElementById('dialogOverlay').style="display: none;";
      document.getElementById('languageDialog').style="display: none;";
    }

  },


});
