// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import {NavLink } from "react-router-dom";
import {useState} from 'react'
import logo from "../../imagenes/logo.png";
import './navBar.scss'
import {FaBars,FaRegClipboard} from "react-icons/fa";
import {IoHomeOutline} from "react-icons/io5";
import { BiAlarmExclamation } from "react-icons/bi";

const activeStyle =  ({ isActive }) => isActive? {color: '#E7D15E'}
:{}


export const Navbar = ({condicion}) => {

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="boxNav">
      <img className = 'logo' src={logo} alt="" />
      <button className="navToggle" onClick={handleToggle}>
        <FaBars/>
      </button>
      <div className="boxOptions">
        <nav className={`${isActive ? "navOptions" : "navOptionsOpen"}`}>
              <NavLink className="" style={activeStyle}to="/">
                <IoHomeOutline className="iconNav"/>INICIO
              </NavLink>
              <NavLink className={condicion} style={activeStyle} to="/tomarorden">
                <FaRegClipboard className="iconNav"/>TOMAR ORDEN
              </NavLink>
              <NavLink className={condicion} style={activeStyle} to="/pedidos">
                <BiAlarmExclamation className="iconNav"/>PEDIDOS
              </NavLink>
              <NavLink to='/pedidos-entregados'>
                ENTREGADOS
              </NavLink>
        </nav>
        <div className="linea"></div>
      </div>
    </div>
  );
};
