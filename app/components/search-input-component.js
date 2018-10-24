import Component from '@ember/component';

export default Component.extend({

  id: 'searcher',
  currentState: "All",

  actions: {
    search(){
      this.callSearch();
    },

    toggleStatefilter(){

      var display = window.getComputedStyle(document.querySelector('#statefilterDropdown')).display;

      if(display === "none"){
        document.getElementById("statefilterDropdown").style = "display: block";
      }else {
        document.getElementById("statefilterDropdown").style = "display: none";
      }

    },


    filter(){
      document.getElementById("searcher").value = "";
      this.callFilterStates();

    }
  }

});
