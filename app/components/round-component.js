import Component from '@ember/component';


export default Component.extend({

  openedExerciseDialog: false,

  currentRoundNumber: 0,

  actions: {

    openExercisesDialog(){
      document.getElementById('dialogOverlay').style = "display: block;";
      document.getElementById('exercisesDialog').style = "display: block;";

      this.set('openedExerciseDialog', true);

      // set round number
      this.set('currentRoundNumber', this.get('roundNumber'));
    },

  }
});

