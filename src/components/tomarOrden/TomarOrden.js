
// import React from "react";
// import ReacDOM from "react-dom";
import {useState} from 'react'
import {Factura} from './factura/Factura'
import {Menu} from './menu/Menu'
import './tomarOrden.scss'

export const TomarOrden = () => {

  const [pedido, setPedido] = useState([]);
  console.log(pedido);

  return (
    <div className="containert">
      <div className="boxTomarOrden">
        <h4>Mesero</h4>
        <div className="boxTomarOrdenMenu">
          <div className="boxTomarOrdenMenu2">
            <Menu pedido={pedido} setPedido={setPedido} />
            <Factura />
          </div>
          <div className="boxBtnTomarOrden">
                <button>CANCELAR</button>
                <button>CONFIRMAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};