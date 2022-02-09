import { useEffect, useState } from 'react'
import { db } from '../../../firebase.config'
import { collection, doc, getDocs,onSnapshot, snapshotEqual,query,where,get} from 'firebase/firestore'

import './menu.scss'

import {MenuOptions} from './MenuOptions'
import {Productos} from './Productos'
import {items} from '../../../data/listaProductos'



export const Menu = () => {

  const [orders, setOrders] = useState([]);
  const getOrdersFirebase = async () => {
      const document = [];
      const querySnapshot = await getDocs(collection(db, "Menu"));
      querySnapshot.forEach((doc) => {
        // console.log(document.push(doc.data()));
          document.push({
          id: doc.id,
          categoria: doc.data().categoria,
          descripcion:doc.data().descripcion,
          imagen:doc.data().imagen,
          precio:doc.data().precio,
        })
        console.log(document);
        
      });
      
      return document;
    };
    useEffect(() => {
      async function fetchList() {
        const listMenu = await getOrdersFirebase()
        setOrders(listMenu);
      }
      fetchList(); 
     
    }, [])



  console.log(orders);

  // const allCategories = [...new Set((orders.map((item) => item.categoria)))]
  
  // allCategories.push(allCategories[0]);
  // allCategories.shift()

  const allCategories = ["Desayuno","Hamburguesas","Bebidas"]

  const newItemsInicio =orders.filter((item) => item.categoria === "Desayuno");
  console.log(newItemsInicio)

 
  const [menuItems,setMenuItems] = useState(newItemsInicio);
console.log(menuItems)
  const filterItems = (category) => {
    const newItems = orders.filter((item) => item.categoria === category);
    setMenuItems(newItems);
  }

  return (
    <div className="boxMenu">
      <MenuOptions categories={allCategories} filterItems={filterItems} />
      <Productos items={menuItems}/>
    </div>
  );
};

// *********************
// const allCategories = [...new Set((items.map((item) => item.category)))]
// const newItemsInicio = items.filter((item) => item.category === "Desayuno");

// export const Menu = () => {
//   const [menuItems,setMenuItems] = useState(newItemsInicio);

//   const filterItems = (category) => {
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   }

//   return (
//     <div className="boxMenu">
//       <MenuOptions categories={allCategories} filterItems={filterItems} />
//       <Productos items={menuItems}/>
//     </div>
//   );
// };