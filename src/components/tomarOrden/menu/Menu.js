import { useState } from 'react'

import './menu.scss'

import {MenuOptions} from './MenuOptions'
import {Productos} from './Productos'
import {items} from '../../../data/listaProductos'



export const Menu = () => {
  const [menuItems,setMenuItems] = useState(items);
  
  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }


  return (
    <div className="boxMenu">
      <MenuOptions filterItems={filterItems} />
      <Productos items={menuItems}/>
    </div>
  );
};