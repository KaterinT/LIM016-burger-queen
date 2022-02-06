import { Routes, Route,BrowserRouter } from "react-router-dom";

import {Inicio} from "../components/inicio/Inicio";
import { DashboardRoutes,DashboardRoutesCocinero } from "./DashboardRoutes";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/" element={<Inicio />} />
        <Route path={"/*"}  element={<DashboardRoutes />} />
        <Route path="/cocinero" element={<DashboardRoutesCocinero />} />
      </Routes>
    </BrowserRouter>
  )
}