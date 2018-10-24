import { helper } from '@ember/component/helper';


export function setPublishedButtonText(data) {
  var value = data[0];

  var text = '';

  if(value === 'R'){
    text = 'PUBLISHED';
  }else {
    text = 'PUBLISH';
  }

  return text;
}

export default helper(setPublishedButtonText);
