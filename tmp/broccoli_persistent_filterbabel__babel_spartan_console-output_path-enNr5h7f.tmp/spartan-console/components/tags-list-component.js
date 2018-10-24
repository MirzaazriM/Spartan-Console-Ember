define('spartan-console/components/tags-list-component', ['exports'], function (exports) {
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