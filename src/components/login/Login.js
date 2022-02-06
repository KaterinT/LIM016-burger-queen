// import React from "react";
import {useNavigate}  from 'react-router-dom'
import './login.scss'

export const Login = () => {

  const navigate = useNavigate();

  const handleMesero = () => {
    navigate('/tomarorden');
  }

  const handleCocinero = () => {
    navigate('/cocinero');
  }

  return (
    <div className="container">
      <div className="container-title">
        <h1>
          Original Taste
        </h1>
        <h2>BURGUER</h2>
      
        <div className="button_options">
          <button  onClick={handleCocinero} id='CocineroBttn' className="btn-chef">
            COCINERO
          </button>
          <button onClick={handleMesero} id='MeseroBttn' className="btn-orden">
            MESERO
          </button>
        </div>
      </div>
    </div>

  );
};

