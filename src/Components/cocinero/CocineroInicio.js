import "./cocinero.scss";
import React, { useState } from "react";

const TemplatePedidoDone = ({ objetoPedido }) => {
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
      </div>
      <div className="infoMesa">
        <b>Mesa: </b>
        {objetoPedido.mesa}
      </div>
    </div>
  );
};

export const Cocinero = ({ renderInicial }) => {
  const [render, setRender] = useState(renderInicial);
  const HandleToDo = (e) => {
    const bttnToDo = e.currentTarget;
    const bttnDone = document.getElementById("done");
    bttnToDo.classList.remove("no-clicked");
    bttnToDo.classList.add("clicked");
    bttnDone.classList.remove("clicked");
    bttnDone.classList.add("no-clicked");
    setRender((hereRender) => {
      return renderInicial;
    });
  };
  const objetoPrueba = {
    id: 123456,
    hora: 3,
    cliente: "yumari",
    mesa: 199,
    pedidosArray: [1, 2, 3, 4],
  };
  const objetoPrueba2 = {
    id: 7891011,
    hora: 3,
    cliente: "yumari",
    mesa: 199,
    pedidosArray: [5, 6],
  };
  const HandleDone = (e) => {
    const bttnDone = e.currentTarget;
    const bttnToDo = document.getElementById("toDo");
    bttnDone.classList.remove("no-clicked");
    bttnDone.classList.add("clicked");
    bttnToDo.classList.remove("clicked");
    bttnToDo.classList.add("no-clicked");
    setRender((hereRender) => {
      hereRender = [objetoPrueba, objetoPrueba2].map((objeto) => {
        return (
          <React.Fragment key={objeto.id}>
            <TemplatePedidoDone objetoPedido={objeto} />
          </React.Fragment>
        );
      });
      return hereRender;
    });
  };

  return (
    <div id='cocinero'>
      <h4>Cocinero</h4>
      <section className="pedidos-al-chef">
        <button onClick={HandleToDo} id="toDo" className="clicked">
          <b>Por Preparar</b>
        </button>
        <button onClick={HandleDone} id="done" className="no-clicked">
          <b>Preparados</b>
        </button>
      </section>
      <section id="eventosChef">{render}</section>
    </div>
  );
};
