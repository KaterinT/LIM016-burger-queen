import { Routes, Route,BrowserRouter } from "react-router-dom";
import {Home} from "../components/home/Home";
import {Pedidos} from "../components/home/Pedidos";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  )
}