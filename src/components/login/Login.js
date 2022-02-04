// import React from "react";
import {useNavigate}  from 'react-router-dom'
import ReacDOM from "react-dom";
import './styles/login.scss'

export const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/',{
      replace:true
    });
  }

  return (
    <div className="container">
      <div className="container-title">
        <h1>
          Original Taste
        </h1>
        <h2>BURGUER</h2>
      
        <div className="button_options">
          <button  onClick={handleLogin} type="button" className="btn-orden">
            COCINERO
          </button>
          <button onClick={handleLogin} type="button" className="btn-chef">
            MESERO
          </button>
        </div>
      </div>
    </div>

  );
};

