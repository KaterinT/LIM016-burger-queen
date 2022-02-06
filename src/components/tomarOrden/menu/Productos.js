import './productos.scss'
import cafeAmericano from '../../../imagenes/cafeAmericano.jpg'

export const Productos = () => {
  return (
    <div className='boxProductos'>
      <div className="boxProdUnidad">
        <div className="boxDescripcionProd">
          <div className="descripcionProd">
            <p>Café americano</p>
            <p>S/ 5.00</p>
          </div>
          <div className="btnAgregar">
            <button>
              Agregar
            </button>
          </div>
        </div>
        <div className="boxImagenProd">
          <img src={cafeAmericano} alt="" />
        </div>
      </div>
      <div className="boxProdUnidad">
        <div className="boxDescripcionProd">
          <div className="descripcionProd">
            <p>Café con leche</p>
            <p>S/ 7.00</p>
          </div>
          <div className="btnAgregar">
            <button>
              Agregar
            </button>
          </div>
        </div>
        <div className="boxImagenProd">
          <img src={cafeAmericano} alt="" />
        </div>
      </div>
      <div className="boxProdUnidad">
        <div className="boxDescripcionProd">
          <div className="descripcionProd">
            <p>Sandwich de jamón y queso</p>
            <p>S/ 10.00</p>
          </div>
          <div className="btnAgregar">
            <button>
              Agregar
            </button>
          </div>
        </div>
        <div className="boxImagenProd">
          <img src={cafeAmericano} alt="" />
        </div>
      </div>
      <div className="boxProdUnidad">
        <div className="boxDescripcionProd">
          <div className="descripcionProd">
            <p>Jugo de frutas natural</p>
            <p>S/ 7.00</p>
          </div>
          <div className="btnAgregar">
            <button>
              Agregar
            </button>
          </div>
        </div>
        <div className="boxImagenProd">
          <img src={cafeAmericano} alt="" />
        </div>
      </div>
      {/* <div className="boxProdUnidad">
        
      </div>
      <div className="boxProdUnidad">

      </div>
      <div className="boxProdUnidad">
        
      </div> */}
    </div>
  );
};