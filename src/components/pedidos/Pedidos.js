import React from "react";
import ReacDOM from "react-dom";


export const Pedidos = () => {
  return (
    <div className="container">
      <div className="container-title">
        <h1>
          Original Taste
        </h1>
        <h2>BURGUER</h2>
      
        <div className="button_options">
          <button type="button" className="btn-orden">
            COCINERO
          </button>
          <button type="button" className="btn-chef">
            MESERO
          </button>
        </div>
      </div>
    </div>

  );
};