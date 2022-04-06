/*eslint-disable */
// este archivo se encarga de que todas las rutas que queramos este en el NavBar
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Cocinero } from "../componentes/cocinero/CocineroInicio";
import { Navbar } from "../componentes/navBar/NavBar";
import { Pedidos } from "../componentes/pedidos/Pedidos";
import { Entregados } from "../componentes/pedidos/PedidosEntregados";
import { TomarOrden } from "../componentes/tomarOrden/TomarOrden";
import { db } from "../firebase.config";

export const DashboardRoutes = () => {
  
  const [orders, setOrders] = useState([]);
  const [today, setDate] = useState(new Date()); 

  const locale = 'en';
  const horaAc = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });

  useEffect(()=>{
    const unsubscribe=onSnapshot(collection(db, "ordenes"), (snapshot) => {
      const tempOrders=[]
      snapshot.forEach((doc) =>{
        tempOrders.push({...doc.data(),id:doc.id});
      })
      setOrders(tempOrders)
    });
    return () =>{
      //sessionStorage.clear();
      unsubscribe();
     // clearInterval(timer);
    }
  },[])

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  },[])

  return <>
    <div className="boxContainer">
      <Navbar
        condicion={useLocation().pathname === "/cocinero" ? "cocinero" : ""}
      />
      <Routes>
        <Route path="cocinero" element={<Cocinero orders={orders} horaAc={horaAc}/>} />
        <Route path="pedidos" element={<Pedidos orders={orders} horaAc={horaAc}/>} />
        <Route path="tomarorden" element={<TomarOrden horaAc={horaAc} />} />
        <Route path='pedidos-entregados' element={<Entregados/>}></Route>
      </Routes>
    </div>
    </>;
};
