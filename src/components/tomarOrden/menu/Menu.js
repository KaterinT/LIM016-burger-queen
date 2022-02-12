import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

import "./menu.scss";

import { MenuOptions } from "./MenuOptions";
import { Productos } from "./Productos";
import { obtenerDataFirestore } from "../../../data/listaProductos";
// import {items} from '../../../data/listaProductos'

export const Menu = ({ /* pedido, */ setPedido, setEstadoModal }) => {
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

  const moreClick = (menuItem) => {
    setPedido((listaPedidosAnterior) =>{
      return [...listaPedidosAnterior,menuItem]
    })
    console.log(menuItem.descripcion);
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
    if (menuItem.descripcion === "Hamburguesa simple"||menuItem.descripcion === "Hamburguesa doble") {
      console.log("reconoce burgers");
      setEstadoModal(true);
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
