"use strict";



;define('spartan-console/app', ['exports', 'spartan-console/resolver', 'ember-load-initializers', 'spartan-console/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('spartan-console/components/add-app-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'packagesTab'];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'pack'];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});
;define('spartan-console/components/add-edit-apps-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'packagesTab', 'nutplansTab', 'worplansTab', "exercisesTab", "tagsTab"];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'pack', 'nut', 'wor', "exer", "tag"];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');

            if (containers[i] === 'nut' || containers[i] === 'wor') {
              document.getElementById('plans').style = "display: block;";
            } else {
              document.getElementById('plans').style = "display: none;";
            }
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});
;define('spartan-console/components/add-edit-plans-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'tagsTab', 'imagesTab', 'dataTab'];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'tag', 'imag', 'data'];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});
;define('spartan-console/components/add-edit-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'tagsTab', 'imagesTab'];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'tag', 'imag'];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});
;define('spartan-console/components/add-edit-tab-package-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'tagsTab', 'imagesTab', 'nutplansTab', 'worplansTab'];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'tag', 'imag', 'nut', 'wor'];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');

            if (containers[i] === 'nut' || containers[i] === 'wor') {
              document.getElementById('plans').style = "display: block;";
            } else {
              document.getElementById('plans').style = "display: none;";
            }
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});
;define('spartan-console/components/add-edit-workouts-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'tagsTab', 'roundsTab'];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');

            if (name === 'roundsTab') {
              document.getElementById('addNewRound').style = "display: block;";
            } else {
              document.getElementById('addNewRound').style = "display: none;";
            }
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'tag', 'round'];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});
;define('spartan-console/components/admin-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    heading: 'Add admin',
    buttonText: 'Save',
    scopes: Ember.computed(function () {
      return [];
    }),

    headingObserver: Ember.observer('heading', function () {

      var heading = this.get('heading');

      if (heading === 'Add admin') {
        this.set('buttonText', 'Save');
      } else {
        this.set('buttonText', 'Edit');
      }
    }),

    actions: {

      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('adminDialog').style = "display: none;";
      },

      do() {

        var email = document.getElementById('adminEmailInput').value;

        if (email.indexOf('@') === -1) {
          return;
        }

        var button = this.get('buttonText');

        if (button === 'Save') {
          this.callAddAdmin();
        } else {
          this.callEditAdmin();
        }

        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('adminDialog').style = "display: none;";
      }
    }

  });
});
;define('spartan-console/components/admin-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Admin', 'Developer', 'Worker'];
    }),

    actions: {

      changeFilter(index) {
        document.getElementById('adminFilterDefaultValue').innerHTML = this.get('filterValues')[index];
        document.getElementById('adminFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#adminFilterDropdown')).display;

        if (display === 'none') {
          document.getElementById('adminFilterDropdown').style = "display: block";
        } else {
          document.getElementById('adminFilterDropdown').style = "display: none";
        }
      }

    }
  });
});
;define('spartan-console/components/admin-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    editText: '',

    actions: {

      openDialog(id) {

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      openEditAdminDialog(id) {

        // first set text to edit
        this.set('editText', this.get('item').email);
        this.set('currentId', id);

        // open dialog window
        this.callEditAdmin();
      }
    }
  });
});
;define('spartan-console/components/app-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    message: '',
    function: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected app.');
        this.set('function', 'deleteApp');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {

        // set id to edit in session storage
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        // set session lang
        sessionStorage.setItem('app', this.get('item').identifier);

        location.href = '/#/edit-app';
      }
    }

  });
});
;define('spartan-console/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define('spartan-console/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
;define('spartan-console/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define('spartan-console/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('spartan-console/components/confirmation-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    // set actions
    actions: {
      // close dialog when clicked 'No' button
      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('confirmationDialog').style = "display: none;";
      },
      // make appropriate action when clicked 'Yes' button
      do() {
        // trigger closure action so that appropriate controller function can make request
        this.call();
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('confirmationDialog').style = "display: none;";
      }
    }
  });
});
;define('spartan-console/components/edit-round-component', ['exports'], function (exports) {
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
;define('spartan-console/components/ember-ace-completion-tooltip', ['exports', 'ember-ace/components/ember-ace-completion-tooltip'], function (exports, _emberAceCompletionTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAceCompletionTooltip.default;
    }
  });
});
;define('spartan-console/components/ember-ace', ['exports', 'ember-ace/components/ember-ace'], function (exports, _emberAce) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberAce.default;
    }
  });
});
;define('spartan-console/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define('spartan-console/components/exercise-difficulty-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // action value
    action: '',

    // old hardness value
    oldHardness: '',

    didRender() {
      this._super(...arguments);

      if (this.get('action') === 'edit') {

        if (this.get('oldHardness') === 'E') {
          document.getElementById('difficultyFilterDefaultValue').innerHTML = 'Easy';
        } else if (this.get('oldHardness') === 'M') {
          document.getElementById('difficultyFilterDefaultValue').innerHTML = 'Medium';
        } else if (this.get('oldHardness') === 'H') {
          document.getElementById('difficultyFilterDefaultValue').innerHTML = 'Hard';
        }
      }
    },

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Easy', 'Medium', 'Hard'];
    }),

    actions: {
      changeFilter(index) {
        document.getElementById('difficultyFilterDefaultValue').innerHTML = this.get('filterValues')[index];
        document.getElementById('difficultyFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#difficultyFilterDropdown')).display;

        if (document.getElementById('languageFilterDropdown') !== null) {
          document.getElementById('languageFilterDropdown').style = "display: none;";
        }

        if (display === 'none') {
          document.getElementById('difficultyFilterDropdown').style = "display: block";
        } else {
          document.getElementById('difficultyFilterDropdown').style = "display: none";
        }
      }
    }
  });
});
;define('spartan-console/components/exercise-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    message: '',
    function: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected exercise.');
        this.set('function', 'deleteExercise');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        location.href = '/#/edit-exercise';
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected exercise.');
        this.set('function', 'publishExercise');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }

  });
});
;define('spartan-console/components/exercise-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    action: '',

    selected: Ember.computed(function () {
      return [];
    }),

    didRender() {
      this._super(...arguments);

      this.markSelected();
    },

    actions: {

      // select/unselect
      select(id) {
        var tagIn = false;

        var selected = this.get('selected');

        for (var i = 0; i < selected.length; i++) {
          if (selected[i] === parseInt(id)) {
            tagIn = true;
          }
        }

        if (tagIn === false) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
          this.get('selected').push(parseInt(id));
        } else {
          document.getElementById(id).style = "background-color: #fff; color: #333;";
          var index = this.get('selected').indexOf(parseInt(id));
          if (index > -1) {
            this.get('selected').splice(index, 1);
          }
        }
      }

    },

    markSelected() {

      var ids = this.get('selected');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        var id = '' + ids[i];

        if (document.getElementById(id) !== null) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        }
      }
    }

  });
});
;define('spartan-console/components/exercises-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    opened: false,

    openedObserver: Ember.observer('opened', function () {}),

    // data to use while searching
    defaultExercisesModelData: Ember.computed(function () {
      return [];
    }),

    firstRender: false,

    didRender() {

      if (this.get('firstRender') === false) {
        this._super(...arguments);
        this.set('defaultExercisesModelData', this.get('exercises'));
        this.set('firstRender', true);
      }

      // mark already selected exercises
      this.markSelected();
    },

    selectedExercises: Ember.computed(function () {
      return [];
    }),

    actions: {

      search() {
        // set model data as default model data
        var modelData = this.get('defaultExercisesModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          this.set('exercises', filteredModelData);
        } else {

          // set new model data as default model data
          this.set('exercises', this.get('defaultExercisesModelData'));
        }
      },

      exitDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('exercisesDialog').style = "display: none;";
      },

      selectExercise(name, id, thumbnail) {
        var exerciseIn = false;

        var selectedExercises = this.get('selectedExercises');

        for (var i = 0; i < selectedExercises.length; i++) {
          if (selectedExercises[i].name === name) {
            exerciseIn = true;
            break;
          }
        }

        if (exerciseIn === false) {
          document.getElementById(name).style = "display: block;";
          // this.get('selectedExercises').push(parseInt(id));

          var exercise = {
            "id": id,
            "name": name,
            "thumbnail": thumbnail
          };

          this.get('selectedExercises').push(exercise);
        } else {
          document.getElementById(name).style = "display: none;";

          var exercises = this.get('selectedExercises');

          for (var i = 0; i < exercises.length; i++) {
            if (parseInt(id) === parseInt(exercises[i].id)) {
              var index = i;
              if (index > -1) {
                this.get('selectedExercises').splice(index, 1);
              }

              break;
            }
          }
        }
      },

      addExercisesToTheRound() {
        this.callAddExercises();

        this.set('selectedExercises', []);

        // clear selected exercises
        var selected = document.getElementsByClassName('selectedExerciseOverlay');
        for (var i = 0; i < selected.length; i++) {
          selected[i].style = "display: none;";
        }
      }

    },

    markSelected() {

      var ids = this.get('selectedExercises');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        this.selectExerciseAfterRender(ids[i].name, ids[i].id, ids[i].thumbnail);
      }
    },

    selectExerciseAfterRender(name, id, thumbnail) {
      var exerciseIn = false;

      var selectedExercises = this.get('selectedExercises');

      for (var i = 0; i < selectedExercises.length; i++) {
        if (selectedExercises[i].name === name) {
          exerciseIn = true;
          if (document.getElementById(name)) {
            document.getElementById(name).style = "display: block;";
          }

          break;
        }
      }
    }

  });
});
;define('spartan-console/components/froala-content', ['exports', 'ember-froala-editor/components/froala-content'], function (exports, _froalaContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _froalaContent.default;
    }
  });
});
;define('spartan-console/components/froala-editor', ['exports', 'ember-froala-editor/components/froala-editor'], function (exports, _froalaEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _froalaEditor.default;
    }
  });
});
;define('spartan-console/components/header-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    clickedItem: 'statistic',

    actions: {
      // toggle profile dropdown
      toggleUserDropdown() {

        var display = window.getComputedStyle(document.querySelector('#userProfileDropdown')).display;

        if (display === 'none') {
          document.getElementById('userProfileDropdown').style = "display: block";
        } else {
          document.getElementById('userProfileDropdown').style = "display: none";
        }

        document.getElementById('notificationsDropdown').style = "display: none;";
      },

      // toggle profile dropdown
      toggleNotificationsDropdown() {

        var display = window.getComputedStyle(document.querySelector('#notificationsDropdown')).display;

        if (display === 'none') {
          document.getElementById('notificationsDropdown').style = "display: block";
        } else {
          document.getElementById('notificationsDropdown').style = "display: none";
        }

        document.getElementById('userProfileDropdown').style = "display: none;";
      },

      // toggle menu
      toggleMenu() {
        document.getElementById('menuContainer').style = "display: block";
        document.getElementById('menuOverlay').style = "display: block";
      }

    }

  });
});
;define('spartan-console/components/language-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    actions: {

      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('languageDialog').style = "display: none;";
      },

      do() {

        var text = document.getElementById('languageText').value;
        var iso = document.getElementById('isoText').value;

        if (text.length === 0 || iso.length === 0) {
          return;
        }

        this.callAddLanguage();

        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('languageDialog').style = "display: none;";
      }

    }

  });
});
;define('spartan-console/components/language-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return [];
    }),
    isoCode: 'en',

    defaultFilter: 'English',

    // check action and disable filter if needed
    didRender() {
      this._super(...arguments);
      if (this.get('action') === 'edit') {
        document.getElementById('languageFilterDefaultValue').style = "pointer-events: none; cursor: default; color: #aaa;";
        document.getElementById('languageFilterDefaultValue').innerHTML = sessionStorage.getItem('lang');
        document.getElementById('languageHiddenValue').innerHTML = sessionStorage.getItem('lang');
      }
    },

    actions: {

      changeFilter(index) {
        document.getElementById('languageFilterDefaultValue').innerHTML = this.get('filterValues')[index].name;
        //this.set('isoCode', this.get('filterValues')[index].iso);
        document.getElementById('languageHiddenValue').innerHTML = this.get('filterValues')[index].iso;
        document.getElementById('languageFilterDropdown').style = "display: none";

        // get data by language
        if (this.get('action') !== 'edit') {
          this.callLanguageData();
        }
      },

      toggleDropdown() {
        var display = window.getComputedStyle(document.querySelector('#languageFilterDropdown')).display;

        if (document.getElementById('difficultyFilterDropdown') !== null) {
          document.getElementById('difficultyFilterDropdown').style = "display: none;";
        }

        if (display === 'none') {
          document.getElementById('languageFilterDropdown').style = "display: block";
        } else {
          document.getElementById('languageFilterDropdown').style = "display: none";
        }
      }

    }
  });
});
;define('spartan-console/components/language-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,

    actions: {

      openDialog(id) {

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/loader-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('spartan-console/components/login-box-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    didInsertElement() {
      this._super(...arguments);
      var logged = sessionStorage.getItem('logged');

      if (logged === 'true') {
        document.getElementById('loginBox').style = "display:none";
        document.getElementById('loginBoxDialogOverlay').style = "display:none";
      } else {
        document.getElementById('loginBox').style = "display:block";
        document.getElementById('loginBoxDialogOverlay').style = "display:block";
      }
    },

    actions: {
      logIn() {

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username === 'Spartan' && password === 'spartanapps2018tech') {
          document.getElementById('loginBox').style = "display:none";
          document.getElementById('loginBoxDialogOverlay').style = "display:none";

          document.getElementById('username').value = '';
          document.getElementById('password').value = '';

          sessionStorage.setItem('logged', true);
        } else {

          // show toast
          document.getElementById('toast').style = "animation-name: toastAnimation; animation-duration: 3s;";
          // remove animation so that animation can be started again on the same way
          setTimeout(function () {
            document.getElementById('toast').style = "animation-name: no;";
          }, 3000);
        }
      }
    }
  });
});
;define('spartan-console/components/menu-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    clickedItem: 'statistic',

    // on first load set current menu items and store current menu items indicator to the session storage
    init() {
      this._super(...arguments);

      var side = sessionStorage.getItem('currentMenuPage');

      if (side === 'first' || side === null) {
        this.set('menuItems', this.get('menuItemsFirstPage'));
        // set to session storage
        sessionStorage.setItem('currentMenuPage', 'first');
      } else {
        this.set('menuItems', this.get('menuItemsSecondPage'));
        // set to session storage
        sessionStorage.setItem('currentMenuPage', 'second');
      }
    },

    // this property will hold current menu items
    menuItems: Ember.computed(function () {
      return [];
    }),

    // set menu items values as computed property so that build of the project dont report an error
    menuItemsFirstPage: Ember.computed(function () {
      return [{
        "icon": "/assets/icons/baseline-timeline-24px.svg",
        "title": "statistic",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-apps-24px.svg",
        "title": "apps",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-library_add-24px.svg",
        "title": "packages",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-date_range-24px.svg",
        "title": "workout-plans",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-restaurant-24px.svg",
        "title": "nutrition-plans",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-fitness_center-24px.svg",
        "title": "workouts",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-accessibility-24px.svg",
        "title": "exercises",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-restaurant_menu-24px.svg",
        "title": "recipes",
        "link": true
      }, {
        "icon": "/assets/icons/pound.svg",
        "title": "tags",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-account_circle-24px.svg",
        "title": "users",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-bell-24px.svg",
        "title": "notifications",
        "link": true
      }, {
        "icon": "/assets/icons/baseline-settings-24px.svg",
        "title": "settings",
        "link": false
      }];
    }),

    menuItemsSecondPage: Ember.computed(function () {
      return [{
        "icon": "/assets/icons/keyboard-backspace.svg",
        "title": "Back to menu",
        "link": false
      }, {
        "icon": "/assets/icons/account-supervisor-circle.svg",
        "title": "admins",
        "link": true
      }, {
        "icon": "/assets/icons/file-document-box-multiple.svg",
        "title": "policies",
        "link": true
      }, {
        "icon": "/assets/icons/bug.svg",
        "title": "monolog",
        "link": true
      }, {
        "icon": "/assets/icons/web.svg",
        "title": "languages",
        "link": true
      }];
    }),

    didRender() {
      this._super(...arguments);

      var page = sessionStorage.getItem('currentPage');

      if (document.getElementById(page) !== null) {
        document.getElementById(page).classList.add('activeItem');
      }
    },

    // component actions
    actions: {

      // set which side of menu to show
      toggleMenuSide() {

        var currentSide = sessionStorage.getItem('currentMenuPage');

        if (currentSide === 'first') {
          this.set('menuItems', this.get('menuItemsSecondPage'));
          sessionStorage.setItem('currentMenuPage', 'second');
        } else {
          this.set('menuItems', this.get('menuItemsFirstPage'));
          sessionStorage.setItem('currentMenuPage', 'first');
        }
      },

      setCurrentPage(page) {
        sessionStorage.setItem('currentPage', page);

        // hide menu and menu overlay
        if (document.body.clientWidth < 701) {
          document.getElementById('menuContainer').style = "display: none;";
          document.getElementById('menuOverlay').style = "display: none;";
        }

        // style selected menu item
        this.styleSelectedMenuItem(page);
      }

    },

    // outside actions
    styleSelectedMenuItem(page) {

      // set current menu items
      var items = this.get('menuItems');

      // loop through all menu items style one which is equal to the page and remove style from all the others
      for (var i = 0; i < items.length; i++) {
        if (items[i].title === page) {
          document.getElementById(items[i].title).classList.add('activeItem');
          document.getElementById(items[i].title).classList.remove('inactiveItem');

          this.set('clickedItem', page);
        } else {
          document.getElementById(items[i].title).classList.remove('activeItem');
          document.getElementById(items[i].title).classList.add('inactiveItem');
        }
      }
    }

  });
});
;define('spartan-console/components/monolog-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Admin', 'Mobile', 'Tags', 'Exercises', 'Recepies', 'Workouts', 'Workoutplans', 'Nutritionplans', 'Packages', 'Apps'];
    }),

    defaultFilter: 'Admin',

    actions: {
      changeFilter(index) {
        this.set('defaultFilter', this.get('filterValues')[index]);

        document.getElementById('monologFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#monologFilterDropdown')).display;

        if (display === 'none') {
          document.getElementById('monologFilterDropdown').style = "display: block";
        } else {
          document.getElementById('monologFilterDropdown').style = "display: none";
        }
      }
    }
  });
});
;define('spartan-console/components/monolog-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentDate: '',

    actions: {

      openDialog(date) {

        this.set('currentDate', date);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/notifications-dropdown-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    notifications: Ember.computed(function () {
      return [1, 2, 3];
    }),

    actions: {

      stopPropagation() {
        document.getElementById('notificationsDropdown').style = "display: none";
      }
    }
  });
});
;define('spartan-console/components/nutritionplan-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    message: '',
    function: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected plan.');
        this.set('function', 'deletePlan');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {
        // set id to edit in session storage
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        location.href = '/#/edit-nutrition-plan';
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected plan.');
        this.set('function', 'publishPlan');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/package-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    message: '',
    function: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected package.');
        this.set('function', 'deletePackage');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {
        // set id to edit in session storage
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        location.href = '/#/edit-package';
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected package.');
        this.set('function', 'publishPackage');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/packages-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    action: '',

    selectedPackages: Ember.computed(function () {
      return [];
    }),

    appPackages: Ember.computed(function () {
      return [];
    }),

    didRender() {
      this._super(...arguments);

      this.markSelected();
    },

    actions: {

      disableSelectingPackage() {},

      // select/unselect
      select(id) {
        var tagIn = false;

        var selected = this.get('selectedPackages');

        for (var i = 0; i < selected.length; i++) {
          if (selected[i] === parseInt(id)) {
            tagIn = true;
          }
        }

        if (tagIn === false) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
          this.get('selectedPackages').push(parseInt(id));
        } else {
          document.getElementById(id).style = "background-color: #fff; color: #333;";
          var index = this.get('selectedPackages').indexOf(parseInt(id));
          if (index > -1) {
            this.get('selectedPackages').splice(index, 1);
          }
        }
      }

    },

    markSelected() {

      var selected = [];
      var ids = this.get('appPackages');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        var id = '' + ids[i].package_child;
        selected.push(parseInt(ids[i].package_child));

        if (document.getElementById(id) !== null) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        }
      }

      this.set("selectedPackages", selected);
    }

  });
});
;define('spartan-console/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _paperAutocompleteContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteContent.default;
});
;define('spartan-console/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _paperAutocompleteDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteDropdown.default;
});
;define('spartan-console/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _paperAutocompleteHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteHighlight.default;
    }
  });
});
;define('spartan-console/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _paperAutocompleteOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteOptions.default;
    }
  });
});
;define('spartan-console/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _paperAutocompleteTriggerContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTriggerContainer.default;
});
;define('spartan-console/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _paperAutocompleteTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTrigger.default;
});
;define('spartan-console/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _paperAutocomplete) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocomplete.default;
    }
  });
});
;define('spartan-console/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _paperBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperBackdrop.default;
});
;define('spartan-console/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _paperButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperButton.default;
});
;define('spartan-console/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _paperCardActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardActions.default;
});
;define('spartan-console/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _paperCardAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardAvatar.default;
});
;define('spartan-console/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _paperCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardContent.default;
});
;define('spartan-console/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _paperCardHeaderHeadline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderHeadline.default;
});
;define('spartan-console/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _paperCardHeaderSubhead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderSubhead.default;
});
;define('spartan-console/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderText.default;
});
;define('spartan-console/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _paperCardHeaderTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderTitle.default;
});
;define('spartan-console/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _paperCardHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeader.default;
});
;define('spartan-console/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _paperCardIconActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardIconActions.default;
});
;define('spartan-console/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _paperCardImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardImage.default;
});
;define('spartan-console/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardMedia.default;
});
;define('spartan-console/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleMedia.default;
});
;define('spartan-console/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleText.default;
});
;define('spartan-console/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _paperCardTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitle.default;
});
;define('spartan-console/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCard.default;
});
;define('spartan-console/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _paperCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCheckbox.default;
});
;define('spartan-console/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _paperChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperChips.default;
});
;define('spartan-console/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _paperContactChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContactChips.default;
});
;define('spartan-console/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _paperContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContent.default;
});
;define('spartan-console/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _paperDialogActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
;define('spartan-console/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _paperDialogContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
;define('spartan-console/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _paperDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
;define('spartan-console/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _paperDialogInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
;define('spartan-console/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _paperDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
;define('spartan-console/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _paperDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperDivider.default;
});
;define('spartan-console/components/paper-fab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('spartan-console/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _paperForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperForm.default;
});
;define('spartan-console/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _paperGridList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
;define('spartan-console/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _paperGridTileFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
;define('spartan-console/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _paperGridTile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
;define('spartan-console/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _paperIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperIcon.default;
});
;define('spartan-console/components/paper-ink-bar', ['exports', 'ember-paper/components/paper-ink-bar'], function (exports, _paperInkBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
;define('spartan-console/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _paperInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperInput.default;
});
;define('spartan-console/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _paperItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperItem.default;
});
;define('spartan-console/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _paperList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperList.default;
});
;define('spartan-console/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _paperMenuContentInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContentInner.default;
    }
  });
});
;define('spartan-console/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _paperMenuContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContent.default;
    }
  });
});
;define('spartan-console/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _paperMenuItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuItem.default;
    }
  });
});
;define('spartan-console/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _paperMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenu.default;
    }
  });
});
;define('spartan-console/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _paperOptgroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperOptgroup.default;
    }
  });
});
;define('spartan-console/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _paperOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperOption.default;
});
;define('spartan-console/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _paperProgressCircular) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
;define('spartan-console/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _paperProgressLinear) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
;define('spartan-console/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _paperRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
;define('spartan-console/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _paperRadioProxiable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
;define('spartan-console/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _paperRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
;define('spartan-console/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _paperResetButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
;define('spartan-console/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _paperSelectContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectContent.default;
    }
  });
});
;define('spartan-console/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _paperSelectHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectHeader.default;
    }
  });
});
;define('spartan-console/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _paperSelectMenuInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenuInner.default;
    }
  });
});
;define('spartan-console/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _paperSelectMenuTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelectMenuTrigger.default;
});
;define('spartan-console/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _paperSelectMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenu.default;
    }
  });
});
;define('spartan-console/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _paperSelectOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectOptions.default;
    }
  });
});
;define('spartan-console/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _paperSelectSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectSearch.default;
    }
  });
});
;define('spartan-console/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _paperSelectTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectTrigger.default;
    }
  });
});
;define('spartan-console/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _paperSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelect.default;
});
;define('spartan-console/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _paperSidenavContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
;define('spartan-console/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _paperSidenavInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavInner.default;
});
;define('spartan-console/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _paperSidenavToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavToggle.default;
});
;define('spartan-console/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenav.default;
});
;define('spartan-console/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _paperSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSlider.default;
});
;define('spartan-console/components/paper-snackbar-text', ['exports', 'ember-paper/components/paper-snackbar-text'], function (exports, _paperSnackbarText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSnackbarText.default;
    }
  });
});
;define('spartan-console/components/paper-speed-dial-actions-action', ['exports', 'ember-paper/components/paper-speed-dial-actions-action'], function (exports, _paperSpeedDialActionsAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActionsAction.default;
    }
  });
});
;define('spartan-console/components/paper-speed-dial-actions', ['exports', 'ember-paper/components/paper-speed-dial-actions'], function (exports, _paperSpeedDialActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActions.default;
    }
  });
});
;define('spartan-console/components/paper-speed-dial-trigger', ['exports', 'ember-paper/components/paper-speed-dial-trigger'], function (exports, _paperSpeedDialTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialTrigger.default;
    }
  });
});
;define('spartan-console/components/paper-speed-dial', ['exports', 'ember-paper/components/paper-speed-dial'], function (exports, _paperSpeedDial) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDial.default;
    }
  });
});
;define('spartan-console/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _paperSubheader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSubheader.default;
});
;define('spartan-console/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _paperSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSwitch.default;
});
;define('spartan-console/components/paper-tab', ['exports', 'ember-paper/components/paper-tab'], function (exports, _paperTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
;define('spartan-console/components/paper-tabs', ['exports', 'ember-paper/components/paper-tabs'], function (exports, _paperTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
;define('spartan-console/components/paper-toast-inner', ['exports', 'ember-paper/components/paper-toast-inner'], function (exports, _paperToastInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
;define('spartan-console/components/paper-toast-text', ['exports', 'ember-paper/components/paper-toast-text'], function (exports, _paperToastText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
;define('spartan-console/components/paper-toast', ['exports', 'ember-paper/components/paper-toast'], function (exports, _paperToast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
;define('spartan-console/components/paper-toaster', ['exports', 'ember-paper/components/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define('spartan-console/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _paperToolbarTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbarTools.default;
});
;define('spartan-console/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _paperToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbar.default;
});
;define('spartan-console/components/paper-tooltip-inner', ['exports', 'ember-paper/components/paper-tooltip-inner'], function (exports, _paperTooltipInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
;define('spartan-console/components/paper-tooltip', ['exports', 'ember-paper/components/paper-tooltip'], function (exports, _paperTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
;define('spartan-console/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _paperVirtualRepeatScroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeatScroller.default;
});
;define('spartan-console/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _paperVirtualRepeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeat.default;
});
;define('spartan-console/components/pell-editor', ['exports', 'ember-pell/components/pell-editor'], function (exports, _pellEditor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pellEditor.default;
    }
  });
});
;define('spartan-console/components/plans-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    action: '',

    selected: Ember.computed(function () {
      return [];
    }),

    didRender() {
      this._super(...arguments);

      this.markSelected();
    },

    actions: {

      // select/unselect
      select(id) {
        var tagIn = false;

        var selected = this.get('selected');

        for (var i = 0; i < selected.length; i++) {
          if (selected[i] === parseInt(id)) {
            tagIn = true;
          }
        }

        if (tagIn === false) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
          this.get('selected').push(parseInt(id));
        } else {
          document.getElementById(id).style = "background-color: #fff; color: #333;";
          var index = this.get('selected').indexOf(parseInt(id));
          if (index > -1) {
            this.get('selected').splice(index, 1);
          }
        }
      }

    },

    markSelected() {

      var ids = this.get('selected');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        var id = '' + ids[i];

        if (document.getElementById(id) !== null) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        }
      }
    }

  });
});
;define('spartan-console/components/policy-body-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    didRender() {
      document.getElementById('policyBody').innerHTML = this.get('item');
    }
  });
});
;define('spartan-console/components/policy-list-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentPolicy: 0,

    didRender() {
      this._super(...arguments);
      var title = this.get('item').title;
      var id = this.get('item').id;

      var regex = /(<([^>]+)>)/ig;
      var body = title;
      var result = body.replace(regex, "");

      document.getElementById(id).innerHTML = result;
    },

    actions: {
      changePolicy(id) {
        this.set('currentPolicy', id);
      }
    }
  });
});
;define('spartan-console/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define('spartan-console/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('spartan-console/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define('spartan-console/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define('spartan-console/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define('spartan-console/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define('spartan-console/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define('spartan-console/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define('spartan-console/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('spartan-console/components/progress-bar-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('spartan-console/components/published-button-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('spartan-console/components/recipe-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    message: '',
    function: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected recipe.');
        this.set('function', 'deleteRecipe');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {

        // set id to edit in session storage
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        location.href = '/#/edit-recipe';
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected recipe.');
        this.set('function', 'publishRecipe');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/recipes-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    action: '',

    selected: Ember.computed(function () {
      return [];
    }),

    didRender() {
      this._super(...arguments);

      this.markSelected();
    },

    actions: {

      // select/unselect
      select(id) {
        var tagIn = false;

        var selected = this.get('selected');

        for (var i = 0; i < selected.length; i++) {
          if (selected[i] === parseInt(id)) {
            tagIn = true;
          }
        }

        if (tagIn === false) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
          this.get('selected').push(parseInt(id));
        } else {
          document.getElementById(id).style = "background-color: #fff; color: #333;";
          var index = this.get('selected').indexOf(parseInt(id));
          if (index > -1) {
            this.get('selected').splice(index, 1);
          }
        }
      }

    },

    markSelected() {

      var ids = this.get('selected');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        var id = '' + ids[i];

        if (document.getElementById(id) !== null) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        }
      }
    }

  });
});
;define('spartan-console/components/round-component', ['exports'], function (exports) {
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
;define('spartan-console/components/search-input-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    id: 'searcher',
    currentState: "All",

    actions: {
      search() {
        this.callSearch();
      },

      toggleStatefilter() {

        var display = window.getComputedStyle(document.querySelector('#statefilterDropdown')).display;

        if (display === "none") {
          document.getElementById("statefilterDropdown").style = "display: block";
        } else {
          document.getElementById("statefilterDropdown").style = "display: none";
        }
      },

      filter() {
        document.getElementById("searcher").value = "";
        this.callFilterStates();
      }
    }

  });
});
;define('spartan-console/components/state-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set component properties and actions
    currentState: "All",

    states: Ember.computed(function () {
      return ["All", "Released", "Not released"];
    }),

    actions: {

      stopPropagation() {
        document.getElementById('statefilterDropdown').style = "display: none";
      },

      chooseState(state) {
        console.log("new state: " + state);
        this.set("currentState", state);
        document.getElementById("statefilterDropdown").style = "display: none";

        this.callFiltering();
      }
    }
  });
});
;define('spartan-console/components/tag-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    heading: 'Add tag',
    buttonText: 'Save',
    languages: Ember.computed(function () {
      return [];
    }),

    headingObserver: Ember.observer('heading', function () {

      var heading = this.get('heading');

      if (heading === 'Add tag') {
        this.set('buttonText', 'Save');
      } else {
        this.set('buttonText', 'Edit');
      }
    }),

    didRender() {
      this._super(...arguments);
      //document.getElementById('tagsLanguageDropdown').style = "opacity: 0.24";
    },

    actions: {

      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('tagDialog').style = "display: none;";
      },

      do() {

        var text = document.getElementById('tagText').value;
        if (text.length === 0) {
          return;
        }

        var button = this.get('buttonText');

        if (button === 'Save') {
          this.callAddTag();
        } else {
          this.callEditTag();
        }

        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('tagDialog').style = "display: none;";
      }
    }

  });
});
;define('spartan-console/components/tag-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    message: '',
    function: '',
    editText: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected tag.');
        this.set('function', 'deleteTag');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      openEditTagDialog(id) {

        // first set text to edit
        this.set('editText', this.get('item').name);
        this.set('currentId', id);

        // open dialog window
        this.callOpenEditTagDialog();
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected tag.');
        this.set('function', 'publishTag');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }

  });
});
;define('spartan-console/components/tags-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedEquipmentTags: Ember.computed(function () {
      return [];
    }),

    firstRender: false,

    // after render check if selectedTags array is empty or not
    didRender() {
      this._super(...arguments);

      var tags = this.get('selectedTags');
      var tagsE = this.get('selectedEquipmentTags');
      if (tagsE.length !== 0) {
        // new
        //this.set('selectedEquipmentTags', []);

        if (this.get('editing') === true) {
          //this.set('selectedEquipmentTags', []);
          // loop through tags and remove nonobjects
          // var numTags = [];
          // for(var i = 0; i < tagsE.length; i++){
          //   if(isNaN(tagsE[i])){
          //     numTags.push(tagsE[i]);
          //   }
          // }
          // this.set('selectedEquipmentTags', numTags);
        }

        for (var j = 0; j < tagsE.length; j++) {
          this.selectEquipmentTagFunction(tagsE[j].name, tagsE[j].id);
        }
      }

      // TODO check state
      if (tags === undefined || tags === null) {
        this.set('selectedTags', []);
        return;
      }

      // check if array tagsToSelect is empty or not, if not user is editing and select appropriate tags

      if (this.get('firstRender') === false && tags.length !== 0) {

        // clear selectedTags
        this.set('selectedTags', []);

        for (var i = 0; i < tags.length; i++) {
          // TODO the same function as selectTag but there is some problem when i call it from this function, I used also this.actions ... but then i get another problem
          this.selectTagFunction(tags[i].name, tags[i].id);
        }
      }

      this.set('firstRender', true);
    },

    actions: {
      // select/unselect tag
      selectTag(name, id) {

        // check which tags user is selecting
        if (this.get('action') !== true) {
          var tagIn = false;

          var selectedTags = this.get('selectedTags');

          for (var i = 0; i < selectedTags.length; i++) {
            if (selectedTags[i] === parseInt(id)) {
              tagIn = true;
            }
          }

          if (tagIn === false) {

            // check number of already selected tags
            if (this.get("selectedTags").length > 3) {
              return;
            }

            document.getElementById(name).style = "background-color: #333; color: #fff;";
            this.get('selectedTags').push(parseInt(id));
          } else {
            document.getElementById(name).style = "background-color: #fff; color: #333;";
            var index = this.get('selectedTags').indexOf(parseInt(id));
            if (index > -1) {
              this.get('selectedTags').splice(index, 1);
            }
          }
        } else {
          var tagIn = false;

          var selectedTags = this.get('selectedEquipmentTags');

          for (var i = 0; i < selectedTags.length; i++) {
            if (selectedTags[i] === parseInt(id)) {
              tagIn = true;
            }
          }

          if (tagIn === false) {

            // check number of already selected tags
            if (this.get("selectedEquipmentTags").length > 3) {
              return;
            }

            document.getElementById(name + 'E').style = "background-color: #333; color: #fff;";
            this.get('selectedEquipmentTags').push(parseInt(id));
          } else {
            document.getElementById(name + 'E').style = "background-color: #fff; color: #333;";
            var index = this.get('selectedEquipmentTags').indexOf(parseInt(id));
            if (index > -1) {
              this.get('selectedEquipmentTags').splice(index, 1);
            }
          }
        }
      }
    },

    // function for selecting tag when data editing
    selectTagFunction(name, id) {
      var tagIn = false;

      var selectedTags = this.get('selectedTags');

      for (var i = 0; i < selectedTags.length; i++) {
        if (selectedTags[i] === parseInt(id)) {
          tagIn = true;
        }
      }

      if (tagIn === false) {

        if (document.getElementById(name) !== null) {
          document.getElementById(name).style = "background-color: #333; color: #fff;";
          this.get('selectedTags').push(parseInt(id));
        }
      } else {
        document.getElementById(name).style = "background-color: #fff; color: #333;";
        var index = this.get('selectedTags').indexOf(parseInt(id));
        if (index > -1) {
          this.get('selectedTags').splice(index, 1);
        }
      }
    },

    selectEquipmentTagFunction(name, id) {
      var tagIn = false;

      var selectedTags = this.get('selectedEquipmentTags');

      for (var i = 0; i < selectedTags.length; i++) {
        if (selectedTags[i] === parseInt(id)) {
          tagIn = true;
        }
      }

      if (tagIn === false) {

        if (document.getElementById(name) !== null) {
          document.getElementById(name + 'E').style = "background-color: #333; color: #fff;";
          this.get('selectedEquipmentTags').push(parseInt(id));
        }
      } else {
        document.getElementById(name + 'E').style = "background-color: #fff; color: #333;";
        var index = this.get('selectedEquipmentTags').indexOf(parseInt(id));
        if (index > -1) {
          this.get('selectedEquipmentTags').splice(index, 1);
        }
      }
    }

  });
});
;define('spartan-console/components/toast-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('spartan-console/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _transitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
;define('spartan-console/components/type-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Muscle', 'Regular', 'Equipment'];
    }),

    actions: {
      changeFilter(index) {
        document.getElementById('typeFilterDefaultValue').innerHTML = this.get('filterValues')[index];
        document.getElementById('typeFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#typeFilterDropdown')).display;

        if (display === 'none') {
          document.getElementById('typeFilterDropdown').style = "display: block";
        } else {
          document.getElementById('typeFilterDropdown').style = "display: none";
        }
      }
    }
  });
});
;define('spartan-console/components/upload-image-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    image: '/assets/pictures/image-placeholder.png',

    actions: {
      // this function opens browse window for uploading images
      openUploadImageWindow() {
        // click on inputFileElement in application template (browse window can only be called from application template)
        document.getElementById('inputFileElement').click();
      }

    }

  });
});
;define('spartan-console/components/upload-media-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // media property
    media: Ember.computed(function () {
      return [];
    }),

    // action property
    action: '',

    didRender() {
      this._super(...arguments);

      if (this.get('action') === 'edit') {
        var mediaFiles = document.getElementById('uploadedMediaFiles');
        mediaFiles.innerHTML = '';

        // set uploaded files to the DOM
        for (var i = 0; i < this.get('media').length; i++) {
          var element = document.createElement('p');
          var name = this.get('media')[i].source;
          name = name.substr(name.lastIndexOf('/') + 1);
          element.innerHTML = name;

          mediaFiles.appendChild(element);
        }
      }
    },

    actions: {

      // this function opens browse window for uploading images
      openUploadMuscleImageWindow() {
        // click on inputFileElement in application template (browse window can only be called from application template)
        document.getElementById('inputMediaFileElement').click();
      }

    }

  });
});
;define('spartan-console/components/upload-muscle-image-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    image: '/assets/pictures/image-placeholder.png',

    actions: {

      // this function opens browse window for uploading images
      openUploadMuscleImageWindow() {
        // click on inputFileElement in application template (browse window can only be called from application template)
        document.getElementById('inputMuscleFileElement').click();
      }

    }
  });
});
;define('spartan-console/components/user-dropdown-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    actions: {
      logout() {
        document.getElementById('userProfileDropdown').style = "display: none;";

        document.getElementById('loginBoxDialogOverlay').style = "display: block;";
        document.getElementById('loginBox').style = "display: block;";

        sessionStorage.setItem('logged', false);

        location.href = '/#/statistic';
      },

      stopEventPropagation() {}

    }
  });
});
;define('spartan-console/components/user-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('spartan-console/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('spartan-console/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('spartan-console/components/workout-behavior-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Regular', 'Warmup', 'Stretching'];
    }),

    actions: {
      changeFilter(index) {
        var id = this.get('number');
        document.getElementById('workoutBehaviorFilterDefaultValue' + id).innerHTML = this.get('filterValues')[index];
        document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: none";
      },

      toggleDropdown() {

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
});
;define('spartan-console/components/workout-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // id
    currentId: 0,
    message: '',
    function: '',

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected workout.');
        this.set('function', 'deleteWorkout');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {

        // set id to edit in session storage
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        location.href = '/#/edit-workout';
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected workout.');
        this.set('function', 'publishWorkout');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/workout-type-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Reps', 'Timer'];
    }),

    actions: {
      changeFilter(index) {
        var id = this.get('number');
        document.getElementById('workoutTypeFilterDefaultValue' + id).innerHTML = this.get('filterValues')[index];
        document.getElementById('workoutTypeFilterDropdown' + id).style = "display: none";
      },

      toggleDropdown() {

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
});
;define('spartan-console/components/workoutplan-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,

    actions: {

      openDeleteDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will delete selected plan.');
        this.set('function', 'deletePlan');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      goToEditPage(id) {
        // set id to edit in session storage
        sessionStorage.setItem('idToEdit', id);

        // set session state
        sessionStorage.setItem('state', this.get('item').state);

        // set session lang
        sessionStorage.setItem('lang', this.get('item').language);

        location.href = '/#/edit-workout-plan';
      },

      openPublishDialog(id) {

        var state = this.get('item').state;

        if (state === 'R') {
          return;
        }

        this.set('message', 'This will publish selected plan.');
        this.set('function', 'publishPlan');

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});
;define('spartan-console/components/workouts-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    action: '',

    selected: Ember.computed(function () {
      return [];
    }),

    didRender() {
      this._super(...arguments);

      this.markSelected();
    },

    actions: {

      // select/unselect
      select(id) {
        var tagIn = false;

        var selected = this.get('selected');

        for (var i = 0; i < selected.length; i++) {
          if (selected[i] === parseInt(id)) {
            tagIn = true;
          }
        }

        if (tagIn === false) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
          this.get('selected').push(parseInt(id));
        } else {
          document.getElementById(id).style = "background-color: #fff; color: #333;";
          var index = this.get('selected').indexOf(parseInt(id));
          if (index > -1) {
            this.get('selected').splice(index, 1);
          }
        }
      }

    },

    markSelected() {

      var ids = this.get('selected');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        var id = '' + ids[i];

        if (document.getElementById(id) !== null) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        }
      }
    }

  });
});
;define('spartan-console/controllers/add-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions

    name: "",
    identifier: "",

    currentTab: 'basicTab',

    selected: Ember.computed(function () {
      return [];
    }),

    packageTags: Ember.computed(function () {
      return [];
    }),

    appPackages: Ember.computed(function () {
      return [];
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // // inject application controller
    applicationController: Ember.inject.controller('application'),

    // controller actions
    actions: {

      saveData() {

        // set title
        var name = this.get('name');

        // set rawname
        var identifier = this.get('identifier');

        // check if all necessary data is set
        if (name.length === 0 || identifier.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        var collectionData = [];
        var packagesSelected = document.getElementsByClassName("packageListItem");

        for (var i = 0; i < packagesSelected.length; i++) {

          if (packagesSelected[i].style.backgroundColor === "rgb(244, 67, 54)") {
            var collectionItem = {
              "sku": packagesSelected[i].getElementsByClassName("md-input")[0].value,
              "package": packagesSelected[i].id
            };

            collectionData.push(collectionItem);
          }
        }

        // format data to send
        var appData = {
          "name": name,
          "identifier": identifier,
          "collection": collectionData
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/apps', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: appData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('App added');

              location.href = "/#/apps";
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add app');
            }
          }
        });
      }

    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/add-exercise', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    nameObserver: Ember.observer('name', function () {

      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

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
        // get exercise image
        var exerciseImage = document.getElementById('inputFileElement').files[0];

        // get exercise muscle image
        var muscleImage = document.getElementById('inputMuscleFileElement').files[0];

        // get media files
        var media = this.get('applicationController').get('mediaHolder');

        // get language
        var lang = document.getElementById('languageHiddenValue').innerHTML;
        // get hardness
        var hardness = document.getElementById('difficultyFilterDefaultValue').innerHTML;
        hardness = hardness.substr(0, 1);

        // get title
        var name = this.get('name');

        // get tags
        var tags = this.get('selectedTags');

        // get rawname
        var rawname = this.get('rawname');

        // check if all necessary data is set
        if (exerciseImage === undefined || muscleImage === undefined || media.length === 0 || lang.length === 0 || name.length === 0 || tags.length === 0 || rawname.length === 0) {
          // if not return from the function and send warning
          this.callToast('Incomplete data');

          return;
        }

        // set files unique names which will be used for database and for files on system server
        var exerciseImageName = this.setFileName(exerciseImage.name);
        var muscleImageName = this.setFileName(muscleImage.name);
        var mediaToSend = this.formatMedia(media);

        // format data to send
        var exerciseData = {
          "hardness": hardness,
          "muscles_involved": muscleImageName,
          "thumbnail": exerciseImageName,
          "raw_name": rawname,
          "names": [{
            "name": name,
            "lang": lang
          }],
          "tags": tags,
          "media": mediaToSend
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/exercises', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: exerciseData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              var imageFilesToSend = [{
                'source': exerciseImage,
                'name': exerciseImageName
              }, {
                'source': muscleImage,
                'name': muscleImageName
              }];

              // send image files
              for (var i = 0; i < imageFilesToSend.length; i++) {
                main.sendImage(imageFilesToSend[i].source, imageFilesToSend[i].name);
              }

              // send media files
              for (var i = 0; i < mediaToSend.length; i++) {
                main.sendImage(media[i], mediaToSend[i].source);
              }

              main.callToast('Exercise added');
              // return to the exercises page
              location.href = '/#/exercises';
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add exercise');
            }
          }
        });
      }
    },

    formatMedia(data) {
      var media = [];

      // loop through data and format it for the request
      for (var i = 0; i < data.length; i++) {

        var name = data[i].name;

        var item = {
          "type": name.substr(name.indexOf('.') + 1),
          "source": this.setFileName(name)
        };

        media.push(item);
      }

      return media;
    },

    // send uploaded image to the server
    sendImage(file, name) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // set formData object to send
      formData.set('file', file, name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, {
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // clear data
            main.clearData();
          }
        }
      });
    },

    setFileName(name) {
      // remove whitespaces from the file name
      name = name.split(' ').join('_');

      // set unique name
      var updatedName = Math.floor(Math.random() * 10000) + 1 + '-' + name;

      // return new name
      return updatedName;
    },

    clearData() {
      // this.set('selectedTags', []);
      // this.set('name', '');
      // this.set('biography', '');
      // document.getElementById('languageHiddenValue').innerHTML = '';
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
;define('spartan-console/controllers/add-nutrition-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    // data to use while searching
    defaultRecipesModelData: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      this.set('defaultRecipesModelData', this.get('model.recipes').data);
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    nameObserver: Ember.observer('name', function () {
      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedRecipes: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      getDataByLanguage() {

        // show progress
        this.showProgress();

        this.set('selectedTags', []);

        var main = this;

        // get lang
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // update tags
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

        // update recipes
        this.get('ajax').request('/recepies/list?from=0&limit=1000&state=R&lang=' + lang, {
          method: 'GET',
          success: function (data) {
            // set new data to model for refreshing the page
            main.set('model.recipes', data);

            // hide progress
            main.hideProgress();
          }, error: function () {
            // hide progress
            main.hideProgress();
          }
        });
      },

      search() {
        // set model data as default model data
        var modelData = this.get('defaultRecipesModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].title;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          this.set('model.recipes.data', filteredModelData);
        } else {

          // set new model data as default model data
          this.set('model.recipes.data', this.get('defaultRecipesModelData'));
        }

        // var main = this;
        // setTimeout(function(){
        //   main.markSelected();
        // }, 400);
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set rawname
        var rawname = this.get('rawname');

        // set tags
        var tags = this.get('selectedTags');

        // set recipes
        var recipes = this.get('selectedRecipes');

        // set description
        var description = this.get('biography');

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || rawname.length === 0 || description.length === 0 || recipes.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var planData = {
          "thumbnail": imageName,
          "raw_name": rawname,
          "type": "N",
          "names": [{
            "name": title,
            "description": description,
            "language": lang
          }],
          "tags": tags,
          "recepies": recipes
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/nutritionplans', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: planData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Plan added');
              // if data is added, send images to the server
              main.sendImages(image);
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add plan');
            }
          }
        });
      }

    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/nutrition-plans';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/add-package', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    currentTab: 'basicTab',

    // data to use while searching
    defaultWorkoutPlansModelData: Ember.computed(function () {
      return [];
    }),

    // data to use while searching
    defaultNutritionPlansModelData: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      this.set('defaultWorkoutPlansModelData', this.get('model.worplans').data);
      this.set('defaultNutritionPlansModelData', this.get('model.nutplans').data);
    }),

    nameObserver: Ember.observer('name', function () {
      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedNutritionPlans: Ember.computed(function () {
      return [];
    }),

    selectedWorkoutPlans: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      getDataByLanguage() {

        // show progress
        this.showProgress();

        this.set('selectedTags', []);

        var main = this;

        // get lang
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // update tags
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

        // update nutplans
        this.get('ajax').request('/nutritionplans/list?from=0&limit=1000&state=R&lang=' + lang, {
          method: 'GET',
          success: function (data) {
            // set new data to model for refreshing the page
            main.set('model.nutplans', data);

            // hide progress
            main.hideProgress();
          }, error: function () {
            // hide progress
            main.hideProgress();
          }
        });

        // update nutplans
        this.get('ajax').request('/workoutplans/list?from=0&limit=1000&state=R&lang=' + lang, {
          method: 'GET',
          success: function (data) {
            // set new data to model for refreshing the page
            main.set('model.worplans', data);

            // hide progress
            main.hideProgress();
          }, error: function () {
            // hide progress
            main.hideProgress();
          }
        });
      },

      search() {
        // check at which tab is currently beig searched
        var tab = this.get('currentTab');

        // set model data as default model data
        var modelData;
        var value = '';
        if (tab === 'worplansTab') {
          modelData = this.get('defaultWorkoutPlansModelData');
        } else {
          modelData = this.get('defaultNutritionPlansModelData');
        }

        value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          if (tab === 'worplansTab') {
            this.set('model.worplans.data', filteredModelData);
          } else {
            this.set('model.nutplans.data', filteredModelData);
          }
        } else {

          // set new model data as default model data
          if (tab === 'worplansTab') {
            this.set('model.worplans.data', this.get('defaultWorkoutPlansModelData'));
          } else {
            this.set('model.nutplans.data', this.get('defaultNutritionPlansModelData'));
          }
        }
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set rawname
        var rawname = this.get('rawname');

        // set tags
        var tags = this.get('selectedTags');

        // set nutrition plans
        var nutplans = this.get('selectedNutritionPlans');

        // set workout plans
        var worplans = this.get('selectedWorkoutPlans');

        // set description
        var description = this.get('biography');

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || rawname.length === 0 || description.length === 0 || worplans.length === 0 || nutplans.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var packageData = {
          "thumbnail": imageName,
          "raw_name": rawname,
          "names": [{
            "name": title,
            "description": description,
            "language": lang
          }],
          "tags": tags,
          "plans": {
            "workout_plans": worplans,
            "recepie_plans": nutplans
          }
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/packages', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: packageData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Package added');
              // if data is added, send images to the server
              main.sendImages(image);
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add package');
            }
          }
        });
      }

    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/packages';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/add-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    ajax: Ember.inject.service(),

    // inject application controller to communicate over it with toast element
    applicationController: Ember.inject.controller('application'),

    actions: {
      savePolicy() {

        var title = document.getElementsByClassName('pell-content')[0].innerHTML;
        var body = document.getElementsByClassName('pell-content')[1].innerHTML;

        // format data to send
        var dataToSend = {
          'title': title,
          'body': body
        };

        // show progress
        this.showProgress();

        // set this to main so that there is no conflict inside ajax request
        var main = this;

        // send post request for adding admin
        this.get('ajax').request('/policy', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: dataToSend,
          success: function () {
            main.callToast('Policy added');

            // hide progress
            main.hideProgress();

            location.href = '/#/policies';
          },
          error: function () {
            main.callToast('Error');

            // hide progress
            main.hideProgress();
          }
        });

        // sessionStorage.setItem('currentPolicy', sessionStorage.getItem('firstPolicy'));
      }

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
;define('spartan-console/controllers/add-recipe', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

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
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set tags
        var tags = this.get('selectedTags');

        var description = [this.get('biography')];

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || description.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var recipeData = {
          "names": [{
            "name": title,
            "lang": lang
          }],
          "tags": tags,
          "thumbnail": imageName,
          "recepies": description,
          "behavior": "M"
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/recepies', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: recipeData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Recipe added');
              // if data is added, send images to the server
              main.sendImages(image);
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add recipe');
            }
          }
        });
      }

    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/recipes';
            }, 1000);
          }
        }
      });
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
;define('spartan-console/controllers/add-workout-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    // data to use while searching
    defaultWorkoutsModelData: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      this.set('defaultWorkoutsModelData', this.get('model.workouts').data);
    }),

    nameObserver: Ember.observer('name', function () {

      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedWorkouts: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      getDataByLanguage() {

        // show progress
        this.showProgress();

        this.set('selectedTags', []);

        var main = this;

        // get lang
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // update tags
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

        // update workouts
        this.get('ajax').request('/workouts/list?from=0&limit=1000&state=R&lang=' + lang, {
          method: 'GET',
          success: function (data) {
            // set new data to model for refreshing the page
            main.set('model.workouts', data);

            // hide progress
            main.hideProgress();
          }, error: function () {
            // hide progress
            main.hideProgress();
          }
        });
      },

      search() {
        // set model data as default model data
        var modelData = this.get('defaultWorkoutsModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          this.set('model.workouts.data', filteredModelData);
        } else {

          // set new model data as default model data
          this.set('model.workouts.data', this.get('defaultWorkoutsModelData'));
        }
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set rawname
        var rawname = this.get('rawname');

        // set tags
        var tags = this.get('selectedTags');

        // set workouts
        var workouts = this.get('selectedWorkouts');

        // set description
        var description = this.get('biography');

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || rawname.length === 0 || tags.length === 0 || description.length === 0 || workouts.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var planData = {
          "thumbnail": imageName,
          "raw_name": rawname,
          "type": "W",
          "names": [{
            "name": title,
            "description": description,
            "language": lang
          }],
          "tags": tags,
          "workouts": workouts
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/workoutplans', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: planData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Plan added');
              // if data is added, send images to the server
              main.sendImages(image);
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to add plan');
            }
          }
        });
      }
    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/workout-plans';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/add-workouts', ['exports'], function (exports) {
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

    rounds: Ember.computed(function () {
      return [];
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

          // check if some of the data from the basic info and tags tabs is missing
          if (regularTags.length === 0 || equipmentTags.length === 0 || name === undefined || description === undefined) {
            this.callToast('Incomplete data');
            return;
          }

          var workoutData = {
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
            method: 'POST',
            dataType: 'text',
            contentType: 'application/json',
            data: workoutData,
            success: function () {

              var status = data.xhr.status;

              if (status === 200) {
                // remove animation class from progress bar element
                document.getElementById('progressBar').classList.remove('progressBarAnimation');

                main.callToast('Workout added');

                location.href = "/#/workouts";
              } else {
                // remove animation class from progress bar element
                document.getElementById('progressBar').classList.remove('progressBarAnimation');

                // call toast
                main.callToast('Unable to add workout');
              }
            }
          });
        } else {
          this.callToast('Incomplete data');
        }
      }

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
;define('spartan-console/controllers/admins', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    // id
    currentAdminId: 0,
    currentAdminIdObserver: Ember.observer('currentAdminId', function () {
      var id = this.get('currentAdminId');
      var length = this.get('model').data.length;

      for (var i = 0; i < length; i++) {
        var adminId = this.get('model').data[i].id;

        if (id === adminId) {
          document.getElementById('adminFilterDefaultValue').innerHTML = this.get('model').data[i].scope;

          break;
        }
      }
    }),

    // heading for tag dialog
    dialogHeading: 'Add admin',

    // edit text to show when editing
    editText: '',

    editTextObserver: Ember.observer('editText', function () {
      document.getElementById('adminEmailInput').value = this.get('editText');
    }),

    actions: {

      openAddAdminDialog() {
        // clear input value
        document.getElementById('adminEmailInput').value = '';

        this.set('dialogHeading', 'Add admin');

        document.getElementById('adminDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      openEditAdminDialog() {
        this.set('dialogHeading', 'Edit admin');

        document.getElementById('adminDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      addAdmin() {
        var main = this;

        var scope = document.getElementById('adminFilterDefaultValue').innerHTML;

        // show progress
        this.showProgress();

        // set body data
        var adminData = {
          "name": "Unknown",
          "surname": "Unknown",
          "email": document.getElementById('adminEmailInput').value,
          "scope": scope.toLowerCase()
        };

        var data = this.get('ajax').request('/admins', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: adminData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getAdmins();

              // hide progress
              main.hideProgress();

              main.callToast('Admin added');
            } else {
              // hide progress
              main.hideProgress();

              main.callToast('Error');
            }
          }
        });
      },

      editAdmin() {
        var main = this;

        // show progress
        this.showProgress();

        var scope = document.getElementById('adminFilterDefaultValue').innerHTML;

        // set body data
        var adminData = {
          "id": this.get('currentAdminId'),
          "name": "Unknown",
          "surname": "Unknown",
          "email": document.getElementById('adminEmailInput').value,
          "scope": scope.toLowerCase(),
          "state": "pending"
        };

        var data = this.get('ajax').request('/admins', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: adminData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {
              main.getAdmins();

              main.callToast('Admin edited');
            } else if (status === 304) {

              main.callToast('Not modified');
            } else {

              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

      deleteAdmin() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // show progress
        this.showProgress();

        var id = this.get('currentAdminId');

        this.get('ajax').request('/admins?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getAdmins();

            // hide progress
            main.hideProgress();

            main.callToast('Admin deleted');
          },
          error: function () {
            // hide progress
            main.hideProgress();

            main.callToast('Errorl');
          }
        });
      }
    },

    getAdmins() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/admins', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
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
;define('spartan-console/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set application properties and actions

    // set default value for toast text
    textForToast: '',

    imageUploadEndpoint: 'http://staging.api.system.diamondappgroup.com/upload', // staging.api.system.diamondappgroup.com spartan-system:8888

    // media holder
    mediaHolder: Ember.computed(function () {
      return [];
    }),

    // set default current page for the header component
    currentPage: Ember.computed(function () {
      var page = sessionStorage.getItem('currentPage');

      if (page === null) {
        return 'statistic';
      } else {
        return page;
      }
    }),

    actions: {

      // close overlay and menu on click
      closeOverlayAndMenu() {
        document.getElementById('menuOverlay').style = "display: none";
        document.getElementById('menuContainer').style = "display: none";
      },

      closeDropdowns() {

        document.getElementById('notificationsDropdown').style = "display: none;";
        document.getElementById('userProfileDropdown').style = "display: none;";

        if (document.getElementById('monologFilterDropdown') !== null) {
          document.getElementById('monologFilterDropdown').style = "display: none;";
        }

        if (document.getElementById('adminFilterDropdown') !== null) {
          document.getElementById('adminFilterDropdown').style = "display: none;";
        }

        if (document.getElementById('languageFilterDropdown') !== null) {
          document.getElementById('languageFilterDropdown').style = "display: none;";
        }

        if (document.getElementById('typeFilterDropdown') !== null) {
          document.getElementById('typeFilterDropdown').style = "display: none;";
        }

        if (document.getElementById('difficultyFilterDropdown') !== null) {
          document.getElementById('difficultyFilterDropdown').style = "display: none;";
        }

        if (document.getElementById('statefilterDropdown') !== null) {
          document.getElementById('statefilterDropdown').style = "display: none;";
        }
      },

      // open toast
      openToast() {
        // show toast
        document.getElementById('toast').style = "animation-name: toastAnimation; animation-duration: 3s;";
        // remove animation so that animation can be started again on the same way
        setTimeout(function () {
          document.getElementById('toast').style = "animation-name: no;";
        }, 3000);
      },

      loadFile(event) {

        var preview = URL.createObjectURL(event.target.files[0]);
        document.getElementById('uploadImageElement').src = preview;
      },

      loadMuscleImageFile(event) {

        var preview = URL.createObjectURL(event.target.files[0]);
        document.getElementById('uploadMuscleImageElement').src = preview;
      },

      loadMediaImageFile(event) {

        var data = event.target.files;

        // set boolean values for media types
        var gif = false;
        var mp4 = false;
        var m4v = false;

        // set media holder
        var mediaHolder = [];

        // set counter for max value
        var counter = 0;

        // loop through uploaded media files, remove duplicate gifs, mp4 and mkv and set max number of files to three
        for (var i = 0; i < data.length; i++) {

          // if counter is 3 return from the loop
          if (counter === 3) {
            break;
          }

          var name = data[i].name;

          if (name.indexOf('.gif') !== -1 && gif === false) {
            gif = true;
            mediaHolder.push(data[i]);
            counter++;
          } else if (name.indexOf('.mp4') !== -1 && mp4 === false) {
            mp4 = true;
            mediaHolder.push(data[i]);
            counter++;
          } else if (name.indexOf('.m4v') !== -1 && m4v === false) {
            m4v = true;
            mediaHolder.push(data[i]);
            counter++;
          }
        }

        // set media files for sharing with add/edit exercise pages
        this.set('mediaHolder', mediaHolder);

        var mediaFiles = document.getElementById('uploadedMediaFiles');
        mediaFiles.innerHTML = '';

        // set uploaded files to the DOM
        for (var i = 0; i < mediaHolder.length; i++) {
          var element = document.createElement('p');
          element.innerHTML = mediaHolder[i].name;

          mediaFiles.appendChild(element);
        }
      }
    }
  });
});
;define('spartan-console/controllers/apps', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentAppId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deleteApp',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {
      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteApp() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentAppId');

        this.get('ajax').request('/apps?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getApps();
          },
          error: function () {}
        });
      }
    },

    getApps() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/apps', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});
;define('spartan-console/controllers/edit-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    currentTab: 'basicTab',

    selected: Ember.computed(function () {
      return [];
    }),

    packageTags: Ember.computed(function () {
      return [];
    }),

    appPackages: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      //this.set('defaultWorkoutPlansModelData', this.get('model.worplans').data);
      //this.set('defaultNutritionPlansModelData', this.get('model.nutplans').data);

      this.set("name", this.get("model.packages.data.name"));
      this.set("identifier", this.get("model.packages.data.identifier"));

      var duplicateTags = this.get("model.tags.data");
      var nonduplicateTags = [];

      for (var i = 0; i < duplicateTags.length; i++) {

        var first = duplicateTags[i];
        var firstName = duplicateTags[i].name;
        var tagIn = false;

        for (var j = 0; j < nonduplicateTags.length; j++) {
          if (firstName === nonduplicateTags[j].name) {
            tagIn = true;
            break;
          }
        }

        if (tagIn === false) {
          nonduplicateTags.push(first);
        }
      }

      this.set("packageTags", nonduplicateTags);

      this.set("appPackages", this.get("model.packages.data.packages"));
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // // inject application controller
    applicationController: Ember.inject.controller('application'),

    // controller actions
    actions: {

      saveData() {

        // set title
        var name = this.get('name');

        // set rawname
        var identifier = this.get('identifier');

        // check if all necessary data is set
        if (name.length === 0 || identifier.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        var collectionData = [];
        var packagesSelected = document.getElementsByClassName("packageListItem");

        for (var i = 0; i < packagesSelected.length; i++) {

          if (packagesSelected[i].style.backgroundColor === "rgb(244, 67, 54)") {
            var collectionItem = {
              "sku": packagesSelected[i].getElementsByClassName("md-input")[0].value,
              "package": packagesSelected[i].id
            };

            collectionData.push(collectionItem);
          }
        }

        // format data to send
        var appData = {
          "id": sessionStorage.getItem("idToEdit"),
          "name": name,
          "identifier": identifier,
          "collection": collectionData
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/apps', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: appData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('App updated');

              location.href = "/#/apps";
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit app');
            }
          }
        });
      }

    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/packages';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/edit-exercise', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    // old exercise image
    oldImage: '',

    // old muscle image
    oldMuscleImage: '',

    // old hardness value
    oldHardness: '',

    // media value
    media: Ember.computed(function () {
      return [];
    }),

    nameObserver: Ember.observer('name', function () {
      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    // observe model
    modelObserver: Ember.observer('model', function () {
      var exercise = this.get('model.exercise.data');
      this.set('oldImage', exercise.thumbnail);
      this.set('oldMuscleImage', exercise.muscles_involved);
      this.set('selectedTags', exercise.tags);
      this.set('media', exercise.formats);
      this.set('name', exercise.name);
      this.set('rawname', exercise.raw_name);
      this.set('oldHardness', exercise.hardness);
    }),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      saveData() {
        // get exercise image and check if it is new or not
        var exerciseImage = document.getElementById('inputFileElement').files[0];
        var newExerciseImage = false;
        var exerciseImageName = '';
        if (exerciseImage === undefined) {
          exerciseImageName = this.formatLink(this.get('oldImage'));
        } else {
          exerciseImageName = this.setFileName(exerciseImage.name);
          newExerciseImage = true;
        }

        // get muscle image and check if it is new or not
        var muscleImage = document.getElementById('inputMuscleFileElement').files[0];
        var newMuscleImage = false;
        var muscleImageName = '';
        if (muscleImage === undefined) {
          muscleImageName = this.formatLink(this.get('oldMuscleImage'));
        } else {
          muscleImageName = this.setFileName(muscleImage.name);
          newMuscleImage = true;
        }

        // get media files and check if they are new or not
        var media = this.get('applicationController').get('mediaHolder');
        var newMedia = false;
        var mediaToSend = [];
        if (media.length === 0) {
          mediaToSend = this.formatOldMedia(this.get('media'));
        } else {
          mediaToSend = this.formatMedia(media);
          newMedia = true;
        }

        // get language
        var lang = document.getElementById('languageHiddenValue').innerHTML;
        // get hardness
        var hardness = document.getElementById('difficultyFilterDefaultValue').innerHTML;
        hardness = hardness.substr(0, 1);

        // get title
        var name = this.get('name');

        // get tags
        var tags = this.get('selectedTags');

        // get rawname
        var rawname = this.get('rawname');

        // check if all necessary data is set
        if (name.length === 0 || tags.length === 0 || rawname.length === 0) {
          // if not return from the function and send warning
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var exerciseData = {
          "id": sessionStorage.getItem('idToEdit'),
          "hardness": hardness,
          "muscles_involved": muscleImageName,
          "thumbnail": exerciseImageName,
          "raw_name": rawname,
          "names": [{
            "name": name,
            "lang": lang
          }],
          "tags": tags,
          "media": mediaToSend
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/exercises', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: exerciseData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // check which images are new and set imageFilesToSend value
              var imageFilesToSend = [];
              if (newExerciseImage === true && newMuscleImage === true) {
                imageFilesToSend = [{
                  'source': exerciseImage,
                  'name': exerciseImageName
                }, {
                  'source': muscleImage,
                  'name': muscleImageName
                }];
              } else if (newExerciseImage === true && newMuscleImage === false) {
                imageFilesToSend = [{
                  'source': exerciseImage,
                  'name': exerciseImageName
                }];
              } else if (newExerciseImage === false && newMuscleImage === true) {
                imageFilesToSend = [{
                  'source': muscleImage,
                  'name': muscleImageName
                }];
              }

              // if there is new uploaded images send them to the server
              if (imageFilesToSend.length !== 0) {
                // send image files
                for (var i = 0; i < imageFilesToSend.length; i++) {
                  main.sendImage(imageFilesToSend[i].source, imageFilesToSend[i].name);
                }
              }

              // if there is new uploaded media send it to the server
              if (newMedia === true) {
                // send media files
                for (var i = 0; i < mediaToSend.length; i++) {
                  main.sendImage(media[i], mediaToSend[i].source);
                }
              }

              main.callToast('Exercise updated');

              // clear data
              main.clearData();

              // return to the exercises page
              location.href = '/#/exercises';
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit exercise');
            }
          }
        });
      }
    },

    formatLink(link) {

      var newLink = link.substr(link.lastIndexOf('/') + 1);

      return newLink;
    },

    formatOldMedia(data) {
      var media = [];

      // loop through data and format it for the request
      for (var i = 0; i < data.length; i++) {

        var source = data[i].source;

        var item = {
          "type": data[i].type,
          "source": this.formatLink(source)
        };

        media.push(item);
      }

      return media;
    },

    formatMedia(data) {
      var media = [];

      // loop through data and format it for the request
      for (var i = 0; i < data.length; i++) {

        var name = data[i].name;

        var item = {
          "type": name.substr(name.indexOf('.') + 1),
          "source": this.setFileName(name)
        };

        media.push(item);
      }

      return media;
    },

    // send uploaded image to the server
    sendImage(file, name) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // set formData object to send
      formData.set('file', file, name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, {
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // clear data
            main.clearData();
          }
        }
      });
    },

    setFileName(name) {
      // remove whitespaces from the file name
      name = name.split(' ').join('_');

      // set unique name
      var updatedName = Math.floor(Math.random() * 10000) + 1 + '-' + name;

      // return new name
      return updatedName;
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('media', []);
      this.set('name', '');
      this.set('rawname', '');
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
;define('spartan-console/controllers/edit-nutrition-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    // data to use while searching
    defaultRecipesModelData: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      this.set('defaultRecipesModelData', this.get('model.recipes').data);
      var planData = this.get('model.plan').data;
      this.set('oldImage', planData.thumbnail);

      var recipes = planData.recepies;
      var recipieIds = [];

      if (recipes !== null) {
        // loop through tags and extract their ids
        for (var i = 0; i < recipes.length; i++) {
          recipieIds.push(parseInt(recipes[i].id));
        }
      }

      this.set('selectedRecipes', recipieIds);

      this.set('selectedTags', planData.tags);

      this.set('name', planData.name);

      this.set('rawname', planData.raw_name);

      this.set('biography', planData.description);
    }),

    nameObserver: Ember.observer('name', function () {
      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedRecipes: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      search() {
        // set model data as default model data
        var modelData = this.get('defaultRecipesModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].title;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          this.set('model.recipes.data', filteredModelData);
        } else {

          // set new model data as default model data
          this.set('model.recipes.data', this.get('defaultRecipesModelData'));
        }
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        } else {
          imageName = this.formatLink(this.get('oldImage'));
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set rawname
        var rawname = this.get('rawname');

        // set tags
        var tags = this.get('selectedTags');

        // set recipes
        var recipes = this.get('selectedRecipes');

        // set description
        var description = this.get('biography');

        // check if all necessary data is set
        if (lang.length === 0 || title.length === 0 || tags.length === 0 || rawname.length === 0 || description.length === 0 || recipes.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var planData = {
          "id": sessionStorage.getItem('idToEdit'),
          "thumbnail": imageName,
          "raw_name": rawname,
          "type": "N",
          "names": [{
            "name": title,
            "description": description,
            "language": lang
          }],
          "tags": tags,
          "recepies": recipes
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/nutritionplans', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: planData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Plan updated');

              if (imageName !== main.formatLink(main.get('oldImage'))) {
                main.sendImages(image);
              } else {
                location.href = '/#/nutrition-plans';
              }
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit plan');
            }
          }
        });
      }

    },

    formatLink(link) {

      var newLink = link.substr(link.lastIndexOf('/') + 1);

      return newLink;
    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/nutrition-plans';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/edit-package', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    currentTab: 'basicTab',

    oldImage: '',

    // data to use while searching
    defaultWorkoutPlansModelData: Ember.computed(function () {
      return [];
    }),

    // data to use while searching
    defaultNutritionPlansModelData: Ember.computed(function () {
      return [];
    }),

    nameObserver: Ember.observer('name', function () {
      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    modelObserver: Ember.observer('model', function () {
      this.set('defaultWorkoutPlansModelData', this.get('model.worplans').data);
      this.set('defaultNutritionPlansModelData', this.get('model.nutplans').data);

      var packageData = this.get('model.package').data;
      this.set('name', packageData.name);
      this.set('rawname', packageData.raw_name);
      this.set('biography', packageData.description);
      this.set('selectedTags', packageData.tags);
      this.set('oldImage', packageData.thumbnail);

      // workoutplans ids
      var worplans = packageData.training_plans;
      var worIds = [];
      if (worplans !== null) {
        for (var i = 0; i < worplans.length; i++) {
          worIds.push(worplans[i].id);
        }
      }
      this.set('selectedWorkoutPlans', worIds);

      // nutritionplans ids
      var nutplans = packageData.nutrition_plans;
      var nutIds = [];
      if (nutplans !== null) {
        for (var i = 0; i < nutplans.length; i++) {
          nutIds.push(nutplans[i].id);
        }
      }

      this.set('selectedNutritionPlans', nutIds);
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedNutritionPlans: Ember.computed(function () {
      return [];
    }),

    selectedWorkoutPlans: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      search() {
        // check at which tab is currently beig searched
        var tab = this.get('currentTab');

        // set model data as default model data
        var modelData;
        var value = '';
        if (tab === 'worplansTab') {
          modelData = this.get('defaultWorkoutPlansModelData');
        } else {
          modelData = this.get('defaultNutritionPlansModelData');
        }

        value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          if (tab === 'worplansTab') {
            this.set('model.worplans.data', filteredModelData);
          } else {
            this.set('model.nutplans.data', filteredModelData);
          }
        } else {

          // set new model data as default model data
          if (tab === 'worplansTab') {
            this.set('model.worplans.data', this.get('defaultWorkoutPlansModelData'));
          } else {
            this.set('model.nutplans.data', this.get('defaultNutritionPlansModelData'));
          }
        }
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        } else {
          imageName = this.formatLink(this.get('oldImage'));
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set rawname
        var rawname = this.get('rawname');

        // set tags
        var tags = this.get('selectedTags');

        // set nutrition plans
        var nutplans = this.get('selectedNutritionPlans');

        // set workout plans
        var worplans = this.get('selectedWorkoutPlans');

        // set description
        var description = this.get('biography');

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || rawname.length === 0 || description.length === 0 || worplans.length === 0 || nutplans.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var packageData = {
          "id": sessionStorage.getItem('idToEdit'),
          "thumbnail": imageName,
          "raw_name": rawname,
          "names": [{
            "name": title,
            "description": description,
            "language": lang
          }],
          "tags": tags,
          "plans": {
            "workout_plans": worplans,
            "recepie_plans": nutplans
          }
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/packages', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: packageData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Package updated');

              if (imageName !== main.formatLink(main.get('oldImage'))) {
                main.sendImages(image);
              } else {
                location.href = '/#/packages';
              }
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit package');
            }
          }
        });
      }

    },

    formatLink(link) {

      var newLink = link.substr(link.lastIndexOf('/') + 1);

      return newLink;
    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to recipes page
              location.href = '/#/packages';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/edit-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    ajax: Ember.inject.service(),

    // inject application controller to communicate over it with toast element
    applicationController: Ember.inject.controller('application'),

    actions: {
      savePolicy() {

        var title = document.getElementsByClassName('pell-content')[0].innerHTML;
        var body = document.getElementsByClassName('pell-content')[1].innerHTML;

        // show progress
        this.showProgress();

        // format data to send
        var dataToSend = {
          'id': this.get('model').data.id,
          'title': title,
          'body': body
        };

        // set this to main so that there is no conflict inside ajax request
        var main = this;

        // send post request for adding admin
        this.get('ajax').request('/policy', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: dataToSend,
          success: function () {
            main.callToast('Policy edited');

            // hide progress
            main.hideProgress();

            location.href = '/#/policies';
          },
          error: function () {
            main.callToast('Error');

            // hide progress
            main.hideProgress();
          }
        });
      }
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
;define('spartan-console/controllers/edit-recipe', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // old image
    oldImage: '',

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    modelObserver: Ember.observer('model', function () {
      var recipe = this.get('model.recipe');

      // set values to edit
      this.set('name', recipe[0].title);
      this.set('biography', recipe[0].text);
      this.set('languageFilterDefaultValue', recipe[0].lang);

      // set old image
      var image = recipe[0].thumbnail;
      this.set('oldImage', image); // image.substr(image.lastIndexOf('/') + 1)

      // set default tags
      this.set('selectedTags', recipe[0].tags);
    }),

    // controller actions
    actions: {

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = this.get('oldImage');

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        } else {
          imageName = this.get('oldImage');
          imageName = imageName.substr(imageName.lastIndexOf('/') + 1);
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set tags
        var tags = this.get('selectedTags');

        var description = [this.get('biography')];

        // check if all necessary data is set
        if (imageName.length === 0 || lang.length === 0 || title.length === 0 || tags.length === 0 || description.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var recipeData = {
          "id": sessionStorage.getItem('idToEdit'),
          "names": [{
            "name": title,
            "lang": lang
          }],
          "tags": tags,
          "thumbnail": imageName,
          "recepies": description,
          "behavior": "M"
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/recepies', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: recipeData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Recipe edited');
              // if data is added, send images to the server if the image is new
              if (main.get('oldImage').indexOf(imageName) === -1) {
                main.sendImages(image);
              } else {
                // wait for 1 second so that image is uploaded to the server before request for the new data is made
                setTimeout(function () {
                  // redirect to recipes page
                  location.href = '/#/recipes';
                }, 1000);
              }
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to edit recipe');
            }
          }
        });
      }

    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, { //
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {

            main.clearData();

            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {
              // redirect to recipes page
              location.href = '/#/recipes';
            }, 1000);
          }
        }
      });
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
;define('spartan-console/controllers/edit-workout-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    // set controller properties and actions

    // data to use while searching
    defaultWorkoutsModelData: Ember.computed(function () {
      return [];
    }),

    nameObserver: Ember.observer('name', function () {
      var rawname = this.get('name').toLowerCase();
      rawname = rawname.replace(/ /g, "_");

      this.set('rawname', rawname);
    }),

    modelObserver: Ember.observer('model', function () {
      this.set('defaultWorkoutsModelData', this.get('model.workouts').data);

      var planData = this.get('model.plan').data;

      this.set('oldImage', planData.thumbnail);

      var workouts = planData.workouts;
      var workoutIds = [];

      // loop through tags and extract their ids
      if (workouts !== null) {
        for (var i = 0; i < workouts.length; i++) {
          workoutIds.push(parseInt(workouts[i].id));
        }
      } else {
        workouts = [];
      }

      this.set('selectedWorkouts', workoutIds);

      this.set('selectedTags', planData.tags);

      this.set('name', planData.name);

      this.set('rawname', planData.raw_name);

      this.set('biography', planData.description);
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    containers: Ember.computed(function () {
      return ['bas', 'tag', 'imag'];
    }),

    selectedTags: Ember.computed(function () {
      return [];
    }),

    selectedWorkouts: Ember.computed(function () {
      return [];
    }),

    // controller actions
    actions: {

      search() {
        // set model data as default model data
        var modelData = this.get('defaultWorkoutsModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].title;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          // set new model data as filtered data
          this.set('model.workouts.data', filteredModelData);
        } else {

          // set new model data as default model data
          this.set('model.workouts.data', this.get('defaultWorkoutsModelData'));
        }
      },

      saveData() {
        // get uploaded images
        var image = document.getElementById('inputFileElement').files[0];

        // images name holder
        var imageName = '';

        if (image) {
          var name = image.name;
          // replace whitespaces with _
          name = name.split(' ').join('_');
          imageName = name;
        } else {
          imageName = this.formatLink(this.get('oldImage'));
        }

        // set language
        var lang = document.getElementById('languageHiddenValue').innerHTML;

        // set title
        var title = this.get('name');

        // set rawname
        var rawname = this.get('rawname');

        // set tags
        var tags = this.get('selectedTags');

        // set workouts
        var workouts = this.get('selectedWorkouts');

        // set description
        var description = this.get('biography');

        // check if all necessary data is set
        if (lang.length === 0 || title.length === 0 || tags.length === 0 || rawname.length === 0 || description.length === 0 || workouts.length === 0) {
          // return from the function
          this.callToast('Incomplete data');

          return;
        }

        // format data to send
        var planData = {
          "id": sessionStorage.getItem('idToEdit'),
          "thumbnail": imageName,
          "raw_name": rawname,
          "type": "W",
          "names": [{
            "name": title,
            "description": description,
            "language": lang
          }],
          "tags": tags,
          "workouts": workouts
        };

        // if all data is there procede with the request and show progress bar
        document.getElementById('progressBar').classList.add('progressBarAnimation');

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // send request for adding product data to the database
        var data = this.get('ajax').request('/workoutplans', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: planData,
          success: function () {

            var status = data.xhr.status;

            if (status === 200) {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              main.callToast('Plan updated');

              if (imageName !== main.formatLink(main.get('oldImage'))) {
                main.sendImages(image);
              } else {
                location.href = '/#/workout-plans';
              }
            } else {
              // remove animation class from progress bar element
              document.getElementById('progressBar').classList.remove('progressBarAnimation');

              // call toast
              main.callToast('Unable to update plan');
            }
          }
        });
      }

    },

    formatLink(link) {

      var newLink = link.substr(link.lastIndexOf('/') + 1);

      return newLink;
    },

    // send uploaded image to the server
    sendImages(image) {

      var main = this;

      // create form data object
      var formData = new FormData();

      // get uploaded image files
      var file = document.getElementById('inputFileElement');

      // get name of the current image and replace whitespaces with _
      var name = file.files[0].name;
      name = name.split(' ').join('_');

      // set formData object to send
      formData.set('file', file.files[0], name);

      // get url to send
      var url = this.get('applicationController').get('imageUploadEndpoint');

      // send request
      var data = this.get('ajax').request(url, {
        method: 'POST',
        contentType: false,
        processData: false,
        data: formData,
        dataType: 'text',
        success: function () {

          var status = data.xhr.status;

          if (status === 200) {
            // wait for 1 second so that image is uploaded to the server before request for the new data is made
            setTimeout(function () {

              // clear data
              main.clearData();

              // redirect to workouts page
              location.href = '/#/workout-plans';
            }, 1000);
          }
        }
      });
    },

    clearData() {
      this.set('selectedTags', []);
      this.set('name', '');
      this.set('rawname');
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
;define('spartan-console/controllers/edit-workout', ['exports'], function (exports) {
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
;define('spartan-console/controllers/exercises', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentExerciseId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deleteExercise',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {
      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteExercise() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentExerciseId');

        this.get('ajax').request('/exercises?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getExercises();
          },
          error: function () {}
        });
      },

      publishExercise() {

        var main = this;

        // set body data
        var exerciseData = {
          "id": this.get('currentExerciseId')
        };

        var data = this.get('ajax').request('/exercises', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: exerciseData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getExercises();
            } else {}
          }
        });
      }
    },

    getExercises() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/exercises/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});
;define('spartan-console/controllers/languages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // ajax service for making requests
    ajax: Ember.inject.service(),

    // inject application controller to communicate over it with toast element
    applicationController: Ember.inject.controller('application'),
    // id
    currentLanguageId: 0,

    actions: {

      openAddLanguageDialog() {
        // clear input values
        document.getElementById('languageText').value = '';
        document.getElementById('isoText').value = '';

        document.getElementById('languageDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      addLanguage() {

        var main = this;

        // set body data
        var languageData = {
          "name": document.getElementById('languageText').value,
          "iso": document.getElementById('isoText').value
        };

        // show progress
        this.showProgress();

        var data = this.get('ajax').request('/language', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: languageData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.callToast('Language added');

              main.getLanguages();

              // hide progress
              main.hideProgress();
            } else {
              main.callToast('Error');

              // hide progress
              main.hideProgress();
            }
          }
        });
      },

      deleteLanguage() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // show progress
        this.showProgress();

        var id = this.get('currentLanguageId');

        this.get('ajax').request('/language?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.callToast('Language deleted');
            main.getLanguages();

            // hide progress
            main.hideProgress();
          },
          error: function () {
            main.callToast('Error');

            // hide progress
            main.hideProgress();
          }
        });
      }
    },

    getLanguages() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/language', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
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
;define('spartan-console/controllers/monolog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    currentLogDate: '',
    currentFilter: 'Admin',

    // observe filter changes
    observeFilter: Ember.observer('currentFilter', function () {
      var filter = this.get('currentFilter').toUpperCase();
      this.getLogs();
    }),

    actions: {

      deleteLog() {

        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // show progress
        this.showProgress();

        // delete log
        var type = this.get('currentFilter').toUpperCase();
        var date = this.get('currentLogDate');

        this.get('ajax').request('/monolog/log?type=' + type + '&date=' + date, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getLogs();

            // hide progress
            main.hideProgress();

            main.callToast('Log deleted');
          },
          error: function () {
            // hide progress
            main.hideProgress();

            main.callToast('Error');
          }
        });
      }
    },

    getLogs() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // show progress
      this.showProgress();

      // get new data
      this.get('ajax').request('/monolog/logs?type=' + this.get('currentFilter').toUpperCase(), {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);

          // hide progress
          main.hideProgress();
        },
        error: function () {

          // hide progress
          main.hideProgress();
        }
      });
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
;define('spartan-console/controllers/nutrition-plans', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions

    defaultModelData: Ember.computed(function () {
      return [];
    }),

    unfilteredData: Ember.computed(function () {
      return [];
    }),

    // state
    currentState: "All",
    // id
    currentPlanId: 0,
    // dialog message
    dialogMessage: '',
    // action
    functionName: 'deletePlan',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      this.set('unfilteredData', this.get('model').data);

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {

      filter() {

        // loop through model and filter according to current state
        // set model data as default model data
        var modelData = this.get('unfilteredData');

        // set value for filtered data
        var filteredModelData = [];

        var value = this.get("currentState");

        if (value === "Released") {

          // loop through values
          for (var i = 0; i < modelData.length; i++) {
            if (modelData[i].state === "R") {
              filteredModelData.push(modelData[i]);
            }
          }

          this.set("model.data", filteredModelData);
        } else if (value === "Not released") {
          // loop through values
          for (var i = 0; i < modelData.length; i++) {
            if (modelData[i].state === "P") {
              filteredModelData.push(modelData[i]);
            }
          }

          this.set("model.data", filteredModelData);
        } else {
          // loop through values
          for (var i = 0; i < modelData.length; i++) {
            filteredModelData.push(modelData[i]);
          }

          this.set("model.data", filteredModelData);
        }
      },

      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();
        var state = this.get("currentState");
        // set value for filtered data
        var filteredModelData = [];

        if (value !== '') {

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array


              if (state === "Not released") {
                if (modelData[i].state === "P") {
                  filteredModelData.push(modelData[i]);
                }
              } else if (state === "Released") {
                if (modelData[i].state === "R") {
                  filteredModelData.push(modelData[i]);
                }
              } else {
                filteredModelData.push(modelData[i]);
              }
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));

          this.filter();
        }

        this.set('searching', false);
      },

      deletePlan() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentPlanId');

        this.get('ajax').request('/nutritionplans?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getPlans();
          },
          error: function () {}
        });
      },

      publishPlan() {

        var main = this;

        // set body data
        var planData = {
          "id": this.get('currentPlanId')
        };

        var data = this.get('ajax').request('/nutritionplans', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: planData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getPlans();
            } else {}
          }
        });
      }

    },

    getPlans() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/nutritionplans/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    },

    filter() {

      // loop through model and filter according to current state
      // set model data as default model data
      var modelData = this.get('unfilteredData');

      // set value for filtered data
      var filteredModelData = [];

      var value = this.get("currentState");

      if (value === "Released") {

        // loop through values
        for (var i = 0; i < modelData.length; i++) {
          if (modelData[i].state === "R") {
            filteredModelData.push(modelData[i]);
          }
        }

        this.set("model.data", filteredModelData);
      } else if (value === "Not released") {
        // loop through values
        for (var i = 0; i < modelData.length; i++) {
          if (modelData[i].state === "P") {
            filteredModelData.push(modelData[i]);
          }
        }

        this.set("model.data", filteredModelData);
      } else {
        // loop through values
        for (var i = 0; i < modelData.length; i++) {
          filteredModelData.push(modelData[i]);
        }

        this.set("model.data", filteredModelData);
      }
    }

  });
});
;define('spartan-console/controllers/packages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentPackageId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deletePackage',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {
      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deletePackage() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentPackageId');

        this.get('ajax').request('/packages?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getPackages();
          },
          error: function () {}
        });
      },

      publishPackage() {

        var main = this;

        // set body data
        var packageData = {
          "id": this.get('currentPackageId')
        };

        var data = this.get('ajax').request('/packages', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: packageData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getPackages();
            } else {}
          }
        });
      }

    },

    getPackages() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/packages/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});
;define('spartan-console/controllers/policies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    currentPolicy: 0,
    currentId: 0,

    modelObserver: Ember.observer('model', function () {
      if (this.get('model').data) {
        var id = this.get('model').data[0].id;
        this.set('currentId', id);
        this.set('currentPolicy', 0);
      }
    }),

    currentPolicyObserver: Ember.observer('currentPolicy', function () {

      if (this.get('currentPolicy') === 0) {
        return;
      }

      var id = this.get('currentPolicy');
      var policies = this.get('model').data;

      for (var i = 0; i < policies.length; i++) {

        var idPolicy = this.get('model').data[i].id;

        if (policies[i].id === id) {
          var body = this.get('model').data[i].body;
          this.set('currentId', id);

          // style selected policy item
          document.getElementById(idPolicy).style = "background-color: rgba(0,0,0, 0.1);";

          document.getElementById('policyBody').innerHTML = body;
        } else {
          document.getElementById(idPolicy).style = "background-color: transparent;";
        }
      }
    }),

    actions: {
      goToEditPolicyPage() {

        var id = this.get('currentId');

        sessionStorage.setItem('currentPolicy', id);

        location.href = '/#/edit-policy';
      },

      goToAddPolicyPage() {
        location.href = '/#/add-policy';
      },

      openConfirmationDialog() {
        document.getElementById('dialogOverlay').style = "display: block;";
        document.getElementById('confirmationDialog').style = "display: block;";
      },

      deletePolicy() {

        // check if this is a last policy
        if (this.get('model').data.length === 1) {
          return;
        }

        // show progress
        this.showProgress();

        // set this to main so that there is no conflict inside ajax request
        var main = this;

        // delete admin request and fetch new data
        this.get('ajax').request('/policy?id=' + this.get('currentId'), {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            main.getPolicies();

            main.callToast('Policy deleted');

            // hide progress
            main.hideProgress();
          },
          error: function () {
            main.callToast('Error');

            // hide progress
            main.hideProgress();
          }
        });
      }
    },

    getPolicies() {

      // set this to main so that there is no conflict inside ajax request
      var main = this;

      // get new data and update model for refreshing the page
      return this.get('ajax').request('policy', {
        method: 'GET',
        success: function (data) {
          main.set('model', data);
        },
        error: function (data) {}
      });
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
;define('spartan-console/controllers/recipes', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentRecipeId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deleteRecipe',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {

      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].title;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteRecipe() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentRecipeId');

        this.get('ajax').request('/recepies?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getRecipes();
          },
          error: function () {}
        });
      },

      publishRecipe() {

        var main = this;

        // set body data
        var tagData = {
          "id": this.get('currentRecipeId')
        };

        var data = this.get('ajax').request('/recepies', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getRecipes();
            } else {}
          }
        });
      }
    },

    getRecipes() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/recepies/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});
;define('spartan-console/controllers/tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // inject application controller
    applicationController: Ember.inject.controller('application'),

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentTagId: 0,
    currentTagIdObserver: Ember.observer('currentTagId', function () {
      var id = this.get('currentTagId');
      var length = this.get('model').tags.data.length;

      for (var i = 0; i < length; i++) {
        var tagId = this.get('model').tags.data[i].id;

        if (id === tagId) {
          var type = this.get('model').tags.data[i].behaviour;
          var language = this.get('model').tags.data[i].language;

          if (type === 'M') {
            type = 'Muscle';
          } else if (type === 'R') {
            type = 'Regular';
          } else {
            type = 'Equipment';
          }

          document.getElementById('typeFilterDefaultValue').innerHTML = type;
          document.getElementById('languageFilterDefaultValue').innerHTML = language;
          document.getElementById('languageHiddenValue').innerHTML = language;

          break;
        }
      }

      // var tags = this.get('model').tags.data;
      // document.getElementById('languageFilterDefaultValue').innerHTML = this.get('model').tags.data[id];
      //
      // // set language
      // var length = this.get('model').tags.data.length;
      //
      // for(var i = 0; i < length; i++){
      //   var tag = this.get('model').tags.data[i];
      //
      //   if(tag.id === id){
      //     var language = this.get('model').tags.data[i].language;
      //     document.getElementById('languageFilterDefaultValue').innerHTML = language;
      //
      //     break;
      //   }
      // }
    }),

    // dialog message for confirmation dialog
    dialogMessage: '',

    // heading for tag dialog
    dialogHeading: 'Add tag',

    // action
    functionName: 'deleteTag',

    // edit text to show when editing
    editText: '',

    editTextObserver: Ember.observer('editText', function () {
      var id = this.get('currentTagId');
      var text = this.get('editText');

      document.getElementById('tagText').value = text;
      //document.getElementById('languageFilterDefaultValue').innerHTML = this.get('model.tags').data[id].language;
    }),

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model.tags').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model.tags').data);
        this.set('modelLength', this.get('model.tags').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model.tags').data);
        this.set('modelLength', this.get('model.tags').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {

      openEditTagDialog() {

        this.set('dialogHeading', 'Edit tag');

        document.getElementById('tagDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";

        document.getElementById('languageFilterDefaultValue').style = "pointer-events: none; opacity: 0.54;";
      },

      openAddTagDialog() {
        // clear input value
        document.getElementById('tagText').value = '';
        document.getElementById('languageFilterDefaultValue').innerHTML = 'English';
        document.getElementById('languageHiddenValue').innerHTML = 'En';

        this.set('dialogHeading', 'Add tag');
        this.set('editText', '');

        document.getElementById('tagDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";

        document.getElementById('languageFilterDefaultValue').style = "pointer-events: auto; opacity: 1;";
      },

      addTag() {
        var main = this;

        // show progress
        this.showProgress();

        var type = document.getElementById('typeFilterDefaultValue').innerHTML;

        // set body data
        var tagData = {
          "names": [{
            "name": document.getElementById('tagText').value,
            "lang": document.getElementById('languageHiddenValue').innerHTML
          }],
          "behavior": type.substr(0, 1)
        };

        var data = this.get('ajax').request('/tags', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag added');
            } else if (status === 304) {
              main.callToast('Not modified');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

      editTag() {

        var main = this;

        // show progress
        this.showProgress();

        var type = document.getElementById('typeFilterDefaultValue').innerHTML;

        // set body data
        var tagData = {
          "id": this.get('currentTagId'),
          "names": [{
            "name": document.getElementById('tagText').value,
            "lang": document.getElementById('languageHiddenValue').innerHTML
          }],
          "behavior": type.substr(0, 1)
        };

        var data = this.get('ajax').request('/tags', {
          method: 'PUT',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag edited');
            } else if (status === 304) {
              main.getTags();

              main.callToast('Tag edited');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.tags.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.tags.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteTag() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        // show progress
        this.showProgress();

        var id = this.get('currentTagId');

        var data = this.get('ajax').request('/tags?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag deleted');
            } else if (status === 304) {
              main.callToast('Not modified');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      },

      publishTag() {

        var main = this;

        // show progress
        this.showProgress();

        // set body data
        var tagData = {
          "id": this.get('currentTagId')
        };

        var data = this.get('ajax').request('/tags', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: tagData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getTags();

              main.callToast('Tag released');
            } else if (status === 304) {
              main.callToast('Not modified');
            } else {
              main.callToast('Error');
            }

            // hide progress
            main.hideProgress();
          }
        });
      }
    },

    getTags() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/tags/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model.tags', data);
        },
        error: function () {}
      });
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
;define('spartan-console/controllers/users', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model'));
        this.set('modelLength', this.get('model').length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model'));
        this.set('modelLength', this.get('model').length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {
      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model', this.get('defaultModelData'));
        }

        this.set('searching', false);
      }
    }

  });
});
;define('spartan-console/controllers/workout-plans', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentPlanId: 0,
    // dialog message
    dialogMessage: '',
    // action
    functionName: 'deletePlan',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {
      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deletePlan() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentPlanId');

        this.get('ajax').request('/workoutplans?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getPlans();
          },
          error: function () {}
        });
      },

      publishPlan() {

        var main = this;

        // set body data
        var planData = {
          "id": this.get('currentPlanId')
        };

        var data = this.get('ajax').request('/workoutplans', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: planData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getPlans();
            } else {}
          }
        });
      }

    },

    getPlans() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/workoutplans/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});
;define('spartan-console/controllers/workouts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    // set controller properties and actions
    defaultModelData: Ember.computed(function () {
      return [];
    }),

    // id
    currentWorkoutId: 0,

    // dialog message
    dialogMessage: '',

    // action
    functionName: 'deleteWorkout',

    // this value will track old model data length
    modelLength: 0,
    searching: false,

    modelObserver: Ember.observer('model', function () {

      // we need this model lengths to see if user deleted, edited or added new supplement and to avoid setting --
      // --> defaultModelData when user is searching
      var oldLength = this.get('modelLength');
      var newLength = this.get('model').data.length;

      var searching = this.get('searching');

      // check if user edited added or deleted supplement
      if ((oldLength === newLength || oldLength === newLength - 1 || oldLength === newLength + 1) && searching === false) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }

      // on first loading of the page set default model as model
      if (this.get('defaultModelData').length === 0 || this.get('searchTriggersModelChange') === true) {
        this.set('defaultModelData', this.get('model').data);
        this.set('modelLength', this.get('model').data.length);
      }
    }),

    // inject ajax service for making ajax requests
    ajax: Ember.inject.service(),

    // set actions
    actions: {
      search() {
        // set model data as default model data
        var modelData = this.get('defaultModelData');

        // get value entered in search field
        var value = document.getElementById('searcher').value.toLowerCase();

        if (value !== '') {
          // set value for filtered data
          var filteredModelData = [];

          // loop through values
          for (var i = 0; i < modelData.length; i++) {

            // get name of current product
            var name = modelData[i].name;
            name = name.toLowerCase();

            // check if product name contains entered value
            if (name.indexOf(value) !== -1) {
              // if yes set it to the filtered array
              filteredModelData.push(modelData[i]);
            }
          }

          this.set('searching', true);

          // set new model data as filtered data
          this.set('model.data', filteredModelData);
        } else {

          this.set('searching', true);

          // set new model data as default model data
          this.set('model.data', this.get('defaultModelData'));
        }

        this.set('searching', false);
      },

      deleteWorkout() {
        // set this to main to avoid conflicts inside ajax function
        var main = this;

        var id = this.get('currentWorkoutId');

        this.get('ajax').request('/workouts?id=' + id, {
          method: 'DELETE',
          dataType: 'text',
          success: function () {
            // after deleting log get current data
            main.getWorkouts();
          },
          error: function () {}
        });
      },

      publishWorkout() {

        var main = this;

        // set body data
        var workoutData = {
          "id": this.get('currentWorkoutId')
        };

        var data = this.get('ajax').request('/workouts', {
          method: 'POST',
          dataType: 'text',
          contentType: 'application/json',
          data: workoutData,
          success: function () {

            // get status code
            var status = data.xhr.status;

            if (status === 200) {

              main.getWorkouts();
            } else {}
          }
        });
      }

    },

    getWorkouts() {
      // set this to main to avoid conflicts inside ajax function
      var main = this;

      // get new data
      this.get('ajax').request('/workouts/list?from=0&limit=1000', {
        method: 'GET',
        success: function (data) {
          // set new data to model for refreshing the page
          main.set('model', data);
        },
        error: function () {}
      });
    }

  });
});
;define('spartan-console/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define('spartan-console/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define('spartan-console/helpers/app-version', ['exports', 'spartan-console/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('spartan-console/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define('spartan-console/helpers/check-delete-button', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.checkDeleteButton = checkDeleteButton;
  function checkDeleteButton(data) {

    var className = '';

    if (data[0] === 'R') {
      className = 'inactiveDeleteButton';
    } else {
      className = '';
    }

    return className;
  }

  exports.default = Ember.Helper.helper(checkDeleteButton);
});
;define('spartan-console/helpers/color-item-state', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colorItemState = colorItemState;
  function colorItemState(status) {
    // check status and return right color
    if (status[0] === 'pending') {
      return Ember.String.htmlSafe("color: red");
    } else {
      return Ember.String.htmlSafe("color: green");
    }
  }

  exports.default = Ember.Helper.helper(colorItemState);
});
;define('spartan-console/helpers/color-log-level', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.colorLogLevel = colorLogLevel;
  function colorLogLevel(status) {
    if (status[0] === 'ERROR') {
      return Ember.String.htmlSafe("color: red");
    } else {
      return Ember.String.htmlSafe("color: #f4b042");
    }
  }

  exports.default = Ember.Helper.helper(colorLogLevel);
});
;define('spartan-console/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define('spartan-console/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define('spartan-console/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
;define('spartan-console/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define('spartan-console/helpers/froala-method', ['exports', 'ember-froala-editor/helpers/froala-method'], function (exports, _froalaMethod) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _froalaMethod.default;
    }
  });
  Object.defineProperty(exports, 'froalaMethod', {
    enumerable: true,
    get: function () {
      return _froalaMethod.froalaMethod;
    }
  });
});
;define('spartan-console/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define('spartan-console/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define('spartan-console/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define('spartan-console/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define('spartan-console/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define('spartan-console/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define('spartan-console/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define('spartan-console/helpers/menu-item-title-decorator', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.menuItemTitleDecorator = menuItemTitleDecorator;
  function menuItemTitleDecorator(item) {

    var title = item[0];

    title = title.replace('-', ' ');

    return title;
  }

  exports.default = Ember.Helper.helper(menuItemTitleDecorator);
});
;define('spartan-console/helpers/merged-hash', ['exports', 'ember-froala-editor/helpers/merged-hash'], function (exports, _mergedHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mergedHash.default;
    }
  });
  Object.defineProperty(exports, 'mergedHash', {
    enumerable: true,
    get: function () {
      return _mergedHash.mergedHash;
    }
  });
});
;define('spartan-console/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define('spartan-console/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define('spartan-console/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define('spartan-console/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define('spartan-console/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('spartan-console/helpers/set-published-button-appearence', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setPublishedButtonAppearence = setPublishedButtonAppearence;
  function setPublishedButtonAppearence(data) {
    var value = data[0];

    var color = '';

    if (value === 'R') {
      return Ember.String.htmlSafe('background-color: #aaa');
    } else {
      return Ember.String.htmlSafe('background-color: #F44336');
    }
  }

  exports.default = Ember.Helper.helper(setPublishedButtonAppearence);
});
;define('spartan-console/helpers/set-published-button-text', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setPublishedButtonText = setPublishedButtonText;
  function setPublishedButtonText(data) {
    var value = data[0];

    var text = '';

    if (value === 'R') {
      text = 'PUBLISHED';
    } else {
      text = 'PUBLISH';
    }

    return text;
  }

  exports.default = Ember.Helper.helper(setPublishedButtonText);
});
;define('spartan-console/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('spartan-console/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define('spartan-console/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define('spartan-console/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'spartan-console/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('spartan-console/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('spartan-console/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define('spartan-console/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('spartan-console/initializers/export-application-global', ['exports', 'spartan-console/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("spartan-console/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('spartan-console/mixins/default-attrs', ['exports', 'virtual-each/mixins/default-attrs'], function (exports, _defaultAttrs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultAttrs.default;
    }
  });
});
;define('spartan-console/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
;define('spartan-console/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('spartan-console/router', ['exports', 'spartan-console/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('statistic');
    this.route('apps');
    this.route('add-app');
    this.route('edit-app');
    this.route('packages');
    this.route('add-package');
    this.route('edit-package');
    this.route('workout-plans');
    this.route('add-workout-plan');
    this.route('edit-workout-plan');
    this.route('nutrition-plans');
    this.route('add-nutrition-plan');
    this.route('edit-nutrition-plan');
    this.route('workouts');
    this.route('add-workouts');
    this.route('edit-workout');
    this.route('exercises');
    this.route('add-exercise');
    this.route('edit-exercise');
    this.route('recipes');
    this.route('add-recipe');
    this.route('edit-recipe');
    this.route('tags');
    this.route('notifications');
    this.route('users');
    this.route('languages');
    this.route('add-notification');
    this.route('monolog');
    this.route('policies');
    this.route('add-policy');
    this.route('admins');
    this.route('settings');
    this.route('loading');
    this.route('edit-policy');
  });

  exports.default = Router;
});
;define('spartan-console/routes/add-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var packageList = this.get('ajax').request("/packages/list?from=0&limit=1000", { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        packagesList: packageList
      });
    }

  });
});
;define('spartan-console/routes/add-exercise', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData
      });
    }
  });
});
;define('spartan-console/routes/add-notification', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('spartan-console/routes/add-nutrition-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var recipesData = this.get('ajax').request('/recepies/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        recipes: recipesData
      });
    }

  });
});
;define('spartan-console/routes/add-package', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var nutritionPlans = this.get('ajax').request('/nutritionplans/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      var workoutPlans = this.get('ajax').request('/workoutplans/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        nutplans: nutritionPlans,
        worplans: workoutPlans
      });
    }
  });
});
;define('spartan-console/routes/add-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('spartan-console/routes/add-recipe', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en' + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData
      });
    }
  });
});
;define('spartan-console/routes/add-workout-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var workoutsData = this.get('ajax').request('/workouts/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        workouts: workoutsData
      });
    }
  });
});
;define('spartan-console/routes/add-workouts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags?lang=en' + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var exercisesData = this.get('ajax').request('/exercises/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        exercises: exercisesData
      });
    }

  });
});
;define('spartan-console/routes/admins', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/admins', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/apps', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/apps', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/edit-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({ // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');
      var app = sessionStorage.getItem("app");

      var tagsData = this.get('ajax').request("/tags?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var nutritionPlans = this.get('ajax').request("/nutritionplans?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var workoutPlans = this.get('ajax').request("/workoutplans?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var exercises = this.get('ajax').request("/exercises?state=" + state + "&lang=en&app=" + app, { method: 'GET' });

      var packageList = this.get('ajax').request("/packages/list?from=0&limit=1000", { method: 'GET' });

      var appPackages = this.get('ajax').request('/apps?id=' + id, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        nutplans: nutritionPlans,
        worplans: workoutPlans,
        exercises: exercises,
        packagesList: packageList,
        packages: appPackages
      });
    }

  });
});
;define('spartan-console/routes/edit-exercise', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');

      var tagsData = this.get('ajax').request('/tags?lang=' + lang + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var exerciseData = this.get('ajax').request('/exercises?id=' + id + '&lang=' + lang + '&state=' + state, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        exercise: exerciseData
      });
    }

  });
});
;define('spartan-console/routes/edit-nutrition-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');

      var tagsData = this.get('ajax').request('/tags?lang=' + lang + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var recipesData = this.get('ajax').request('/recepies/list?from=0&limit=1000&state=R&lang=' + lang, { method: 'GET' });

      var planData = this.get('ajax').request('/nutritionplans?id=' + id + '&lang=' + lang + '&state=' + state, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        recipes: recipesData,
        plan: planData
      });
    }

  });
});
;define('spartan-console/routes/edit-package', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');

      var tagsData = this.get('ajax').request('/tags?lang=' + lang + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var nutritionPlans = this.get('ajax').request('/nutritionplans/list?from=0&limit=1000&state=R&lang=' + lang, { method: 'GET' });

      var workoutPlans = this.get('ajax').request('/workoutplans/list?from=0&limit=1000&state=R&lang=' + lang, { method: 'GET' });

      var packageData = this.get('ajax').request('/packages?id=' + id + '&lang=' + lang + '&state=' + state, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        nutplans: nutritionPlans,
        worplans: workoutPlans,
        package: packageData
      });
    }
  });
});
;define('spartan-console/routes/edit-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {
      var id = sessionStorage.getItem('currentPolicy');

      var data = this.get('ajax').request('/policy?id=' + id, { method: 'GET' });

      return data;
    },

    actions: {
      willTransition() {}
    }

  });
});
;define('spartan-console/routes/edit-recipe', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');

      var tagsData = this.get('ajax').request('/tags?lang=' + lang + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var recipeData = this.get('ajax').request('/recepies?id=' + id + '&lang=' + lang + '&state=' + state, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        recipe: recipeData
      });
    }
  });
});
;define('spartan-console/routes/edit-workout-plan', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');

      var tagsData = this.get('ajax').request('/tags?lang=' + lang + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var workoutsData = this.get('ajax').request('/workouts/list?from=0&limit=1000&state=R&lang=' + lang, { method: 'GET' });

      var planData = this.get('ajax').request('/workoutplans?id=' + id + '&lang=' + lang + '&state=' + state, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        workouts: workoutsData,
        plan: planData
      });
    }

  });
});
;define('spartan-console/routes/edit-workout', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    // set properties and hooks

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var id = sessionStorage.getItem('idToEdit');
      var state = sessionStorage.getItem('state');
      var lang = sessionStorage.getItem('lang');

      var tagsData = this.get('ajax').request('/tags?lang=' + lang + '&state=R', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      var exercisesData = this.get('ajax').request('/exercises/list?from=0&limit=1000&state=R&lang=en', { method: 'GET' });

      var workoutData = this.get('ajax').request('/workouts?id=' + id + '&lang=' + lang + '&state=' + state, { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData,
        exercises: exercisesData,
        workout: workoutData
      });
    }

  });
});
;define('spartan-console/routes/exercises', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/exercises/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set route hooks

    // at start of the application default route is index, but with this hook we redirect application to the statistic route
    beforeModel() {

      // on opening of the app set current page
      sessionStorage.setItem('currentPage', 'statistic');

      // redirect to the statistic page
      this.replaceWith('/statistic');
    }

  });
});
;define('spartan-console/routes/languages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/language', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/loading', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('spartan-console/routes/monolog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/monolog/logs?type=ADMIN', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/notifications', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('spartan-console/routes/nutrition-plans', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/nutritionplans/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/packages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/packages/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/policies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/policy', { method: 'GET' });

      data.then(function (result) {
        var id = result.data[0].id;
        sessionStorage.setItem('currentPolicy', id);
      });

      return data;
    }

  });
});
;define('spartan-console/routes/recipes', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/recepies/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/statistic', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/statistics', { method: 'GET' });

      return data;
    }

  });
});
;define('spartan-console/routes/tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var tagsData = this.get('ajax').request('/tags/list?from=0&limit=1000', { method: 'GET' });

      var languagesData = this.get('ajax').request('/language', { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        // tags
        tags: tagsData,
        languages: languagesData
      });
    }
  });
});
;define('spartan-console/routes/users', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    ajax: Ember.inject.service(),

    // return dummy data
    model() {

      var data = [{
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxxBwAg0NugCpITcIRuOUfGpX8JkSgEwQD0I54R3eu4QqgCB3I",
        "name": "Mel Gibson",
        "location": "USA"
      }, {
        "thumbnail": "https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-all-about-face.jpg",
        "name": "Angela Merkel",
        "location": "Germany"
      }, {
        "thumbnail": "http://img2.thejournal.ie/inline/2470754/original?width=428&version=2470754",
        "name": "Grigor Dimitrov",
        "location": "Bulgaria"
      }, {
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVobmPg_hbA2tK9kzLwPXnJxaQ-yBpYsbLtAWBz9fygoP8HfnI",
        "name": "Zulfo Muhovic",
        "location": "Bosnia"
      }];

      return data;
    }

  });
});
;define('spartan-console/routes/workout-plans', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/workoutplans/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/routes/workouts', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/workouts/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});
;define('spartan-console/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ajax.default.extend({
    host: 'http://staging.admin.diamondappgroup.com' // 'http://spartan-admin:8888'   http://staging.admin.diamondappgroup.com
  });
});
;define('spartan-console/services/constants', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({

    sniffer: Ember.inject.service('sniffer'),

    webkit: Ember.computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty(name) {
      return this.get('webkit') ? `-webkit-${name.charAt(0)}${name.substring(1)}` : name;
    },

    CSS: Ember.computed('webkit', function () {
      let webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: `transitionend${webkit ? ' webkitTransitionEnd' : ''}`,
        ANIMATIONEND: `animationend${webkit ? ' webkitAnimationEnd' : ''}`,

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: Ember.Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
;define('spartan-console/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
;define('spartan-console/services/paper-theme', ['exports', 'ember-paper/services/paper-theme'], function (exports, _paperTheme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTheme.default;
    }
  });
});
;define('spartan-console/services/paper-toaster', ['exports', 'ember-paper/services/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define('spartan-console/services/sniffer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* globals FastBoot */
  let isString = function (value) {
    return typeof value === 'string';
  };

  let lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  let toInt = function (str) {
    return parseInt(str, 10);
  };

  exports.default = Ember.Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: Ember.computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init() {
      this._super(...arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      let _document = document;
      let _window = window;

      this.setProperties({
        _document,
        _window
      });

      let bodyStyle = _document.body && _document.body.style;
      let vendorPrefix, match;
      let vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      let transitions = false;
      let animations = false;

      if (bodyStyle) {
        for (let prop in bodyStyle) {
          match = vendorRegex.exec(prop);
          if (match) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || `${vendorPrefix}Transition` in bodyStyle);
        animations = !!('animation' in bodyStyle || `${vendorPrefix}Animation` in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }

  });
});
;define('spartan-console/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define('spartan-console/services/util', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let Util = Ember.Service.extend({

    // Disables scroll around the passed element.
    disableScrollAround() {
      let util = this;
      let $document = Ember.$(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      let { body } = $document.get(0);
      let restoreBody = disableBodyScroll();
      let restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        let zIndex = 50;
        let scrollMask = Ember.$(`<div class="md-scroll-mask" style="z-index: ${zIndex}">
          <div class="md-scroll-mask-bar"></div>
        </div>`);
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav() {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          /* if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          } */
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        let htmlNode = body.parentNode;
        let restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        let restoreBodyStyle = body.getAttribute('style') || '';
        let scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        let { clientWidth } = body;

        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: `${-scrollOffset}px`
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (let key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling() {
      let method = this.disableScrollAround._enableScrolling;
      method && method();
    },

    /*
     * supplant() method from Crockford's `Remedial Javascript`
     * Equivalent to use of $interpolate; without dependency on
     * interpolation symbols and scope. Note: the '{<token>}' can
     * be property names, property chains, or array indices.
     */
    supplant(template, values, pattern) {
      pattern = pattern || /\{([^{}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        let p = b.split('.');
        let r = values;
        try {
          for (let s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },
    nextTick: function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[`${prefixes[i++]}equestAnimationFrame`];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    }(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports.default = Util;
});
;define("spartan-console/templates/add-app", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "od+WW76b", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-app-tab-component\",null,[[\"callSave\",\"currentTab\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],[23,[\"currentTab\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set app basic info \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"identifier\",\"flex-50 paperInputs\",\"Identifier\",\"Enter identifier\",[23,[\"identifier\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"identifier\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Package container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"pack\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set app packages \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"packages-list-component\",null,[[\"list\"],[[23,[\"model\",\"packagesList\",\"data\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-app.hbs" } });
});
;define("spartan-console/templates/add-exercise", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JCSmSSlc", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-component\",null,[[\"callSave\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set exercise basic info \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"exerciseInfoLeft\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n            \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[1,[21,\"exercise-difficulty-component\"],false],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\\n   \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set exercise tags \"],[10],[0,\"\\n\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set exercise media \"],[10],[0,\"\\n\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Exercise image\",\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-muscle-image-component\",null,[[\"oldImage\"],[\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-media-component\",null,[[\"oldImage\"],[\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-exercise.hbs" } });
});
;define("spartan-console/templates/add-notification", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LIjAASh1", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Add notification\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-notification.hbs" } });
});
;define("spartan-console/templates/add-nutrition-plan", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Hg+OlYNF", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-plans-tab-component\",null,[[\"callSave\",\"tabName\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"RECIPES\"]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan tags \"],[10],[0,\"\\n\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan image \"],[10],[0,\"\\n\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"data\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan recipes \"],[10],[0,\"\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"recipes-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"recipes\",\"data\"]],[23,[\"selectedRecipes\"]],\"add\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-nutrition-plan.hbs" } });
});
;define("spartan-console/templates/add-package", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4zzPQmHQ", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-package-component\",null,[[\"callSave\",\"tabName\",\"currentTab\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\",[23,[\"currentTab\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set package image \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"plans\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package plans \"],[10],[0,\"\\n\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"nut\"],[11,\"class\",\"plansList\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"nutplans\",\"data\"]],[23,[\"selectedNutritionPlans\"]],\"add\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"id\",\"wor\"],[11,\"class\",\"plansList\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"worplans\",\"data\"]],[23,[\"selectedWorkoutPlans\"]],\"add\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n    \"],[10],[0,\"\\n\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-package.hbs" } });
});
;define("spartan-console/templates/add-policy", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q/5TE2v5", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"policyHeading\"],[9],[0,\"Policy title: \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"titleContainer\"],[11,\"class\",\"addEditPolicyPage\"],[9],[0,\"\\n    \"],[1,[21,\"pell-editor\"],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"policyHeading\"],[9],[0,\"Policy body: \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"bodyContainer\"],[11,\"class\",\"addEditPolicyPage\"],[9],[0,\"\\n    \"],[1,[21,\"pell-editor\"],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"savePolicy\"]],[9],[0,\"\\n  \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"content-save\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-policy.hbs" } });
});
;define("spartan-console/templates/add-recipe", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/L+EQQyb", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-component\",null,[[\"callSave\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set recipe basic info \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n          \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"title\",\"flex-50 paperInputs\",\"Title\",\"Enter title\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set recipe tags \"],[10],[0,\"\\n\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set recipe image \"],[10],[0,\"\\n\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Recipe image\",\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-recipe.hbs" } });
});
;define("spartan-console/templates/add-workout-plan", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I8B9h2qk", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-plans-tab-component\",null,[[\"callSave\",\"tabName\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\"]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan image \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",\"/assets/pictures/image-placeholder.png\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"data\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan workouts \"],[10],[0,\"\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[1,[27,\"workouts-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"workouts\",\"data\"]],[23,[\"selectedWorkouts\"]],\"add\"]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-workout-plan.hbs" } });
});
;define("spartan-console/templates/add-workouts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "aozSfEVD", "block": "{\"symbols\":[\"number\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-workouts-tab-component\",null,[[\"callSave\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set workout basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"title\",\"flex-50 paperInputs\",\"Title\",\"Enter title\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set workout regular tags \"],[10],[0,\"\\n\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedRegularTags\"]]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set workout equipment tags \"],[10],[0,\"\\n\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedEquipmentTags\",\"action\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedEquipmentTags\"]],true]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"round\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set workout rounds \"],[10],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"id\",\"roundsContainer\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"rounds\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"round-component\",null,[[\"roundNumber\",\"currentRoundNumber\",\"openedExerciseDialog\"],[[22,1,[]],[23,[\"currentRoundNumber\"]],[23,[\"opened\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n      \"],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"addNewRound\"],[3,\"action\",[[22,0,[]],\"addNewRound\"]],[9],[0,\"\\n  \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set exercises dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"exercisesDialog\"],[11,\"class\",\"dialogWrapper\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"exercises-dialog-component\",null,[[\"opened\",\"exercises\",\"selectedExercises\",\"callAddExercises\"],[[23,[\"openedExerciseDialog\"]],[23,[\"model\",\"exercises\",\"data\"]],[23,[\"selectedExercises\"]],[27,\"action\",[[22,0,[]],\"addExercisesToTheRound\"],null]]]],false],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/add-workouts.hbs" } });
});
;define("spartan-console/templates/admins", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2Sma9ALz", "block": "{\"symbols\":[\"admin\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"adminPage\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Admins\"],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"admin-item-component\",null,[[\"item\",\"editText\",\"currentId\",\"callEditAdmin\"],[[22,1,[]],[23,[\"editText\"]],[23,[\"currentAdminId\"]],[27,\"action\",[[22,0,[]],\"openEditAdminDialog\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"openAddAdminDialog\"]],[9],[0,\"\\n    \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[\"This will delete selected admin.\",[27,\"action\",[[22,0,[]],\"deleteAdmin\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set admin dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"adminDialog\"],[11,\"class\",\"dialogWrapper adminDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"admin-dialog-component\",null,[[\"heading\",\"callAddAdmin\",\"callEditAdmin\"],[[23,[\"dialogHeading\"]],[27,\"action\",[[22,0,[]],\"addAdmin\"],null],[27,\"action\",[[22,0,[]],\"editAdmin\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/admins.hbs" } });
});
;define("spartan-console/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Qo/GaCcA", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n  \"],[2,\" upload image element \"],[0,\"\\n  \"],[7,\"input\"],[11,\"id\",\"inputFileElement\"],[12,\"onchange\",[27,\"action\",[[22,0,[]],\"loadFile\"],null]],[11,\"type\",\"file\"],[9],[10],[0,\"\\n\\n  \"],[2,\" upload muscle image element \"],[0,\"\\n  \"],[7,\"input\"],[11,\"id\",\"inputMuscleFileElement\"],[12,\"onchange\",[27,\"action\",[[22,0,[]],\"loadMuscleImageFile\"],null]],[11,\"type\",\"file\"],[9],[10],[0,\"\\n\\n  \"],[2,\" upload media element \"],[0,\"\\n  \"],[7,\"input\"],[11,\"id\",\"inputMediaFileElement\"],[12,\"onchange\",[27,\"action\",[[22,0,[]],\"loadMediaImageFile\"],null]],[11,\"multiple\",\"\"],[11,\"accept\",\".gif,.mp4, .mkv\"],[11,\"type\",\"file\"],[9],[10],[0,\"\\n\\n  \"],[2,\" Log in box \"],[0,\"\\n  \"],[1,[21,\"login-box-component\"],false],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"outletWrapper\"],[3,\"action\",[[22,0,[]],\"closeDropdowns\"]],[9],[0,\"\\n\\n  \"],[2,\" Progress bar \"],[0,\"\\n  \"],[1,[21,\"progress-bar-component\"],false],[0,\"\\n\\n  \"],[2,\" Set header component to be shown on every page of the application \"],[0,\"\\n  \"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"closeDropdowns\"]],[9],[0,\"\\n    \"],[1,[27,\"header-component\",null,[[\"clickedItem\"],[[23,[\"currentPage\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\\n  \"],[2,\" Set menu component to be shown on every page of the application \"],[0,\"\\n  \"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"closeDropdowns\"]],[9],[0,\"\\n    \"],[1,[27,\"menu-component\",null,[[\"clickedItem\"],[[23,[\"currentPage\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n\\n\\n  \"],[2,\" Toast \"],[0,\"\\n  \"],[1,[27,\"toast-component\",null,[[\"toastText\"],[[23,[\"textForToast\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"dialogOverlay\"],[9],[10],[0,\"\\n\\n  \"],[2,\" Menu overlay \"],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"menuOverlay\"],[3,\"action\",[[22,0,[]],\"closeOverlayAndMenu\"]],[9],[10],[0,\"\\n\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/application.hbs" } });
});
;define("spartan-console/templates/apps", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7Wh8/xWF", "block": "{\"symbols\":[\"app\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"appsPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"app-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentAppId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-app\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/apps.hbs" } });
});
;define("spartan-console/templates/components/add-app-tab-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lUT8/E5S", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"addEditTab\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"basicTab\"],[11,\"class\",\"underlined\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"basicTab\"]],[9],[0,\" BASIC INFO \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"packagesTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"packagesTab\"]],[9],[0,\" PACKAGES \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"tabButton\"],[3,\"action\",[[22,0,[]],\"save\"]],[9],[0,\" Save \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/add-app-tab-component.hbs" } });
});
;define("spartan-console/templates/components/add-edit-apps-tab-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5C1egpmM", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"addEditTab\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"basicTab\"],[11,\"class\",\"underlined\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"basicTab\"]],[9],[0,\" BASIC INFO \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"packagesTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"packagesTab\"]],[9],[0,\" PACKAGES \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"nutplansTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"nutplansTab\"]],[9],[0,\" NUTRITION PLANS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"worplansTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"worplansTab\"]],[9],[0,\" WORKOUT PLANS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"exercisesTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"exercisesTab\"]],[9],[0,\" EXERCISES \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"tagsTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"tagsTab\"]],[9],[0,\" TAGS \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"tabButton\"],[3,\"action\",[[22,0,[]],\"save\"]],[9],[0,\" Save \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/add-edit-apps-tab-component.hbs" } });
});
;define("spartan-console/templates/components/add-edit-plans-tab-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Qwgt7H0p", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"addEditTab\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"basicTab\"],[11,\"class\",\"underlined\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"basicTab\"]],[9],[0,\" BASIC INFO \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"tagsTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"tagsTab\"]],[9],[0,\" TAGS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"imagesTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"imagesTab\"]],[9],[0,\" IMAGES \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"dataTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"dataTab\"]],[9],[0,\" \"],[1,[21,\"tabName\"],false],[0,\" \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"tabButton\"],[3,\"action\",[[22,0,[]],\"save\"]],[9],[0,\" Save \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/add-edit-plans-tab-component.hbs" } });
});
;define("spartan-console/templates/components/add-edit-tab-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "a461BKd+", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"addEditTab\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"basicTab\"],[11,\"class\",\"underlined\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"basicTab\"]],[9],[0,\" BASIC INFO \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"tagsTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"tagsTab\"]],[9],[0,\" TAGS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"imagesTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"imagesTab\"]],[9],[0,\" IMAGES \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"tabButton\"],[3,\"action\",[[22,0,[]],\"save\"]],[9],[0,\" Save \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/add-edit-tab-component.hbs" } });
});
;define("spartan-console/templates/components/add-edit-tab-package-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lu6Cu6iN", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"addEditTab\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"basicTab\"],[11,\"class\",\"underlined\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"basicTab\"]],[9],[0,\" BASIC INFO \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"tagsTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"tagsTab\"]],[9],[0,\" TAGS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"imagesTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"imagesTab\"]],[9],[0,\" IMAGES \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"nutplansTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"nutplansTab\"]],[9],[0,\" NUTRITION PLANS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"worplansTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"worplansTab\"]],[9],[0,\" WORKOUT PLANS \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"tabButton\"],[3,\"action\",[[22,0,[]],\"save\"]],[9],[0,\" Save \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/add-edit-tab-package-component.hbs" } });
});
;define("spartan-console/templates/components/add-edit-workouts-tab-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ecHqyKJ0", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"addEditTab\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabs\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"basicTab\"],[11,\"class\",\"underlined\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"basicTab\"]],[9],[0,\" BASIC INFO \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"tagsTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"tagsTab\"]],[9],[0,\" TAGS \"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"roundsTab\"],[3,\"action\",[[22,0,[]],\"changeTab\",\"roundsTab\"]],[9],[0,\" ROUNDS \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"tabButton\"],[3,\"action\",[[22,0,[]],\"save\"]],[9],[0,\" Save \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/add-edit-workouts-tab-component.hbs" } });
});
;define("spartan-console/templates/components/admin-dialog-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bkx9sbJW", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"tagDialogContainer\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[1,[21,\"heading\"],false],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n\\n    \"],[7,\"table\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"Email: \"],[10],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"input\"],[11,\"id\",\"adminEmailInput\"],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"Scope: \"],[10],[10],[0,\"\\n        \"],[7,\"td\"],[9],[1,[21,\"admin-filter-component\"],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n\\n    \"],[2,\" Dialog buttons \"],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"dialogButtonContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"cancelButton\"],[3,\"action\",[[22,0,[]],\"closeDialog\"]],[9],[0,\"Cancel\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"addButton\"],[3,\"action\",[[22,0,[]],\"do\"]],[9],[1,[21,\"buttonText\"],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/admin-dialog-component.hbs" } });
});
;define("spartan-console/templates/components/admin-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U6KBJMI1", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"adminFilter\"],[9],[0,\"\\n  \"],[7,\"p\"],[11,\"id\",\"adminFilterDefaultValue\"],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[0,\"Admin\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"adminFilterDropdown\"],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"adminFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/admin-filter-component.hbs" } });
});
;define("spartan-console/templates/components/admin-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g2OiZsbe", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[9],[0,\"\\n  \"],[7,\"tr\"],[11,\"class\",\"adminRow\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"id\",\"adminName\"],[11,\"class\",\"adminTd\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"id\",\"adminSurname\"],[11,\"class\",\"adminTd\"],[9],[1,[23,[\"item\",\"surname\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"id\",\"adminEmail\"],[11,\"class\",\"adminTd\"],[9],[1,[23,[\"item\",\"email\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"id\",\"adminScope\"],[11,\"class\",\"adminTd\"],[9],[1,[23,[\"item\",\"scope\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"id\",\"adminState\"],[11,\"class\",\"adminTd\"],[12,\"style\",[27,\"color-item-state\",[[23,[\"item\",\"state\"]]],null]],[9],[1,[23,[\"item\",\"state\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"id\",\"adminAction\"],[11,\"class\",\"adminTd\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/pencil.svg\"],[3,\"action\",[[22,0,[]],\"openEditAdminDialog\",[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[3,\"action\",[[22,0,[]],\"openDialog\",[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/admin-item-component.hbs" } });
});
;define("spartan-console/templates/components/app-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "uaLzbkbZ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n  \"],[7,\"table\"],[11,\"class\",\"appsTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"appsTitle\"],[9],[0,\"\\n        \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"appsIdentifier\"],[9],[1,[23,[\"item\",\"identifier\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[11,\"class\",\"appsAction\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n        \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\" />\"],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/app-item-component.hbs" } });
});
;define("spartan-console/templates/components/confirmation-dialog-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "F3RGg9ep", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialogContainer\"],[9],[0,\"\\n  \"],[2,\" Dialg heading \"],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"dialogHeading\"],[9],[0,\"Are you sure?\"],[10],[0,\"\\n\\n  \"],[2,\" Dialog message \"],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"confirmationMessage\"],[9],[1,[21,\"item\"],false],[10],[0,\"\\n\\n  \"],[2,\" Dialog buttons \"],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"dialogButtonContainer\"],[9],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"cancelButton\"],[3,\"action\",[[22,0,[]],\"closeDialog\"]],[9],[0,\"No\"],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"addButton\"],[3,\"action\",[[22,0,[]],\"do\"]],[9],[0,\"Yes\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/confirmation-dialog-component.hbs" } });
});
;define("spartan-console/templates/components/edit-round-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "irJJGrzK", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"roundComponent\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"roundHeading\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"roundName\"],[9],[0,\"Round \"],[1,[21,\"roundNumber\"],false],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"addExercise\"],[3,\"action\",[[22,0,[]],\"openExercisesDialog\"]],[9],[0,\"ADD EXERCISES + \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[12,\"id\",[28,[\"exercises\",[21,\"roundNumber\"]]]],[11,\"class\",\"roundExercises\"],[9],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"roundInfo\"],[9],[0,\"\\n\\n    \"],[7,\"p\"],[11,\"class\",\"roundInfoHeading\"],[9],[0,\"Round Info\"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"roundInfoDropdowns\"],[9],[0,\"\\n      \"],[1,[27,\"workout-type-filter-component\",null,[[\"number\"],[[23,[\"roundNumber\"]]]]],false],[0,\"\\n      \"],[1,[27,\"workout-behavior-filter-component\",null,[[\"number\"],[[23,[\"roundNumber\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"roundInfoDurations\"],[9],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"class\",\"label\",\"type\",\"value\",\"onChange\"],[\"flex-40 duration\",\"Duration\",\"number\",[23,[\"duration\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"duration\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"class\",\"label\",\"type\",\"value\",\"onChange\"],[\"flex-40 restduration\",\"Rest\",\"number\",[23,[\"restduration\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"restduration\"]]],null]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1],[0,\"\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/edit-round-component.hbs" } });
});
;define("spartan-console/templates/components/exercise-difficulty-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5ZTE+qDr", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"difficultyFilter\"],[9],[0,\"\\n  \"],[7,\"p\"],[11,\"id\",\"difficultyFilterDefaultValue\"],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[0,\"Medium\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"difficultyFilterDropdown\"],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"difficultyFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/exercise-difficulty-component.hbs" } });
});
;define("spartan-console/templates/components/exercise-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7g2Zhn9b", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"exerciseTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"exerciseThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"exerciseTitle\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"exerciseState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"exerciseAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/exercise-item-component.hbs" } });
});
;define("spartan-console/templates/components/exercise-list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gZtGskZC", "block": "{\"symbols\":[\"exercise\",\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"list\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"id\"]]]]],[11,\"class\",\"recipeListItem\"],[3,\"action\",[[22,0,[]],\"select\",[22,1,[\"id\"]]]],[9],[0,\"\\n    \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/exercise-list-component.hbs" } });
});
;define("spartan-console/templates/components/exercises-dialog-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ve6aU9Hm", "block": "{\"symbols\":[\"exercise\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"exercisesDialogContainer\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Choose exercises\"],[10],[0,\"\\n\\n  \"],[2,\"<input id=\\\"exercisesDialogSearcher\\\" type=\\\"text\\\"/>\"],[0,\"\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"dialogExercisesContainer\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"exercises\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"exercisePreview\"],[9],[0,\"\\n        \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"name\"]]]]],[11,\"class\",\"selectedExerciseOverlay\"],[3,\"action\",[[22,0,[]],\"selectExercise\",[22,1,[\"name\"]],[22,1,[\"id\"]],[22,1,[\"thumbnail\"]]]],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"src\",\"/assets/icons/check.svg\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnail\"]]]]],[11,\"class\",\"exerciseThumbnail\"],[3,\"action\",[[22,0,[]],\"selectExercise\",[22,1,[\"name\"]],[22,1,[\"id\"]],[22,1,[\"thumbnail\"]]]],[9],[10],[0,\"\\n        \"],[7,\"p\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"exerciseDialogButtons\"],[9],[0,\"\\n    \"],[7,\"span\"],[3,\"action\",[[22,0,[]],\"exitDialog\"]],[9],[0,\"CANCEL\"],[10],[0,\"\\n    \"],[7,\"span\"],[3,\"action\",[[22,0,[]],\"addExercisesToTheRound\"]],[9],[0,\"OK\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/exercises-dialog-component.hbs" } });
});
;define("spartan-console/templates/components/header-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f4vyb4Bu", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"header\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"id\",\"menuIcon\"],[11,\"src\",\"assets/icons/menu.svg\"],[3,\"action\",[[22,0,[]],\"toggleMenu\"]],[9],[10],[0,\"\\n    \"],[7,\"p\"],[11,\"id\",\"pageTitle\"],[9],[1,[27,\"menu-item-title-decorator\",[[23,[\"clickedItem\"]]],null],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"dropdownsContainer\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"dropdownIcons\"],[11,\"src\",\"/assets/icons/user.svg\"],[3,\"action\",[[22,0,[]],\"toggleUserDropdown\"],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"dropdownIcons\"],[11,\"src\",\"/assets/icons/notifications.svg\"],[3,\"action\",[[22,0,[]],\"toggleNotificationsDropdown\"],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n\\n      \"],[1,[21,\"user-dropdown-component\"],false],[0,\"\\n      \"],[1,[21,\"notifications-dropdown-component\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/header-component.hbs" } });
});
;define("spartan-console/templates/components/language-dialog-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lf24THWU", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"languageDialogContainer\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"Add language\"],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n\\n    \"],[7,\"table\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"Name: \"],[10],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"input\"],[11,\"id\",\"languageText\"],[11,\"type\",\"text\"],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"ISO: \"],[10],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"input\"],[11,\"id\",\"isoText\"],[11,\"type\",\"text\"],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n\\n    \"],[2,\" Dialog buttons \"],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"dialogButtonContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"cancelButton\"],[3,\"action\",[[22,0,[]],\"closeDialog\"]],[9],[0,\"Cancel\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"addButton\"],[3,\"action\",[[22,0,[]],\"do\"]],[9],[0,\"Save\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/language-dialog-component.hbs" } });
});
;define("spartan-console/templates/components/language-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LqJpFYfA", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"languageFilter\"],[9],[0,\"\\n  \"],[7,\"p\"],[11,\"id\",\"languageFilterDefaultValue\"],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[0,\"English\"],[10],[0,\"\\n\\n  \"],[7,\"span\"],[11,\"id\",\"languageHiddenValue\"],[11,\"style\",\"display: none;\"],[9],[1,[21,\"isoCode\"],false],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"languageFilterDropdown\"],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"languageFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/language-filter-component.hbs" } });
});
;define("spartan-console/templates/components/language-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2QODlzC+", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"languageItem\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"isoElement\"],[9],[1,[23,[\"item\",\"iso\"]],false],[10],[0,\"\\n  \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[3,\"action\",[[22,0,[]],\"openDialog\",[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/language-item-component.hbs" } });
});
;define("spartan-console/templates/components/loader-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pljDQqxm", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"showbox\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"loader\"],[9],[0,\"\\n    \"],[7,\"svg\"],[11,\"class\",\"circular\"],[11,\"viewBox\",\"25 25 50 50\"],[9],[0,\"\\n      \"],[7,\"circle\"],[11,\"class\",\"path\"],[11,\"cx\",\"50\"],[11,\"cy\",\"50\"],[11,\"r\",\"20\"],[11,\"fill\",\"none\"],[11,\"stroke-width\",\"2\"],[11,\"stroke-miterlimit\",\"10\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/loader-component.hbs" } });
});
;define("spartan-console/templates/components/login-box-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4Y2KX1uy", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"loginBoxDialogOverlay\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"loginBox\"],[9],[0,\"\\n  \"],[7,\"img\"],[11,\"src\",\"assets/pictures/login_image.png\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"loginBoxText\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"SpartanApps\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Admin Console\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"loginButtonsContainer\"],[9],[0,\"\\n    \"],[2,\"<div id=\\\"facebookLoginButton\\\" class=\\\"loginButton\\\" {{action 'logIn'}}>\"],[0,\"\\n    \"],[2,\"<img class=\\\"loginButtonIcons\\\" src=\\\"assets/icons/facebook.svg\\\" /><span>Log in with Facebook</span>\"],[0,\"\\n    \"],[2,\"</div>\"],[0,\"\\n    \"],[2,\"<div id=\\\"googleLoginButton\\\" class=\\\"loginButton\\\" {{action 'logIn'}}>\"],[0,\"\\n    \"],[2,\"<img class=\\\"loginButtonIcons\\\" src=\\\"assets/icons/google.svg\\\" /><span>Log in with Google</span>\"],[0,\"\\n    \"],[2,\"</div>\"],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"demoLogin\"],[9],[0,\"\\n      \"],[7,\"input\"],[11,\"id\",\"username\"],[11,\"placeholder\",\"Username\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n      \"],[7,\"input\"],[11,\"id\",\"password\"],[11,\"placeholder\",\"Password\"],[11,\"type\",\"password\"],[9],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"id\",\"demoLoginButton\"],[3,\"action\",[[22,0,[]],\"logIn\"]],[9],[0,\"Log in\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/login-box-component.hbs" } });
});
;define("spartan-console/templates/components/menu-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "EFwf0THU", "block": "{\"symbols\":[\"item\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"menuContainer\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"menuLogoContainer\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"assets/pictures/spartan-logo.svg\"],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\" SpartanApps \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"menuItemsContainer\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"menuItems\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[22,1,[\"link\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"link-to\",[[22,1,[\"title\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"title\"]]]]],[11,\"class\",\"menuItem\"],[3,\"action\",[[22,0,[]],\"setCurrentPage\",[22,1,[\"title\"]]]],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"icon\"]]]]],[11,\"class\",\"menuItemIcon\"],[9],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\" \"],[1,[27,\"menu-item-title-decorator\",[[22,1,[\"title\"]]],null],false],[0,\" \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n          \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"title\"]]]]],[11,\"class\",\"menuItem\"],[3,\"action\",[[22,0,[]],\"toggleMenuSide\"]],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"icon\"]]]]],[11,\"class\",\"menuItemIcon\"],[9],[10],[0,\"\\n            \"],[7,\"p\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n          \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\\n\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/menu-component.hbs" } });
});
;define("spartan-console/templates/components/monolog-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9dMTfF/x", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"monologFilter\"],[9],[0,\"\\n  \"],[7,\"p\"],[11,\"id\",\"monologFilterDefaultValue\"],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[1,[21,\"defaultFilter\"],false],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"monologFilterDropdown\"],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"monologFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/monolog-filter-component.hbs" } });
});
;define("spartan-console/templates/components/monolog-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0vSbB0GD", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"logsTable\"],[9],[0,\"\\n\\n  \"],[2,\" Set log values\"],[0,\"\\n  \"],[7,\"tr\"],[11,\"class\",\"logsInTable\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"level\"],[12,\"style\",[27,\"color-log-level\",[[23,[\"item\",\"level\"]]],null]],[9],[1,[23,[\"item\",\"level\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"date\"],[9],[1,[23,[\"item\",\"date\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"message\"],[9],[0,\"\\n      \"],[7,\"div\"],[9],[1,[23,[\"item\",\"message\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"action\"],[9],[0,\"\\n      \"],[2,\" Open appropriate dialog on click \"],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"assets/icons/delete.svg\"],[3,\"action\",[[22,0,[]],\"openDialog\",[23,[\"item\",\"date\"]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/monolog-item-component.hbs" } });
});
;define("spartan-console/templates/components/notifications-dropdown-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gRG6xj4u", "block": "{\"symbols\":[\"item\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"notificationsDropdown\"],[11,\"class\",\"arrow_box\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"notifications\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"notificationsItem\"],[3,\"action\",[[22,0,[]],\"stopPropagation\"],[[\"bubbles\"],[false]]],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Test \"],[1,[22,1,[]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/notifications-dropdown-component.hbs" } });
});
;define("spartan-console/templates/components/nutritionplan-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qpHHSRuY", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"planTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planTitle\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/nutritionplan-item-component.hbs" } });
});
;define("spartan-console/templates/components/package-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yp1A2N9v", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"packagesTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"packagesThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"packagesTitle\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"packagesState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"packagesAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/package-item-component.hbs" } });
});
;define("spartan-console/templates/components/packages-list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HM3qF4Z1", "block": "{\"symbols\":[\"package\",\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"list\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"id\"]]]]],[11,\"class\",\"packageListItem\"],[3,\"action\",[[22,0,[]],\"select\",[22,1,[\"id\"]]]],[9],[0,\"\\n    \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"skuWrapper\"],[3,\"action\",[[22,0,[]],\"disableSelectingPackage\"],[[\"bubbles\"],[false]]],[9],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[[22,1,[\"id\"]],\"flex-80 paperInputs sku\",\"Sku\",\"Enter sku\",[22,1,[\"sku\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,1,[\"sku\"]]],null]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/packages-list-component.hbs" } });
});
;define("spartan-console/templates/components/paper-fab-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nk1bT2X4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"if\",[[23,[\"page\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"link-to\",[[23,[\"page\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"id\",\"paperFab\"],[9],[0,\"\\n      \"],[2,\" Set given icon value \"],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[\"assets/icons/\",[21,\"icon\"],\".svg\"]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"paperFab\"],[9],[0,\"\\n      \"],[2,\" Set given icon value \"],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[\"assets/icons/\",[21,\"icon\"],\".svg\"]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/paper-fab-component.hbs" } });
});
;define("spartan-console/templates/components/plans-list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZDXipBvw", "block": "{\"symbols\":[\"plan\",\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"list\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"id\"]]]]],[11,\"class\",\"recipeListItem\"],[3,\"action\",[[22,0,[]],\"select\",[22,1,[\"id\"]]]],[9],[0,\"\\n    \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/plans-list-component.hbs" } });
});
;define("spartan-console/templates/components/policy-body-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cs26W90S", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"policyBody\"],[9],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/policy-body-component.hbs" } });
});
;define("spartan-console/templates/components/policy-list-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xsgsYVgX", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"p\"],[12,\"id\",[28,[[23,[\"item\",\"id\"]]]]],[3,\"action\",[[22,0,[]],\"changePolicy\",[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/policy-list-item-component.hbs" } });
});
;define("spartan-console/templates/components/progress-bar-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JGaHZVZ1", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"progressBar\"],[9],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/progress-bar-component.hbs" } });
});
;define("spartan-console/templates/components/published-button-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "80rhVszP", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n  \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"text\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"text\"]]],null]],[9],[0,\"\\n    \"],[1,[27,\"set-published-button-text\",[[23,[\"text\"]]],null],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/published-button-component.hbs" } });
});
;define("spartan-console/templates/components/recipe-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TrVFTDqU", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"recipeTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"recipeThumbnail\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeTitle\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"recipeAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/recipe-item-component.hbs" } });
});
;define("spartan-console/templates/components/recipes-list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "akLJeDxB", "block": "{\"symbols\":[\"recipe\",\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"list\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"id\"]]]]],[11,\"class\",\"recipeListItem\"],[3,\"action\",[[22,0,[]],\"select\",[22,1,[\"id\"]]]],[9],[0,\"\\n    \"],[7,\"img\"],[12,\"src\",[28,[[22,1,[\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[7,\"p\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/recipes-list-component.hbs" } });
});
;define("spartan-console/templates/components/round-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B6mjNQqv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"roundComponent\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"roundHeading\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"roundName\"],[9],[0,\"Round \"],[1,[21,\"roundNumber\"],false],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"addExercise\"],[3,\"action\",[[22,0,[]],\"openExercisesDialog\"]],[9],[0,\"ADD EXERCISES + \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[12,\"id\",[28,[\"exercises\",[21,\"roundNumber\"]]]],[11,\"class\",\"roundExercises\"],[9],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"roundInfo\"],[9],[0,\"\\n\\n    \"],[7,\"p\"],[11,\"class\",\"roundInfoHeading\"],[9],[0,\"Round Info\"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"roundInfoDropdowns\"],[9],[0,\"\\n      \"],[1,[27,\"workout-type-filter-component\",null,[[\"number\"],[[23,[\"roundNumber\"]]]]],false],[0,\"\\n      \"],[1,[27,\"workout-behavior-filter-component\",null,[[\"number\"],[[23,[\"roundNumber\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"roundInfoDurations\"],[9],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"class\",\"label\",\"type\",\"value\",\"onChange\"],[\"flex-40 duration\",\"Duration\",\"number\",[23,[\"duration\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"duration\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"class\",\"label\",\"type\",\"value\",\"onChange\"],[\"flex-40 restduration\",\"Rest\",\"number\",[23,[\"restduration\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"restduration\"]]],null]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/round-component.hbs" } });
});
;define("spartan-console/templates/components/search-input-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/Hvp4QDw", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"searchContainer\"],[9],[0,\"\\n  \"],[7,\"input\"],[12,\"id\",[28,[[21,\"id\"]]]],[11,\"placeholder\",\"Search...\"],[12,\"onkeyup\",[27,\"action\",[[22,0,[]],\"search\"],null]],[9],[10],[0,\"\\n  \"],[7,\"img\"],[11,\"id\",\"searchIcon\"],[11,\"src\",\"/assets/icons/magnify.svg\"],[9],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"filter\"]]],null,{\"statements\":[[0,\"    \"],[7,\"img\"],[11,\"id\",\"filterIcon\"],[11,\"src\",\"/assets/icons/filter-variant.svg\"],[3,\"action\",[[22,0,[]],\"toggleStatefilter\"],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n    \"],[1,[27,\"state-filter-component\",null,[[\"currentState\",\"callFiltering\"],[[23,[\"currentState\"]],[27,\"action\",[[22,0,[]],\"filter\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/search-input-component.hbs" } });
});
;define("spartan-console/templates/components/state-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nqsBDKMP", "block": "{\"symbols\":[\"state\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"statefilterDropdown\"],[11,\"class\",\"arrow_boxFilter\"],[9],[0,\"\\n\"],[0,\"\\n\"],[4,\"each\",[[23,[\"states\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"statefilterItem\"],[3,\"action\",[[22,0,[]],\"chooseState\",[22,1,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/state-filter-component.hbs" } });
});
;define("spartan-console/templates/components/tag-dialog-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZVAbHu+U", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"tagDialogContainer\"],[9],[0,\"\\n  \"],[7,\"p\"],[9],[1,[21,\"heading\"],false],[10],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n\\n    \"],[7,\"table\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"Name: \"],[10],[10],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"input\"],[11,\"id\",\"tagText\"],[9],[10],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"Language: \"],[10],[10],[0,\"\\n        \"],[2,\" Set action to edit to prevent calling function for loading new language data\"],[0,\"\\n        \"],[7,\"td\"],[9],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"action\"],[[23,[\"languages\"]],\"edit\"]]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"tr\"],[11,\"style\",\"margin-top: 0;\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[7,\"span\"],[9],[0,\"Type: \"],[10],[10],[0,\"\\n        \"],[7,\"td\"],[9],[1,[21,\"type-filter-component\"],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"br\"],[9],[10],[0,\"\\n\\n    \"],[2,\" Dialog buttons \"],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"dialogButtonContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"cancelButton\"],[3,\"action\",[[22,0,[]],\"closeDialog\"]],[9],[0,\"Cancel\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"addButton\"],[3,\"action\",[[22,0,[]],\"do\"]],[9],[1,[21,\"buttonText\"],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/tag-dialog-component.hbs" } });
});
;define("spartan-console/templates/components/tag-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IfA0kAC3", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"tagTable\"],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/pencil.svg\"],[3,\"action\",[[22,0,[]],\"openEditTagDialog\",[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/tag-item-component.hbs" } });
});
;define("spartan-console/templates/components/tags-list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "86RVd2tN", "block": "{\"symbols\":[\"tag\",\"tag\",\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"if\",[[23,[\"action\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"item\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[12,\"id\",[28,[[22,2,[\"name\"]],\"E\"]]],[11,\"class\",\"tagSpanElement\"],[3,\"action\",[[22,0,[]],\"selectTag\",[22,2,[\"name\"]],[22,2,[\"id\"]]]],[9],[1,[22,2,[\"name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"item\"]]],null,{\"statements\":[[0,\"    \"],[7,\"span\"],[12,\"id\",[28,[[22,1,[\"name\"]]]]],[11,\"class\",\"tagSpanElement\"],[3,\"action\",[[22,0,[]],\"selectTag\",[22,1,[\"name\"]],[22,1,[\"id\"]]]],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/tags-list-component.hbs" } });
});
;define("spartan-console/templates/components/toast-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bp9MgK04", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"p\"],[11,\"id\",\"toast\"],[9],[0,\"\\n  \"],[1,[21,\"toastText\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/toast-component.hbs" } });
});
;define("spartan-console/templates/components/transition-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qknpgFMI", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/transition-group.hbs" } });
});
;define("spartan-console/templates/components/type-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bDeT2mKi", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"typeFilter\"],[9],[0,\"\\n  \"],[7,\"p\"],[11,\"id\",\"typeFilterDefaultValue\"],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[0,\"Muscle\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"typeFilterDropdown\"],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"typeFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/type-filter-component.hbs" } });
});
;define("spartan-console/templates/components/upload-image-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "geZfj782", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"uploadImageComponent\"],[9],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[1,[21,\"title\"],false],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Recommended size: 1024 x 512\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Types: .JPEG, .PNG\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[2,\" Element which opens browse window on click \"],[0,\"\\n  \"],[7,\"img\"],[11,\"id\",\"uploadImageElement\"],[12,\"src\",[28,[[21,\"oldImage\"]]]],[11,\"class\",\"addImageElement\"],[3,\"action\",[[22,0,[]],\"openUploadImageWindow\"]],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/upload-image-component.hbs" } });
});
;define("spartan-console/templates/components/upload-media-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "siNYCqCv", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"uploadMediaComponent\"],[9],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Upload Media\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Types: .GIF, .MP4, .M4V\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[2,\" Element which opens browse window on click \"],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"browseButton\"],[3,\"action\",[[22,0,[]],\"openUploadMuscleImageWindow\"]],[9],[0,\"Browse\"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"uploadedMediaFiles\"],[9],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/upload-media-component.hbs" } });
});
;define("spartan-console/templates/components/upload-muscle-image-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JKz2f7NP", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"uploadMuscleImageComponent\"],[9],[0,\"\\n  \"],[7,\"div\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Muscle image\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Recommended size: 1024 x 512\"],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Types: .JPEG, .PNG\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[2,\" Element which opens browse window on click \"],[0,\"\\n  \"],[7,\"img\"],[11,\"id\",\"uploadMuscleImageElement\"],[12,\"src\",[28,[[21,\"oldImage\"]]]],[11,\"class\",\"addImageElement\"],[3,\"action\",[[22,0,[]],\"openUploadMuscleImageWindow\"]],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/upload-muscle-image-component.hbs" } });
});
;define("spartan-console/templates/components/user-dropdown-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7YWz1GKA", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"userProfileDropdown\"],[11,\"class\",\"arrow_box\"],[3,\"action\",[[22,0,[]],\"stopEventPropagation\"],[[\"bubbles\"],[false]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"userInfo\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"assets/pictures/login_image.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"User name\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"id\",\"userEmail\"],[9],[0,\"myemail@gmail.com\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"logoutButton\"],[3,\"action\",[[22,0,[]],\"logout\"]],[9],[0,\"Sign Out\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/user-dropdown-component.hbs" } });
});
;define("spartan-console/templates/components/user-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kPlbwtZV", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"usersTable\"],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"usersThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"usersTitle\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"usersLocation\"],[9],[1,[23,[\"item\",\"location\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/user-item-component.hbs" } });
});
;define("spartan-console/templates/components/workout-behavior-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xO3288IT", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[12,\"id\",[28,[\"workoutBehaviorFilter\",[21,\"number\"]]]],[9],[0,\"\\n  \"],[7,\"p\"],[12,\"id\",[28,[\"workoutBehaviorFilterDefaultValue\",[21,\"number\"]]]],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[0,\"Regular\"],[10],[0,\"\\n  \"],[7,\"div\"],[12,\"id\",[28,[\"workoutBehaviorFilterDropdown\",[21,\"number\"]]]],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"workoutBehaviorFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/workout-behavior-filter-component.hbs" } });
});
;define("spartan-console/templates/components/workout-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LgovnYSk", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"workoutTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"workoutTitle\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"workoutState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"workoutAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/workout-item-component.hbs" } });
});
;define("spartan-console/templates/components/workout-type-filter-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rtfIkU0G", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[12,\"id\",[28,[\"workoutTypeFilter\",[21,\"number\"]]]],[9],[0,\"\\n  \"],[7,\"p\"],[12,\"id\",[28,[\"workoutTypeFilterDefaultValue\",[21,\"number\"]]]],[3,\"action\",[[22,0,[]],\"toggleDropdown\"],[[\"bubbles\"],[false]]],[9],[0,\"Reps\"],[10],[0,\"\\n  \"],[7,\"div\"],[12,\"id\",[28,[\"workoutTypeFilterDropdown\",[21,\"number\"]]]],[11,\"class\",\"filterDropdown\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"filterValues\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"workoutTypeFilterItem\"],[3,\"action\",[[22,0,[]],\"changeFilter\",[22,2,[]]],[[\"bubbles\"],[false]]],[9],[1,[22,1,[]],false],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,3]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/workout-type-filter-component.hbs" } });
});
;define("spartan-console/templates/components/workoutplan-item-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DN2S0k/2", "block": "{\"symbols\":[\"&default\"],\"statements\":[[0,\"\\n\"],[7,\"table\"],[11,\"class\",\"planTable\"],[3,\"action\",[[22,0,[]],\"goToEditPage\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planThumbnail\"],[9],[0,\"\\n      \"],[7,\"img\"],[12,\"src\",[28,[[23,[\"item\",\"thumbnail\"]]]]],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planTitle\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"item\",\"name\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planState\"],[9],[0,\"\\n      \"],[7,\"p\"],[12,\"class\",[28,[\"publishedButton \",[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null]]]],[12,\"style\",[27,\"set-published-button-appearence\",[[23,[\"item\",\"state\"]]],null]],[3,\"action\",[[22,0,[]],\"openPublishDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[0,\"\\n        \"],[1,[27,\"set-published-button-text\",[[23,[\"item\",\"state\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"td\"],[11,\"class\",\"planAction\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[12,\"class\",[28,[[27,\"check-delete-button\",[[23,[\"item\",\"state\"]]],null]]]],[3,\"action\",[[22,0,[]],\"openDeleteDialog\",[23,[\"item\",\"id\"]]],[[\"bubbles\"],[false]]],[9],[10],[0,\"\\n      \"],[2,\"<img src=\\\"/assets/icons/pencil.svg\\\"/>\"],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[14,1]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/workoutplan-item-component.hbs" } });
});
;define("spartan-console/templates/components/workouts-list-component", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mzr6P4oB", "block": "{\"symbols\":[\"workout\",\"&default\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,[\"list\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"id\",[28,[[22,1,[\"id\"]]]]],[11,\"class\",\"workoutListItem\"],[3,\"action\",[[22,0,[]],\"select\",[22,1,[\"id\"]]]],[9],[0,\"\\n    \"],[7,\"p\"],[9],[1,[22,1,[\"name\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[14,2]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/components/workouts-list-component.hbs" } });
});
;define("spartan-console/templates/edit-app", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6zdfLUqf", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-apps-tab-component\",null,[[\"callSave\",\"tabName\",\"currentTab\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\",[23,[\"currentTab\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set app basic info \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"identifier\",\"flex-50 paperInputs\",\"Identifier\",\"Enter identifier\",[23,[\"identifier\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"identifier\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Package container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"pack\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set app packages \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"packages-list-component\",null,[[\"list\",\"appPackages\"],[[23,[\"model\",\"packagesList\",\"data\"]],[23,[\"appPackages\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[2,\" Plans \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"plans\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Package plans \"],[10],[0,\"\\n\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"nut\"],[11,\"class\",\"plansList\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\"],[[23,[\"model\",\"nutplans\",\"data\"]]]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"id\",\"wor\"],[11,\"class\",\"plansList\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\"],[[23,[\"model\",\"worplans\",\"data\"]]]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n    \"],[10],[0,\"\\n\\n\\n    \"],[2,\" Exercise container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"exer\"],[11,\"class\",\"tabContainer\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Package exercises \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"exercise-list-component\",null,[[\"list\"],[[23,[\"model\",\"exercises\",\"data\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[11,\"style\",\"pointer-events: none\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Package tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\"],[[23,[\"packageTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-app.hbs" } });
});
;define("spartan-console/templates/edit-exercise", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NY9zadow", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-component\",null,[[\"callSave\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set exercise basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"exerciseInfoLeft\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n          \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"action\"],[[23,[\"model\",\"languages\",\"data\"]],\"edit\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[1,[27,\"exercise-difficulty-component\",null,[[\"action\",\"oldHardness\"],[\"edit\",[23,[\"oldHardness\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[9],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set exercise tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set exercise media \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Exercise image\",[23,[\"oldImage\"]]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-muscle-image-component\",null,[[\"oldImage\"],[[23,[\"oldMuscleImage\"]]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-media-component\",null,[[\"media\",\"action\"],[[23,[\"media\"]],\"edit\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-exercise.hbs" } });
});
;define("spartan-console/templates/edit-nutrition-plan", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PylliixM", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-plans-tab-component\",null,[[\"callSave\",\"tabName\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"RECIPES\"]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"action\"],[[23,[\"model\",\"languages\",\"data\"]],\"edit\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan image \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",[23,[\"oldImage\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"data\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan recipes \"],[10],[0,\"\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"recipes-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"recipes\",\"data\"]],[23,[\"selectedRecipes\"]],\"edit\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-nutrition-plan.hbs" } });
});
;define("spartan-console/templates/edit-package", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NLgDgX9X", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-package-component\",null,[[\"callSave\",\"tabName\",\"currentTab\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\",[23,[\"currentTab\"]]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"action\"],[[23,[\"model\",\"languages\",\"data\"]],\"edit\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set package image \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",[23,[\"oldImage\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"plans\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set package plans \"],[10],[0,\"\\n\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"nut\"],[11,\"class\",\"plansList\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"nutplans\",\"data\"]],[23,[\"selectedNutritionPlans\"]],\"edit\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n      \"],[7,\"div\"],[11,\"id\",\"wor\"],[11,\"class\",\"plansList\"],[9],[0,\"\\n\\n        \"],[1,[27,\"plans-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"worplans\",\"data\"]],[23,[\"selectedWorkoutPlans\"]],\"edit\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\\n\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-package.hbs" } });
});
;define("spartan-console/templates/edit-policy", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mp7mk6fV", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"policyHeading\"],[9],[0,\"Policy title: \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"titleContainer\"],[11,\"class\",\"addEditPolicyPage\"],[9],[0,\"\\n    \"],[1,[27,\"pell-editor\",null,[[\"value\"],[[23,[\"model\",\"data\",\"title\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"p\"],[11,\"class\",\"policyHeading\"],[9],[0,\"Policy body: \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"bodyContainer\"],[11,\"class\",\"addEditPolicyPage\"],[9],[0,\"\\n    \"],[1,[27,\"pell-editor\",null,[[\"value\"],[[23,[\"model\",\"data\",\"body\"]]]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"savePolicy\"]],[9],[0,\"\\n  \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"content-save\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-policy.hbs" } });
});
;define("spartan-console/templates/edit-recipe", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sqPuXaHB", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-tab-component\",null,[[\"callSave\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set recipe basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"action\"],[[23,[\"model\",\"languages\",\"data\"]],\"edit\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"title\",\"flex-50 paperInputs\",\"Title\",\"Enter title\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set recipe tags \"],[10],[0,\"\\n\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set recipe image \"],[10],[0,\"\\n\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Recipe image\",[23,[\"oldImage\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-recipe.hbs" } });
});
;define("spartan-console/templates/edit-workout-plan", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fbek9MDi", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-plans-tab-component\",null,[[\"callSave\",\"tabName\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null],\"WORKOUTS\"]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"action\"],[[23,[\"model\",\"languages\",\"data\"]],\"edit\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"name\",\"flex-50 paperInputs\",\"Name\",\"Enter name\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"rawname\",\"flex-50 paperInputs\",\"Rawname\",\"Enter rawname\",[23,[\"rawname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"rawname\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set plan tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedTags\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"imag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan image \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"upload-image-component\",null,[[\"title\",\"oldImage\"],[\"Plan image\",[23,[\"oldImage\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[7,\"div\"],[11,\"id\",\"data\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set plan workouts \"],[10],[0,\"\\n      \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"workouts-list-component\",null,[[\"list\",\"selected\",\"action\"],[[23,[\"model\",\"workouts\",\"data\"]],[23,[\"selectedWorkouts\"]],\"edit\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-workout-plan.hbs" } });
});
;define("spartan-console/templates/edit-workout", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MA1IKsG3", "block": "{\"symbols\":[\"number\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"add-edit-workouts-tab-component\",null,[[\"callSave\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"tabsContentContainer\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"bas\"],[11,\"class\",\"tabContainer tabDisplayed\"],[9],[0,\"\\n\\n      \"],[7,\"p\"],[9],[0,\" Set workout basic info \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"languageFilterSpecial\"],[11,\"style\",\"padding-bottom: 5px;\"],[9],[0,\"\\n        \"],[1,[27,\"language-filter-component\",null,[[\"filterValues\",\"callLanguageData\",\"action\"],[[23,[\"model\",\"languages\",\"data\"]],[27,\"action\",[[22,0,[]],\"getDataByLanguage\"],null],\"edit\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"class\",\"label\",\"placeholder\",\"value\",\"onChange\"],[\"title\",\"flex-50 paperInputs\",\"Title\",\"Enter title\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"id\",\"textarea\",\"block\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[\"description\",true,true,\"Description\",500,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[23,[\"biography\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"biography\"]]],null]],null]]]],false],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n    \"],[2,\" Tags container \"],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"tag\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set workout regular tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedTags\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedRegularTags\"]]]]],false],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set workout equipment tags \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n      \"],[1,[27,\"tags-list-component\",null,[[\"item\",\"selectedEquipmentTags\",\"action\",\"editing\"],[[23,[\"model\",\"tags\",\"data\"]],[23,[\"selectedEquipmentTags\"]],true,true]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"round\"],[11,\"class\",\"tabContainer\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\" Set workout rounds \"],[10],[0,\"\\n      \"],[7,\"br\"],[9],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"roundsContainer\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"rounds\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"edit-round-component\",null,[[\"duration\",\"restduration\",\"roundNumber\",\"currentRoundNumber\",\"openedExerciseDialog\"],[[23,[\"duration\"]],[23,[\"restduration\"]],[22,1,[]],[23,[\"currentRoundNumber\"]],[23,[\"opened\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n      \"],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"id\",\"addNewRound\"],[3,\"action\",[[22,0,[]],\"addNewRound\"]],[9],[0,\"\\n  \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set exercises dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"exercisesDialog\"],[11,\"class\",\"dialogWrapper\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"exercises-dialog-component\",null,[[\"opened\",\"exercises\",\"selectedExercises\",\"callAddExercises\"],[[23,[\"openedExerciseDialog\"]],[23,[\"model\",\"exercises\",\"data\"]],[23,[\"selectedExercises\"]],[27,\"action\",[[22,0,[]],\"addExercisesToTheRound\"],null]]]],false],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/edit-workout.hbs" } });
});
;define("spartan-console/templates/exercises", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yfB5A2Op", "block": "{\"symbols\":[\"exercise\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"exercisesPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"exercise-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentExerciseId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-exercise\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/exercises.hbs" } });
});
;define("spartan-console/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AoKLXdwG", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/index.hbs" } });
});
;define("spartan-console/templates/languages", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5GK3zz6v", "block": "{\"symbols\":[\"language\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"languagePage\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[0,\"Languages\"],[10],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"language-item-component\",null,[[\"item\",\"currentId\"],[[22,1,[]],[23,[\"currentLanguageId\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"openAddLanguageDialog\"]],[9],[0,\"\\n  \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[\"This will delete selected language.\",[27,\"action\",[[22,0,[]],\"deleteLanguage\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[2,\" Set language dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"languageDialog\"],[11,\"class\",\"dialogWrapper languageDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"language-dialog-component\",null,[[\"callAddLanguage\"],[[27,\"action\",[[22,0,[]],\"addLanguage\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/languages.hbs" } });
});
;define("spartan-console/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "L2hc8kfj", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n  \"],[1,[21,\"loader-component\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/loading.hbs" } });
});
;define("spartan-console/templates/monolog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "xP79aWKW", "block": "{\"symbols\":[\"log\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"monologPage\"],[9],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"monologHeader\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Monolog\"],[10],[0,\"\\n      \"],[1,[27,\"monolog-filter-component\",null,[[\"defaultFilter\"],[[23,[\"currentFilter\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"monolog-item-component\",null,[[\"item\",\"currentDate\"],[[22,1,[]],[23,[\"currentLogDate\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[\"This will delete selected log.\",[27,\"action\",[[22,0,[]],\"deleteLog\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/monolog.hbs" } });
});
;define("spartan-console/templates/notifications", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sh+L6X6R", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Notifications\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/notifications.hbs" } });
});
;define("spartan-console/templates/nutrition-plans", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mXzqJRil", "block": "{\"symbols\":[\"plan\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\",\"callFilterStates\",\"filter\",\"currentState\"],[[27,\"action\",[[22,0,[]],\"search\"],null],[27,\"action\",[[22,0,[]],\"filter\"],null],true,[23,[\"currentState\"]]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"planPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"nutritionplan-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentPlanId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-nutrition-plan\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/nutrition-plans.hbs" } });
});
;define("spartan-console/templates/packages", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zKVSMEqj", "block": "{\"symbols\":[\"package\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"packagesPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"package-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentPackageId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-package\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/packages.hbs" } });
});
;define("spartan-console/templates/policies", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9Mfu5fH8", "block": "{\"symbols\":[\"policy\",\"index\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"policyPage\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"id\",\"policiesList\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"policy-list-item-component\",null,[[\"item\",\"currentPolicy\"],[[22,1,[]],[23,[\"currentPolicy\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"    \"],[10],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"id\",\"policyPreviewContainer\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"policyPreview\"],[9],[0,\"\\n        \"],[1,[27,\"policy-body-component\",null,[[\"item\"],[[23,[\"model\",\"data\",\"0\",\"body\"]]]]],false],[0,\"   \"],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"id\",\"policyActions\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"/assets/icons/pencil.svg\"],[3,\"action\",[[22,0,[]],\"goToEditPolicyPage\"]],[9],[10],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"/assets/icons/delete.svg\"],[3,\"action\",[[22,0,[]],\"openConfirmationDialog\"]],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"goToAddPolicyPage\"]],[9],[0,\"\\n  \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[\"This will delete selected policy.\",[27,\"action\",[[22,0,[]],\"deletePolicy\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/policies.hbs" } });
});
;define("spartan-console/templates/recipes", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+l2nnNb0", "block": "{\"symbols\":[\"recipe\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"recipesPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"recipe-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentRecipeId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-recipe\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/recipes.hbs" } });
});
;define("spartan-console/templates/statistic", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "b4i1SsFT", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"statisticPage\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #F44336\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/icons/bug_white.png\"],[9],[10],[0,\"\\n      \"],[7,\"div\"],[9],[0,\"\\n        \"],[7,\"p\"],[9],[1,[23,[\"model\",\"bug_reports\"]],false],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"Bug reports\"],[10],[0,\"\\n      \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #81C784\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_accessibility.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"total_exercises\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Exercises\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #8D6E63\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_calendar.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"training_plans\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Workout plans\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #42A5F5\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_tags.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"tags\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Tags\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #607D8B\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_user.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"total_users\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Tags\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #9575CD\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_gym.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"total_workouts\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Workouts\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #4DB6AC\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_restaurant.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"total_nutrition_plans\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Nutrition plans\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"statisticItem\"],[11,\"style\",\"background-color: #FFB74D\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"/assets/icons/white_menu.png\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"p\"],[9],[1,[23,[\"model\",\"total_recepies\"]],false],[10],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Recipes\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/statistic.hbs" } });
});
;define("spartan-console/templates/tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eRQ3eNoU", "block": "{\"symbols\":[\"tag\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"tagsPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"tags\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"tag-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\",\"editText\",\"callOpenEditTagDialog\"],[[22,1,[]],[23,[\"currentTagId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]],[23,[\"editText\"]],[27,\"action\",[[22,0,[]],\"openEditTagDialog\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[3,\"action\",[[22,0,[]],\"openAddTagDialog\"]],[9],[0,\"\\n    \"],[1,[27,\"paper-fab-component\",null,[[\"icon\"],[\"plus\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[2,\" Set tag dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"tagDialog\"],[11,\"class\",\"dialogWrapper tagDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"tag-dialog-component\",null,[[\"languages\",\"heading\",\"callAddTag\",\"callEditTag\"],[[23,[\"model\",\"languages\",\"data\"]],[23,[\"dialogHeading\"]],[27,\"action\",[[22,0,[]],\"addTag\"],null],[27,\"action\",[[22,0,[]],\"editTag\"],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/tags.hbs" } });
});
;define("spartan-console/templates/users", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Hqqaq3Qy", "block": "{\"symbols\":[\"user\"],\"statements\":[[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"appsPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"user-item-component\",null,[[\"item\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/users.hbs" } });
});
;define("spartan-console/templates/workout-plans", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Z1UNOuaQ", "block": "{\"symbols\":[\"plan\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"planPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"workoutplan-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentPlanId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-workout-plan\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/workout-plans.hbs" } });
});
;define("spartan-console/templates/workouts", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "70dFYPh2", "block": "{\"symbols\":[\"workout\"],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"pageContainer\"],[9],[0,\"\\n\\n  \"],[1,[27,\"search-input-component\",null,[[\"callSearch\"],[[27,\"action\",[[22,0,[]],\"search\"],null]]]],false],[0,\"\\n\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n  \"],[7,\"br\"],[9],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"id\",\"workoutsPage\"],[9],[0,\"\\n\\n\"],[4,\"each\",[[23,[\"model\",\"data\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"workout-item-component\",null,[[\"item\",\"currentId\",\"message\",\"function\"],[[22,1,[]],[23,[\"currentWorkoutId\"]],[23,[\"dialogMessage\"]],[23,[\"functionName\"]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"paper-fab-component\",null,[[\"icon\",\"page\"],[\"plus\",\"add-workouts\"]]],false],[0,\"\\n\\n\"],[2,\" Set confirmation dialog \"],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"confirmationDialog\"],[11,\"class\",\"dialogWrapper confirmationDialog\"],[9],[0,\"\\n  \"],[2,\" Set component properties and closure action for triggering appropriate controller action \"],[0,\"\\n  \"],[1,[27,\"confirmation-dialog-component\",null,[[\"item\",\"call\"],[[23,[\"dialogMessage\"]],[27,\"action\",[[22,0,[]],[23,[\"functionName\"]]],null]]]],false],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "spartan-console/templates/workouts.hbs" } });
});
;define('spartan-console/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _clamp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});
;

;define('spartan-console/config/environment', [], function() {
  var prefix = 'spartan-console';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("spartan-console/app")["default"].create({"name":"spartan-console","version":"0.0.0+aa5e3498"});
          }
        
//# sourceMappingURL=spartan-console.map
