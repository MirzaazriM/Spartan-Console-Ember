import { helper } from '@ember/component/helper';

export function checkDeleteButton(data) {

  var className = '';

  if(data[0] === 'R'){
    className = 'inactiveDeleteButton';
  }else {
    className = '';
  }

  return className;
}

export default helper(checkDeleteButton);
