import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function colorItemState(status) {
  // check status and return right color
  if(status[0] === 'pending'){
    return htmlSafe("color: red");
  }else {
    return htmlSafe("color: green");
  }
}

export default helper(colorItemState);
