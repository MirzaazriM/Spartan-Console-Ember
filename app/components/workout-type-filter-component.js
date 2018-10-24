import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // set filter values
  filterValues: computed(function(){
    return ['Reps', 'Timer'];
  }),

  actions: {
    changeFilter(index){
      var id = this.get('number');
      document.getElementById('workoutTypeFilterDefaultValue' + id).innerHTML = this.get('filterValues')[index];
      document.getElementById('workoutTypeFilterDropdown' + id).style = "display: none";
    },


    toggleDropdown(){

      var id = this.get('number');
      var display = window.getComputedStyle(document.querySelector('#workoutTypeFilterDropdown' + id)).display;

      if (display === 'none') {
        document.getElementById('workoutTypeFilterDropdown' + id).style = "display: block !important;";
      } else {
        document.getElementById('workoutTypeFilterDropdown' + id).style = "display: none;";
      }

    }
  }

});
