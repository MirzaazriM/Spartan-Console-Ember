import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // set filter values
  filterValues: computed(function(){
    return ['Admin', 'Mobile', 'Tags', 'Exercises', 'Recepies', 'Workouts', 'Workoutplans', 'Nutritionplans', 'Packages', 'Apps'];
  }),

  defaultFilter: 'Admin',

  actions: {
    changeFilter(index){
     this.set('defaultFilter', this.get('filterValues')[index]);

      document.getElementById('monologFilterDropdown').style = "display: none";
    },


    toggleDropdown(){

      var display = window.getComputedStyle(document.querySelector('#monologFilterDropdown')).display;

      if(display === 'none'){
        document.getElementById('monologFilterDropdown').style = "display: block";
      }else {
        document.getElementById('monologFilterDropdown').style = "display: none";
      }

    }
  }
});
