// import React from 'react'    -->Con la nueva actualización de react no es necesario importar React
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate=useNavigate();

    const handleLogout = () => {
        navigate('/login',{
            replace:true
        }); //navigate me permite 
    }

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
                        
                        to="/login" onClick={handleLogout}
                    >
                        CERRAR SESIÓN
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}