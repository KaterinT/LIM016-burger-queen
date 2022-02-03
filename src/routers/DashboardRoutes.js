// este archivo se encarga de que todas las rutas que queramos este en el NavBar
import { Routes, Route } from "react-router-dom";

import {Navbar} from "../components/navBar/NavBar";

import {Pedidos} from "../components/pedidos/Pedidos";
import {Mesero} from "../components/mesero/Mesero";


export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="mesero" element={<Mesero />} />
        <Route path="/" element={<Mesero />} />
      </Routes>
    </>
  )
}