import { useEffect, useState } from "react";
import { MenuOptions } from "./MenuOptions";
import { Productos } from "./Productos";
import { obtenerDataFirestore } from "../../../data/funcionesFirestore";
import "./menu.scss";

export const Menu = ({moreClick}) => {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Desayuno");

  useEffect(() => {
    setMenuItems(orders.filter((item) => item.categoria === currentCategory));
  }, [currentCategory, orders]);
  // console.log(menuItems)

  useEffect(() => {
    async function fetchList() {
          // **Trae la data de Firebase en un array de objetos**
      const listMenu = await obtenerDataFirestore('Menu');
      setOrders(listMenu);
    }
    fetchList();
  }, []);

  return (
    <div className="boxMenu">
      <MenuOptions  setCurrentCategory={setCurrentCategory} />
      <Productos  menuItems={menuItems} moreClick={moreClick} />
    </div>
  );
};
