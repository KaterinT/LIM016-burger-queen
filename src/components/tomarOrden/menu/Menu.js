import { useState } from 'react'

import './menu.scss'

import {MenuOptions} from './MenuOptions'
import {Productos} from './Productos'
import {items} from '../../../data/listaProductos'

const allCategories = [...new Set((items.map((item) => item.category)))]

export const Menu = () => {
  const [menuItems,setMenuItems] = useState(items);

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <div className="boxMenu">
      <MenuOptions categories={allCategories} filterItems={filterItems} />
      <Productos items={menuItems}/>
    </div>
  );
};