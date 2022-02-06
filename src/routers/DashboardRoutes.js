// este archivo se encarga de que todas las rutas que queramos este en el NavBar
import { Routes, Route } from "react-router-dom";

import {Navbar,NavbarC} from "../components/navBar/NavBar";

import {Pedidos} from "../components/pedidos/Pedidos";
import {TomarOrden} from "../components/tomarOrden/TomarOrden";

import '../components/navBar/navBar.scss'


export const DashboardRoutes = () => {
  return (
    <div className="boxContainer">
      <Navbar />
      <Routes>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="tomarorden" element={<TomarOrden />} />
      </Routes>
    </div>
  )
}

export const DashboardRoutesCocinero = () => {
  return (
    <>
      <NavbarC />
    </>
  )
}