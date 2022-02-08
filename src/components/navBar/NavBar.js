// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import {NavLink } from "react-router-dom";

import logo from "../../imagenes/logo.png";
import './navBar.scss'

const activeStyle =  ({ isActive }) => isActive? {color: '#E7D15E'}
:{}

export const Navbar = ({condicion}) => {
  return (
    <div className="boxNav">
      <img src={logo} alt="" />
      <div className="boxOptions">
      <nav className="" >
            <NavLink className="" style={activeStyle}to="/">
              INICIO
            </NavLink>
            <NavLink className={condicion} style={activeStyle} to="/tomarorden">
              TOMAR ORDEN
            </NavLink>
            <NavLink className={condicion} style={activeStyle} to="/pedidos">
              PEDIDOS
            </NavLink>
        </nav>
      <div className="linea"></div>
      </div>
    </div>
  );
};
