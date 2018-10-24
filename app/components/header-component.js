import Component from '@ember/component';

export default Component.extend({
  // set component properties and actions

  clickedItem: 'statistic',

  actions: {
    // toggle profile dropdown
    toggleUserDropdown(){

      var display = window.getComputedStyle(document.querySelector('#userProfileDropdown')).display;

      if(display === 'none'){
        document.getElementById('userProfileDropdown').style = "display: block";
      }else {
        document.getElementById('userProfileDropdown').style = "display: none";
      }

      document.getElementById('notificationsDropdown').style="display: none;";
    },

    // toggle profile dropdown
    toggleNotificationsDropdown(){

      var display = window.getComputedStyle(document.querySelector('#notificationsDropdown')).display;

      if(display === 'none'){
        document.getElementById('notificationsDropdown').style = "display: block";
      }else {
        document.getElementById('notificationsDropdown').style = "display: none";
      }

      document.getElementById('userProfileDropdown').style="display: none;";
    },


    // toggle menu
    toggleMenu(){
      document.getElementById('menuContainer').style = "display: block";
      document.getElementById('menuOverlay').style = "display: block";
    }

  }

});
