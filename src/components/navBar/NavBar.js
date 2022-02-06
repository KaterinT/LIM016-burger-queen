// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import { Link, NavLink } from "react-router-dom";

import logo from "../../imagenes/logo.png";
import './navBar.scss'

export const Navbar = () => {
  return (
    <div className="boxNav">
      <img src={logo} alt="" />
      <div className="boxOptions">
      <nav className="">
            <NavLink className="" to="/inicio">
              INICIO
            </NavLink>
            <NavLink className="" to="/tomarorden">
              TOMAR ORDEN
            </NavLink>
            <NavLink className="" to="/pedidos">
              PEDIDOS
            </NavLink>
        </nav>
      <div class="linea"></div>
      </div>
    </div>
  );
};

export const NavbarC = () => {
  return (
    <>
      <img src={logo} alt="" />
      <nav className="">
        <Link className="" to="/inicio">
          INICIO
        </Link>
      </nav>
    </>
  );
};

