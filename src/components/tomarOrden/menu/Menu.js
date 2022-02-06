import './menu.scss'

import {MenuOptions} from './MenuOptions'
import {Productos} from './Productos'

export const Menu = () => {
  return (
    <div className="boxMenu">
      <MenuOptions />
      <Productos />
    </div>
  );
};