define('spartan-console/controllers/edit-workout', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    currentRoundNumber: 0,

    opened: false,

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'round'];
    }),

    selectedRegularTags: Ember.computed(function () {
      return [];
    }),

    selectedEquipmentTags: Ember.computed(function () {
      return [];
    }),

    selectedExercises: Ember.computed(function () {
      return [];
    }),

    duration: 0,
    restduration: 0,

    rounds: Ember.computed(function () {
      return [];
    }),

    // observe model
    modelObserver: Ember.observer('model', function () {
      var workout = this.get('model.workout.data');
      // this.set('selectedTags', workout.tags);

      this.set('name', workout.name);
      this.set('biography', workout.description);

      var allTags = workout.tags;

      // loop through tags and divide them by type (regular or equipment)
      for (var i = 0; i < allTags.length; i++) {
        if (allTags[i].workout_type === 'R') {
          this.get('selectedRegularTags').pushObject(allTags[i]);
        } else {
          this.get('selectedEquipmentTags').pushObject(allTags[i]);
        }
      }

      var rounds = workout.rounds;
      var roundsCounter = [];
      this.set('rounds', []);

      // loop through rounds and create round components
      for (var i = 0; i < rounds.length; i++) {
        this.get('rounds').pushObject(parseInt(rounds[i].round));
      }

      // now traverse through created round components and set their values
      // wait for DOM creation
      var main = this;
      setTimeout(function () {
        main.setRoundsData();
      }, 2500);
    }),

    roundNumber: 1,
    totalDuration: 0,

    // controller actions
    actions: {

      addExercisesToTheRound() {
        var id = this.get('currentRoundNumber');

        var container = document.getElementById('exercises' + id);
        container.innerHTML = '';
        var exercises = this.get('selectedExercises');

        for (var i = 0; i < exercises.length; i++) {
          var divElement = document.createElement('div');
          divElement.classList.add('roundExerciseDiv');
          divElement.id = exercises[i].id;

          var imgElement = document.createElement('img');
          imgElement.classList.add('exerciseThumbnail');
          imgElement.src = exercises[i].thumbnail;
          imgElement.id = exercises[i].id;

          var clearElement = document.createElement('img');
          clearElement.src = '/assets/icons/close.svg';
          clearElement.classList.add('exerciseClearIcon');
          clearElement.id = id + '-' + exercises[i].id;
          // clearElement.addEventListener("click", this.deleteExercise());

          var pElement = document.createElement('p');
          pElement.textContent = exercises[i].name;

          // add to the exercise container
          //divElement.innerHTML = '<img src="/assets/icons/close.svg" {{action "deleteExercise"}}/>'
          divElement.appendChild(imgElement);
          divElement.appendChild(clearElement);

          divElement.appendChild(pElement);
          container.appendChild(divElement);
        }

        // clear data
        this.set('selectedExercises', []);

        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('exercisesDialog').style = "display: none;";
      },

      addNewRound() {
        this.get('rounds').pushObject(this.get('roundNumber'));
        this.set('roundNumber', this.get('roundNumber') + 1);
      },

      getDataByLanguage() {

        // show progress
        this.showProgress();

        this.set('selectedTags', []);

        var main = this;

        // get lang
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        this.get('ajax').request('/tags?lang=' + lang + '&state=R', {
          method: 'GET',
          success: function (data) {
            // set new data to model for refreshing the page
            main.set('model.tags', data);

            // hide progress
            main.hideProgress();
          }, error: function () {
            // hide progress
            main.hideProgress();
          }
        });
      },

      saveData() {
        // traverse the DOM for rounds data
        var rounds = this.getRoundsData();

        if (rounds.length !== 0) {

          var regularTags = this.get('selectedRegularTags');
          var equipmentTags = this.get('selectedEquipmentTags');
          var name = this.get('name');
          var description = this.get('biography');

          var numTags = [];
          for (var i = 0; i < equipmentTags.length; i++) {
            if (!isNaN(equipmentTags[i])) {
              numTags.push(equipmentTags[i]);
            }
          }

          equipmentTags = numTags;

          // check if some of the data from the basic info and tags tabs is missing
          if (regularTags.length === 0 || equipmentTags.length === 0 || name === undefined || description === undefined) {
            this.callToast('Incomplete data');
            return;
          }

          var workoutData = {
            "id": sessionStorage.getItem('idToEdit'),
            "duration": this.get('totalDuration'),
            "names": [{
              "name": name,
              "description": description,
              "lang": document.getElementById('languageHiddenValue').innerHTML
            }],
            "regular_tags": regularTags,
            "equipment_tags": equipmentTags,
            "rounds": rounds
          };

          // if all data is there procede with the request and show progress bar
          document.getElementById('progressBar').classList.add('progressBarAnimation');

          // set this to main to avoid conflicts inside ajax function
          var main = this;

          // send request for adding product data to the database
          var data = this.get('ajax').request('/workouts', {
            method: 'PUT',
            dataType: 'text',
            contentType: 'application/json',
            data: workoutData,
            success: function () {

              var status = data.xhr.status;

              if (status === 200) {
                // remove animation class from progress bar element
                document.getElementById('progressBar').classList.remove('progressBarAnimation');

                main.callToast('Workout updated');

                location.href = "/#/workouts";
              } else {
                // remove animation class from progress bar element
                document.getElementById('progressBar').classList.remove('progressBarAnimation');

                // call toast
                main.callToast('Unable to edit workout');
              }
            }
          });
        } else {
          this.callToast('Incomplete data');
        }
      }

    },

    setRoundsData() {

      var roundsNumbers = this.get('rounds');
      var rounds = this.get('model.workout.data.rounds');

      var durations = document.getElementsByClassName('duration');
      var restdurations = document.getElementsByClassName('restduration');

      var totalDuration = this.get('totalDuration');

      // loop through rounds, fetch their data and create rounds objects
      for (var i = 0; i < rounds.length; i++) {

        // set id
        var id = roundsNumbers[i];

        var exerciseIds = rounds[i].exercises;

        if (exerciseIds !== null) {
          this.set('selectedExercises', exerciseIds);
          this.set('currentRoundNumber', id);
          this.addExercises();
        }

        // var roundExerciseData = [];
        //
        // // lopp through exercise ids and set complete exercise data into array
        // for(var j = 0; j < exerciseIds.length; j++){
        //
        //   var currentExerciseId = exerciseIds[j];
        //   // loop through exercises data
        //   var exerciseData = this.get('model.exercises.data');
        //   for(var k = 0; k < exerciseData.length; k++){
        //     if(currentExerciseId === exerciseData[k].id){
        //       roundExerciseData.push(exerciseData[k]);
        //     }
        //   }
        // }


        // loop through exercise images and get their ids
        // var exerciseIds = [];

        // for (var j = 0; j < exerciseImages.length; j++) {
        //   exerciseIds.push(parseInt(exerciseImages[j].id));
        // }

        // get round duration
        var duration = durations[i];
        var durationInput = duration.getElementsByClassName('md-input')[0];
        durationInput.value = parseInt(rounds[i].duration);
        totalDuration += parseInt(rounds[i].duration);

        // get round rest duration
        var restduration = restdurations[i];
        var restdurationInput = restduration.getElementsByClassName('md-input')[0];
        restdurationInput.value = parseInt(rounds[i].rest_duration);
        totalDuration += parseInt(rounds[i].rest_duration);

        // set round type
        var type = '';
        if (rounds[i].type === 'T') {
          type = 'Timer';
        } else {
          type = 'Reps';
        }
        document.getElementById('workoutTypeFilterDefaultValue' + id).textContent = type;

        // set round behavior
        var behavior = '';
        if (rounds[i].behavior === 'R') {
          behavior = 'Regular';
        } else if (rounds[i].behavior === 'W') {
          behavior = 'Warmup';
        } else {
          behavior = 'Stretching';
        }
        document.getElementById('workoutBehaviorFilterDefaultValue' + id).textContent = behavior;

        // // check round info values and if some is missing return empty data so that warning is showed
        // if(durationValue.length === 0 || restduration.length === 0){
        //   return [];
        // }


        // set total duration
        this.set('totalDuration', totalDuration);
      }
    },

    addExercises() {
      var id = this.get('currentRoundNumber');

      var container = document.getElementById('exercises' + id);

      container.innerHTML = '';
      var exercises = this.get('selectedExercises');

      for (var i = 0; i < exercises.length; i++) {
        var divElement = document.createElement('div');
        divElement.classList.add('roundExerciseDiv');
        divElement.id = exercises[i].id;

        var imgElement = document.createElement('img');
        imgElement.classList.add('exerciseThumbnail');
        imgElement.src = exercises[i].thumbnail;
        imgElement.id = exercises[i].id;

        var clearElement = document.createElement('img');
        clearElement.src = '/assets/icons/close.svg';
        clearElement.classList.add('exerciseClearIcon');
        clearElement.id = id + '-' + exercises[i].id;
        // clearElement.addEventListener("click", this.deleteExercise());

        var pElement = document.createElement('p');
        pElement.textContent = exercises[i].name;

        // add to the exercise container
        //divElement.innerHTML = '<img src="/assets/icons/close.svg" {{action "deleteExercise"}}/>'
        divElement.appendChild(imgElement);
        divElement.appendChild(clearElement);

        divElement.appendChild(pElement);
        container.appendChild(divElement);
      }

      // clear data
      this.set('selectedExercises', []);

      document.getElementById('dialogOverlay').style = "display: none;";
      document.getElementById('exercisesDialog').style = "display: none;";
    },

    getRoundsData() {

      var rounds = this.get('rounds');
      var durations = document.getElementsByClassName('duration');
      var restdurations = document.getElementsByClassName('restduration');

      var roundsArrayData = [];

      // loop through rounds, fetch their data and create rounds objects
      for (var i = 0; i < rounds.length; i++) {

        // set id
        var id = rounds[i];

        // get exercises container
        var exercises = document.getElementById('exercises' + id);

        // get all images for this round
        var exerciseImages = exercises.getElementsByClassName('exerciseThumbnail');
        // stop execution of the function if a round doesnt have any exercises
        if (exerciseImages.length === 0) {
          // return empty data
          return [];
        }

        // loop through exercise images and get their ids
        var exerciseIds = [];

        for (var j = 0; j < exerciseImages.length; j++) {
          exerciseIds.push(parseInt(exerciseImages[j].id));
        }

        // get round duration
        var duration = durations[i];
        var durationInput = duration.getElementsByClassName('md-input')[0];
        var durationValue = durationInput.value;

        // get round rest duration
        var restduration = restdurations[i];
        var restdurationInput = restduration.getElementsByClassName('md-input')[0];
        var restdurationValue = restdurationInput.value;

        // get round type
        var type = document.getElementById('workoutTypeFilterDefaultValue' + id).textContent;
        type = type.substr(0, 1);
        type = type.toUpperCase();

        // get round behavior
        var behavior = document.getElementById('workoutBehaviorFilterDefaultValue' + id).textContent;
        behavior = behavior.substr(0, 1);
        behavior = behavior.toUpperCase();

        // check round info values and if some is missing return empty data so that warning is showed
        if (durationValue.length === 0 || restduration.length === 0) {
          return [];
        }

        // set total duration
        var totalDuration = this.get('totalDuration');
        totalDuration += parseInt(durationValue);
        this.set('totalDuration', totalDuration);

        var roundObject = {
          "round": id,
          "exercise_id": exerciseIds,
          "duration": parseInt(durationValue),
          "rest_duration": parseInt(restdurationValue),
          "type": type,
          "behavior": behavior
        };

        roundsArrayData.push(roundObject);
      }

      return roundsArrayData;
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('biography', '');
      document.getElementById('languageHiddenValue').innerHTML = '';
    },

    callToast(text) {
      // use injected application controller to call its toast element
      this.get('applicationController').set('textForToast', text);
      this.get('applicationController').actions.openToast();
    },

    showProgress() {
      document.getElementById('progressBar').classList.add('progressBarAnimation');
    },

    hideProgress() {
      document.getElementById('progressBar').classList.remove('progressBarAnimation');
    }

  });
});