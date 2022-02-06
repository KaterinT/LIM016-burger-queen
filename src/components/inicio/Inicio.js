// import React from "react";
import {useNavigate}  from 'react-router-dom'
// import ReacDOM from "react-dom";
import './inicio.scss'

export const Inicio = () => {

  const navigate = useNavigate();

  const handleMesero = () => {
    navigate('/tomarorden',{
      replace:true
    });
  }

  const handleCocinero = () => {
    navigate('/cocinero',{
      replace:true
    });
  }

  return (
    <div className="container">
      <div className="container-title">
        <h1>
          Original Taste
        </h1>
        <h2>BURGER</h2>
      
        <div className="button_options">
          <button  onClick={handleCocinero} type="button" className="btn-orden">
            COCINERO
          </button>
          <button onClick={handleMesero} type="button" className="btn-chef">
            MESERO
          </button>
        </div>
      </div>
    </div>

  );
};

