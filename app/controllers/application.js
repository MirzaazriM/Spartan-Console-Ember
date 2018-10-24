import Controller from '@ember/controller';
import  {
  observer,
  computed
} from '@ember/object';

export default Controller.extend({
  // set application properties and actions

  // set default value for toast text
  textForToast: '',

  imageUploadEndpoint: 'http://staging.api.system.diamondappgroup.com/upload', // staging.api.system.diamondappgroup.com spartan-system:8888

  // media holder
  mediaHolder: computed(function(){
    return [];
  }),

  // set default current page for the header component
  currentPage: computed(function(){
    var page = sessionStorage.getItem('currentPage');

    if(page === null){
      return 'statistic';
    }else {
      return page;
    }
  }),


  actions: {

    // close overlay and menu on click
    closeOverlayAndMenu(){
      document.getElementById('menuOverlay').style = "display: none";
      document.getElementById('menuContainer').style = "display: none";
    },


    closeDropdowns(){

      document.getElementById('notificationsDropdown').style = "display: none;";
      document.getElementById('userProfileDropdown').style = "display: none;";


      if(document.getElementById('monologFilterDropdown') !== null){
        document.getElementById('monologFilterDropdown').style = "display: none;";
      }

      if(document.getElementById('adminFilterDropdown') !== null){
        document.getElementById('adminFilterDropdown').style = "display: none;";
      }

      if(document.getElementById('languageFilterDropdown') !== null){
        document.getElementById('languageFilterDropdown').style = "display: none;";
      }

      if(document.getElementById('typeFilterDropdown') !== null){
        document.getElementById('typeFilterDropdown').style = "display: none;";
      }

      if(document.getElementById('difficultyFilterDropdown') !== null){
        document.getElementById('difficultyFilterDropdown').style = "display: none;";
      }

      if(document.getElementById('statefilterDropdown') !== null){
        document.getElementById('statefilterDropdown').style = "display: none;";
      }

    },


    // open toast
    openToast(){
      // show toast
      document.getElementById('toast').style = "animation-name: toastAnimation; animation-duration: 3s;";
      // remove animation so that animation can be started again on the same way
      setTimeout(function(){
        document.getElementById('toast').style = "animation-name: no;";
      }, 3000);
    },


    loadFile(event){

      var preview = URL.createObjectURL(event.target.files[0]);
      document.getElementById('uploadImageElement').src = preview;

    },


    loadMuscleImageFile(event){

      var preview = URL.createObjectURL(event.target.files[0]);
      document.getElementById('uploadMuscleImageElement').src = preview;

    },


    loadMediaImageFile(event){

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
      for(var i = 0; i < data.length; i++){

        // if counter is 3 return from the loop
        if(counter === 3){
          break;
        }

        var name = data[i].name;

        if(name.indexOf('.gif') !== -1 && gif === false){
          gif = true;
          mediaHolder.push(data[i]);
          counter++;
        }else if(name.indexOf('.mp4') !== -1 && mp4 === false){
          mp4 = true;
          mediaHolder.push(data[i]);
          counter++;
        }else if(name.indexOf('.m4v') !== -1 && m4v === false){
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
      for(var i = 0; i < mediaHolder.length; i++){
        var element = document.createElement('p');
        element.innerHTML = mediaHolder[i].name;

        mediaFiles.appendChild(element);
      }

    }
  }
});
