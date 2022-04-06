/*eslint-disable */
import {useNavigate}  from 'react-router-dom'
import './inicio.scss'
import logo4 from '../../imagenes/logo4.png'

export const Inicio = () => {

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
        <div>
          <img src={logo4} alt="" />
        </div>
        <h1>
          Original Taste
        </h1>
        <h2>BURGER</h2>
      
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

