
// import React from "react";
// import ReacDOM from "react-dom";
import {Factura} from './factura/Factura'
import {Menu} from './menu/Menu'
import './tomarOrden.scss'

export const TomarOrden = () => {
  return (
    <div className="containert">
      <div className="boxTomarOrden">
        <div className="boxtitleUsuario">
          <div className="boxTitle">
            <p>Mesero</p>
          </div>
        </div>
        <div className="boxTomarOrdenMenu">
          <div className="boxTomarOrdenMenu2">
            <Menu />
            <Factura />
          </div>
          <div className="boxBtnTomarOrden">
            <div className="boxBtnTomarOrden2">
                <button>CANCELAR</button>
                <button>CONFIRMAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};