define('spartan-console/components/round-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    openedExerciseDialog: false,

    currentRoundNumber: 0,

    actions: {

      openExercisesDialog() {
        document.getElementById('dialogOverlay').style = "display: block;";
        document.getElementById('exercisesDialog').style = "display: block;";

        this.set('openedExerciseDialog', true);

        // set round number
        this.set('currentRoundNumber', this.get('roundNumber'));
      }

    }
  });
});