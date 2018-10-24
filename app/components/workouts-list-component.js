import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  action: '',

  selected: computed(function(){
    return [];
  }),

  didRender(){
    this._super(...arguments);

    this.markSelected();
  },

  actions: {

    // select/unselect
    select(id){
      var tagIn = false;

      var selected = this.get('selected');

      for(var i = 0; i < selected.length; i++){
        if(selected[i] === parseInt(id)){
          tagIn = true;
        }
      }

      if(tagIn === false){
        document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        this.get('selected').push(parseInt(id));
      }else {
        document.getElementById(id).style = "background-color: #fff; color: #333;";
        var index = this.get('selected').indexOf(parseInt(id));
        if (index > -1) {
          this.get('selected').splice(index, 1);
        }
      }

    },

  },


  markSelected(){

    var ids = this.get('selected');

    // check which tag names to select
    for (var i = 0; i < ids.length; i++) {
      var id = '' + ids[i];

      if (document.getElementById(id) !== null) {
        document.getElementById(id).style = "background-color: #F44336; color: #fff;";
      }
    }

  },

});
