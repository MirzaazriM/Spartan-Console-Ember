define('spartan-console/components/state-filter-component', ['exports'], function (exports) {
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