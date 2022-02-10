import { useEffect, useState } from 'react'
import { db } from '../../../firebase.config'
import { collection, getDocs} from 'firebase/firestore'

import './menu.scss'

import {MenuOptions} from './MenuOptions'
import {Productos} from './Productos'
// import {items} from '../../../data/listaProductos'

export const Menu = () => {
  const [orders, setOrders] = useState([]);
  const [menuItems,setMenuItems] = useState([]);
  const [currentCategory,setCurrentCategory] =  useState("Desayuno");

  const allCategories = ["Desayuno","Hamburguesas","Bebidas"]

  useEffect (() => {

    setMenuItems(orders.filter((item) => item.categoria === currentCategory));
    
  },[currentCategory, orders])
  // console.log(menuItems)

  // **Trae la data de Firebase en un array de objetos**
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
        })/* 
        console.log(document); */
        
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

  // console.log(orders);
  return (
    <div className="boxMenu">
      <MenuOptions categories={allCategories} setCurrentCategory={setCurrentCategory} />
      <Productos menuItems={menuItems} currentCategory = {currentCategory} />
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