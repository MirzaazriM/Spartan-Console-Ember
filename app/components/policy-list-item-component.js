import Component from '@ember/component';

export default Component.extend({

  currentPolicy: 0,

  didRender(){
    this._super(...arguments);
    var title = this.get('item').title;
    var id = this.get('item').id;

    var regex = /(<([^>]+)>)/ig;
    var body = title;
    var result = body.replace(regex, "");

    document.getElementById(id).innerHTML = result;
  },

  actions: {
    changePolicy(id){
      this.set('currentPolicy', id);
    }
  }
});
