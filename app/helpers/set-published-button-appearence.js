import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function setPublishedButtonAppearence(data) {
  var value = data[0];

  var color = '';

  if(value === 'R'){
    return htmlSafe('background-color: #aaa');
  }else {
    return htmlSafe('background-color: #F44336');
  }

}

export default helper(setPublishedButtonAppearence);
