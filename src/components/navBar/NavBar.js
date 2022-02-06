// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import { Link} from "react-router-dom";
import logo from "../../imagenes/logo.png";
import "./navBar.scss";

export const Navbar = ({ condicion }) => {
  return (
    <>
      <img src={logo} alt="" />
      <nav className="">
        <Link className="" to="/">
          LOGIN
        </Link>
        <Link className={condicion} to="/tomarorden">
          TOMAR ORDEN
        </Link>
        <Link className={condicion} to="/pedidos">
          PEDIDOS
        </Link>
      </nav>
    </>
  );
};
