import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function colorLogLevel(status) {
  if(status[0] === 'ERROR'){
    return htmlSafe("color: red");
  }else {
    return htmlSafe("color: #f4b042");
  }
}

export default helper(colorLogLevel);
