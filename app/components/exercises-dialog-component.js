import Component from '@ember/component';
import { computed, observer } from '@ember/object';

export default Component.extend({

  opened: false,

  openedObserver: observer('opened', function(){

  }),

  // data to use while searching
  defaultExercisesModelData: computed(function(){
    return [];
  }),

  firstRender: false,

  didRender(){

    if(this.get('firstRender') === false){
      this._super(...arguments);
      this.set('defaultExercisesModelData', this.get('exercises'));
      this.set('firstRender', true);
    }

    // mark already selected exercises
    this.markSelected();
  },

  selectedExercises: computed(function(){
    return [];
  }),

  actions: {

    search(){
      // set model data as default model data
      var modelData = this.get('defaultExercisesModelData');

      // get value entered in search field
      var value = document.getElementById('searcher').value.toLowerCase();

      if(value !== ''){
        // set value for filtered data
        var filteredModelData = [];

        // loop through values
        for(var i = 0; i < modelData.length; i++){

          // get name of current product
          var name = modelData[i].name;
          name = name.toLowerCase();

          // check if product name contains entered value
          if(name.indexOf(value) !== -1){
            // if yes set it to the filtered array
            filteredModelData.push(modelData[i])
          }
        }

        // set new model data as filtered data
        this.set('exercises', filteredModelData);
      }else {

        // set new model data as default model data
        this.set('exercises', this.get('defaultExercisesModelData'));
      }
    },


    exitDialog(){
      document.getElementById('dialogOverlay').style = "display: none;";
      document.getElementById('exercisesDialog').style = "display: none;";
    },


    selectExercise(name, id, thumbnail){
      var exerciseIn = false;

      var selectedExercises = this.get('selectedExercises');

      for(var i = 0; i < selectedExercises.length; i++){
        if(selectedExercises[i].name === name){
          exerciseIn = true;
          break;
        }
      }

      if(exerciseIn === false){
         document.getElementById(name).style = "display: block;";
        // this.get('selectedExercises').push(parseInt(id));

        var exercise = {
          "id": id,
          "name": name,
          "thumbnail": thumbnail
        };

        this.get('selectedExercises').push(exercise);
      }else {
        document.getElementById(name).style = "display: none;";

        var exercises = this.get('selectedExercises');

        for(var i = 0; i < exercises.length; i++){
          if(parseInt(id) === parseInt(exercises[i].id)){
            var index = i;
            if (index > -1) {
              this.get('selectedExercises').splice(index, 1);
            }

            break;
          }
        }


      }

    },


    addExercisesToTheRound(){
      this.callAddExercises();

      this.set('selectedExercises', []);

      // clear selected exercises
      var selected = document.getElementsByClassName('selectedExerciseOverlay');
      for(var i = 0; i < selected.length; i++){
        selected[i].style = "display: none;";
      }
    }

  },

  markSelected(){

    var ids = this.get('selectedExercises');

    // check which tag names to select
    for (var i = 0; i < ids.length; i++) {
      this.selectExerciseAfterRender(ids[i].name, ids[i].id, ids[i].thumbnail);
    }

  },


  selectExerciseAfterRender(name, id, thumbnail){
    var exerciseIn = false;

    var selectedExercises = this.get('selectedExercises');

    for(var i = 0; i < selectedExercises.length; i++){
      if(selectedExercises[i].name === name){
        exerciseIn = true;
        if(document.getElementById(name)){
          document.getElementById(name).style = "display: block;";
        }

        break;
      }
    }

  },

});
