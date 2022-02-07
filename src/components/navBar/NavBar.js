// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import { Link } from "react-router-dom";

import logo from "../../imagenes/logo.png";
import './navBar.scss'

export const Navbar = ({condicion}) => {
  return (
    <div className="boxNav">
      <img src={logo} alt="" />
      <div className="boxOptions">
      <nav className="">
            <Link className="" to="/">
              INICIO
            </Link>
            <Link className={condicion} to="/tomarorden">
              TOMAR ORDEN
            </Link>
            <Link className={condicion} to="/pedidos">
              PEDIDOS
            </Link>
        </nav>
      <div className="linea"></div>
      </div>
    </div>
  );
};
