import Component from '@ember/component';

export default Component.extend({

  didRender(){
    document.getElementById('policyBody').innerHTML = this.get('item');
  }
});
