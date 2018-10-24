import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  // set component properties and actions
  currentState: "All",

  states: computed(function(){
    return ["All", "Released", "Not released"];
  }),


  actions: {

    stopPropagation(){
      document.getElementById('statefilterDropdown').style="display: none";
    },


    chooseState(state){
      console.log("new state: " + state);
      this.set("currentState", state);
      document.getElementById("statefilterDropdown").style = "display: none";

      this.callFiltering();
    }
  }
});
