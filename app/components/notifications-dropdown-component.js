import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  // set component properties and actions

  notifications: computed(function(){
    return [1,2,3];
  }),


  actions: {

    stopPropagation(){
      document.getElementById('notificationsDropdown').style="display: none";
    }
  }
});
