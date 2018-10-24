import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // set filter values
  filterValues: computed(function(){
    return ['Admin', 'Developer', 'Worker'];
  }),


  actions: {

    changeFilter(index){
      document.getElementById('adminFilterDefaultValue').innerHTML = this.get('filterValues')[index];
      document.getElementById('adminFilterDropdown').style = "display: none";
    },


    toggleDropdown(){

      var display = window.getComputedStyle(document.querySelector('#adminFilterDropdown')).display;

      if (display === 'none') {
        document.getElementById('adminFilterDropdown').style = "display: block";
      } else {
        document.getElementById('adminFilterDropdown').style = "display: none";
      }

    }

  }
});
