// este archivo se encarga de que todas las rutas que queramos este en el NavBar

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Cocinero } from "../components/cocinero/CocineroInicio";
import { Navbar } from "../components/navBar/NavBar";
import { Pedidos } from "../components/pedidos/Pedidos";
import { TomarOrden } from "../components/tomarOrden/TomarOrden";
import { db } from "../firebase.config";

export const DashboardRoutes = () => {
  
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    const unsubscribe=onSnapshot(collection(db, "ordenes"), (snapshot) => {
      const tempOrders=[]
      snapshot.forEach((doc) =>{
        tempOrders.push({...doc.data(),id:doc.id});
      })
      setOrders(tempOrders)
    });
    return () =>{
      unsubscribe();
    }
  },[])

  return <>
    <div className="boxContainer">
      <Navbar
        condicion={useLocation().pathname === "/cocinero" ? "cocinero" : ""}
      />
      <Routes>
        <Route path="cocinero" element={<Cocinero orders={orders} />} />
        <Route path="pedidos" element={<Pedidos orders={orders} />} />
        <Route path="tomarorden" element={<TomarOrden />} />
      </Routes>
    </div>
    </>;
};
