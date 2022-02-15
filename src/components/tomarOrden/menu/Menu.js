import { useEffect, useState } from "react";
import { MenuOptions } from "./MenuOptions";
import { Productos } from "./Productos";
import { obtenerDataFiltrada, obtenerDataFirestore } from "../../../data/listaProductos";
import "./menu.scss";
// import {items} from '../../../data/listaProductos'

export const Menu = ({ /* pedido, */ moreClick}) => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Desayuno");

    // **Trae la data de Firebase en un array de objetos**

/*     const getOrdersFirebase = async (category) => {
      const document = await obtenerDataFiltrada("Menu","categoria",category);
      setMenuItems(document)
    }; */

  useEffect(() => {
    //getOrdersFirebase(currentCategory)
    setMenuItems(orders.filter((item) => item.categoria === currentCategory));
  }, [currentCategory, orders]);
  // console.log(menuItems)

  useEffect(() => {
    async function fetchList() {
      const listMenu = await obtenerDataFirestore('Menu');
      setOrders(listMenu);
    }
    fetchList();
  }, []);

  return (
    <div className="boxMenu">
      <MenuOptions  setCurrentCategory={setCurrentCategory} />
      <Productos  menuItems={menuItems} /* currentCategory={currentCategory}  */moreClick={moreClick} />
    </div>
  );
};
