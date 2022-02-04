import { BrowserRouter, Route , Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Mesero } from "../Components/mesero/MeseroInicio";
import { Cocinero } from "../Components/cocinero/CocineroInicio";

export const RouterOfApp = () => {
    return <BrowserRouter>
        <h1> Estamos en el router principal de la aplicación  </h1>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/mesero' element={<Mesero />}/>
            <Route path='/cocinero' element={<Cocinero />} />
        </Routes>
    </BrowserRouter>
}