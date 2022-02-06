// este archivo se encarga de que todas las rutas que queramos este en el NavBar
import { Routes, Route, useLocation } from "react-router-dom";
import { Cocinero } from "../components/cocinero/CocineroInicio";
import {Navbar} from "../components/navBar/NavBar";
import {Pedidos} from "../components/pedidos/Pedidos";
import {TomarOrden} from "../components/tomarOrden/TomarOrden";

const TemplatePedidoToDo= ({objetoPedido}) => {
    
  return <div className="pedidos"> 
              <div className="infoPedido">
                    <p><b>Hora:</b> {objetoPedido.hora}</p>
                    <p><b>Cliente: </b> {objetoPedido.cliente}</p>
                    <ul>
                        <b>Pedidos: </b>
                        {objetoPedido.pedidosArray.map((e) => <li key={e}>{e}</li>)}
                    </ul>
                  <button>Listo?</button>
              </div>
              <div className="infoMesa"><b>Mesa: </b>{objetoPedido.mesa}</div>
         </div>
};


export const DashboardRoutes =() => {
  const objetoPrueba={
    hora:3,
    cliente:'yumariTodo',
    mesa:100,
    pedidosArray:[1,4]
  }
  const valorInitChef = <TemplatePedidoToDo objetoPedido={objetoPrueba} />
  return (
    <>
      <Navbar condicion={((useLocation().pathname==='/cocinero')? 'cocinero' :'')}/>
      <Routes>
        <Route path="cocinero" element={<Cocinero renderInicial={valorInitChef}/>}/>
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="tomarorden" element={<TomarOrden />} />
      </Routes>
    </>
  )
}