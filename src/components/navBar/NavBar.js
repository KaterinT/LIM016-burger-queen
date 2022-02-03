// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/login"
            >
                LOGIN
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        
                        className={({isActive}) => 'Nav-item nav-link' + (isActive ? 'active' : '')}
            
                        to="/mesero"
                    >
                        MESERO
                    </NavLink>

                    <NavLink 
                        
                        className={({isActive}) => 'Nav-item nav-link' + (isActive ? 'active' : '')}
                        
                        to="/pedidos"
                    >
                        PEDIDOS
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => 'Nav-item nav-link' + (isActive ? 'active' : '')}
                        
                        to="/login"
                    >
                        CERRAR SESIÓN
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}