import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // set filter values
  filterValues: computed(function(){
    return ['Muscle', 'Regular', 'Equipment'];
  }),

  actions: {
    changeFilter(index){
      document.getElementById('typeFilterDefaultValue').innerHTML = this.get('filterValues')[index];
      document.getElementById('typeFilterDropdown').style = "display: none";
    },


    toggleDropdown(){

      var display = window.getComputedStyle(document.querySelector('#typeFilterDropdown')).display;

      if (display === 'none') {
        document.getElementById('typeFilterDropdown').style = "display: block";
      } else {
        document.getElementById('typeFilterDropdown').style = "display: none";
      }

    }
  }
});
