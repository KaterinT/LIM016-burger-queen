import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

import "./menu.scss";

import { MenuOptions } from "./MenuOptions";
import { Productos } from "./Productos";
import { obtenerDataById, obtenerDataFirestore } from "../../../data/listaProductos";
// import {items} from '../../../data/listaProductos'

export const Menu = ({ /* pedido, */ moreClick}) => {
  /* const [orders, setOrders] = useState([]); */
  const [menuItems, setMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Desayuno");

    // **Trae la data de Firebase en un array de objetos**
    const getOrdersFirebase = async (category) => {
      const document = await obtenerDataFirestore("Menu");
      setMenuItems(document.filter((item) => item.categoria === category))
    };

  useEffect(() => {
    getOrdersFirebase(currentCategory)
   /*  setMenuItems(orders.filter((item) => item.categoria === currentCategory)); */
  }, [currentCategory/* , orders */]);
  // console.log(menuItems)

 /*  useEffect(() => {
    async function fetchList() {
      const listMenu = await getOrdersFirebase();
      setOrders(listMenu);
    }
    fetchList();
  }, []); */

/*   const moreClick =(e) => {
    obtenerDataById(e.target.name,'Menu').then((pedido) => {
        
      if (pedido.descripcion === "Hamburguesa simple"||pedido.descripcion === "Hamburguesa doble") {
        console.log("reconoce burgers");
        setEstadoModal(true);
        setUltimoPedido({...pedido, sendToFactura :false})  
      } else{
        setUltimoPedido((list)=>{

        }{...pedido, sendToFactura :true})  
      }
    })
  };  */ 
    /* const itemSelected=pedido.filter((item) => item.id===e.target.name);
    console.log(itemSelected[0]);

    setPedido((listaPedidosAnterior) =>{
      return [...listaPedidosAnterior,itemSelected[0]]
    })
    console.log(menuItem.descripcion); */
    /* if (pedido.find((obj) => obj.id === menuItem.id)) {
      // eslint-disable-next-line array-callback-return
      pedido.map((p) => {
        if (p.id === menuItem.id) {
          p.count = p.count + 1;
        }
      });

      setPedido([...pedido]);
    } else {
      menuItem.count = 1;
      setPedido([...pedido, menuItem]);
    }
    console.log("va bien"); */

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<
    /* if (itemSelected[0].descripcion === "Hamburguesa simple"||itemSelected[0].descripcion === "Hamburguesa doble") {
      console.log("reconoce burgers");
      setEstadoModal(true);
    } */
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 

  return (
    <div className="boxMenu">
      <MenuOptions  setCurrentCategory={setCurrentCategory} />
      <Productos  menuItems={menuItems} /* currentCategory={currentCategory}  */moreClick={moreClick} />
    </div>
  );
};
