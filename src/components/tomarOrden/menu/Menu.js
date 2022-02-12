import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

import "./menu.scss";

import { MenuOptions } from "./MenuOptions";
import { Productos } from "./Productos";
import { obtenerDataFirestore } from "../../../data/listaProductos";
// import {items} from '../../../data/listaProductos'

export const Menu = ({ /* pedido, */ setPedido, setEstadoModal ,setPedidoModal}) => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Desayuno");

  const allCategories = ["Desayuno", "Hamburguesas", "Bebidas"];

  useEffect(() => {
    setMenuItems(orders.filter((item) => item.categoria === currentCategory));
  }, [currentCategory, orders]);
  // console.log(menuItems)

  // **Trae la data de Firebase en un array de objetos**
  const getOrdersFirebase = async () => {
    const document = await obtenerDataFirestore("Menu");
    return document;
  };
  useEffect(() => {
    async function fetchList() {
      const listMenu = await getOrdersFirebase();
      setOrders(listMenu);
    }
    fetchList();
  }, []);
console.log()
  const moreClick = (menuItem) => {

    console.log(menuItem.descripcion);
 
    if (menuItem.descripcion === "Hamburguesa simple"||menuItem.descripcion === "Hamburguesa doble") {
      console.log("reconoce burgers");
      setEstadoModal(true);
      setPedidoModal((listaPedidosAnterior) =>{
        
        return [...listaPedidosAnterior,menuItem]
      })
    }else {
      setPedido((listaPedidosAnterior) =>{
        console.log(listaPedidosAnterior)
        return [...listaPedidosAnterior,menuItem]
      })
    }
    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  };

  return (
    <div className="boxMenu">
      <MenuOptions categories={allCategories}  setCurrentCategory={setCurrentCategory} />
      <Productos  menuItems={menuItems} currentCategory={currentCategory} moreClick={moreClick} />
    </div>
  );
};
