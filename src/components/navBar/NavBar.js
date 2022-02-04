// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import { Link, NavLink } from 'react-router-dom'
import logo from '../../imagenes/logo.png' 

export const Navbar = () => {

    return (

        <>
            <img src={logo} alt="" />
            <nav className="">
                
                <Link 
                    className="" 
                    to="/"
                >
                    LOGIN
                </Link>

                <div className="">
                    <div className="">

                        <NavLink 
                            
                            className=""
                
                            to="/tomarorden"
                        >
                            TOMAR ORDEN
                        </NavLink>

                        <NavLink 
                            
                            className=""
                            
                            to="/pedidos"
                        >
                            PEDIDOS
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
        
    )
}