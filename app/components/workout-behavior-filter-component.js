import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // set filter values
  filterValues: computed(function(){
    return ['Regular', 'Warmup', 'Stretching'];
  }),

  actions: {
    changeFilter(index){
      var id = this.get('number');
      document.getElementById('workoutBehaviorFilterDefaultValue' + id).innerHTML = this.get('filterValues')[index];
      document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: none";
    },


    toggleDropdown(){

      var id = this.get('number');
      var display = window.getComputedStyle(document.querySelector('#workoutBehaviorFilterDropdown' + id)).display;
      if (display === 'none') {
        document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: block !important;";
      } else {
        document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: none;";
      }

    }
  }

});
