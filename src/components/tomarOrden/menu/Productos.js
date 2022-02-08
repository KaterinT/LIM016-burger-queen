import './productos.scss'
// import cafeAmericano from '../../../imagenes/cafeAmericano.jpg'
import {Categories} from '../../../data/listaProductos.js'
import { useState } from 'react';

// export const getByCategories = (category) => console.log(Categories.filter ((prod) => (prod.category===category))) 

export const Productos = ({items}) => {
  return (
    <div className='boxProductos'>
      {items.map((menuItems) => {
        const{id, title, price,category,image} = menuItems;
        return (
        <div key={id}> 
        <div  className="boxProdUnidad" >
          <div className="boxDescripcionProd">
            <div  className="descripcionProd">
              <p>{title}</p>
              <p>S/{price}.00</p>
            </div>
            <div className="btnAgregar">
              <button>
                Agregar
              </button>
            </div>
          </div>
          <div className="boxImagenProd">
            <img src={image} alt={title} />
          </div>
        </div>
        {/* <div className="boxProdUnidad">
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
        </div> */}
        </div>)
      })}
     
      {/* <div className="boxProdUnidad">
        
      </div>
      <div className="boxProdUnidad">

      </div>
      <div className="boxProdUnidad">
        
      </div> */}
    </div>
  );
};