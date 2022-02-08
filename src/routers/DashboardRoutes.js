// este archivo se encarga de que todas las rutas que queramos este en el NavBar
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Cocinero } from "../components/cocinero/CocineroInicio";
import { Navbar } from "../components/navBar/NavBar";
import { Pedidos } from "../components/pedidos/Pedidos";
import { TomarOrden } from "../components/tomarOrden/TomarOrden";

const TemplatePedidoToDo = ({ objetoPedido }) => {
  return (
    <div className="pedidos">
      <div className="infoPedido">
        <p>
          <b>Hora:</b> {objetoPedido.hora}
        </p>
        <p>
          <b>Cliente: </b> {objetoPedido.cliente}
        </p>
        <ul>
          <b>Pedidos: </b>
          {objetoPedido.pedidosArray.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <button>Listo?</button>
      </div>
      <div className="infoMesa">
        <b>Mesa: </b>
        {objetoPedido.mesa}
      </div>
    </div>
  );
};

const arrayObjPrueba =[ {
  id: 112233,
  hora: 3,
  cliente: "yumariTodo",
  mesa: 100,
  pedidosArray: [1, 2],
},
{
  id: 445566,
  hora: 3,
  cliente: "yumariTodo",
  mesa: 100,
  pedidosArray: [3, 4],
},
{
  id: 778899,
  hora: 3,
  cliente: "yumdo",
  mesa: 100,
  pedidosArray: [3, 4],
},
{
  id: 123321,
  hora: 3,
  cliente: "yumdo",
  mesa: 100,
  pedidosArray: [3, 4],
},
{
  id: 423324,
  hora: 3,
  cliente: "yumdo",
  mesa: 100,
  pedidosArray: [3, 4],
}];

export const DashboardRoutes = () => {
  
  const valorInitChef = arrayObjPrueba.map((objeto) => {
    return (
      <React.Fragment key={objeto.id}>
        <TemplatePedidoToDo objetoPedido={objeto} />{" "}
      </React.Fragment>
    );
  });
  return (
    <div className="boxContainer">
      <Navbar
        condicion={useLocation().pathname === "/cocinero" ? "cocinero" : ""}
      />
      <Routes>
        <Route
          path="cocinero"
          element={<Cocinero renderInicial={valorInitChef} />}
        />
        <Route path="pedidos" element={<Pedidos />} />
        <Route path="tomarorden" element={<TomarOrden />} />
      </Routes>
    </div>
  );
};
