import { helper } from '@ember/component/helper';

export function menuItemTitleDecorator(item) {

  var title = item[0];

  title = title.replace('-', ' ');

  return title;
}

export default helper(menuItemTitleDecorator);
