import './productos.scss'
// import cafeAmericano from '../../../imagenes/cafeAmericano.jpg'
// import {Categories} from '../../../data/listaProductos.js'
// import { useState } from 'react';

// export const getByCategories = (category) => console.log(Categories.filter ((prod) => (prod.category===category))) 
// import imagenProducto from '../../../imagenes/agua750ml.jpg' 
export const Productos = ({items}) => {
  return (
    <div className='boxProductos'>
      {items.map((menuItem) => {
        const{id,descripcion,precio,imagen} = menuItem;

        return (
        <div key={id}> 
          <div  className="boxProdUnidad" >
            <div className="boxDescripcionProd">
              <div  className="descripcionProd">
                <p>{descripcion}</p>
                <p>S/{precio}.00</p>
              </div>
              <div className="btnAgregar">
                <button>
                  Agregar
                </button>
              </div>
            </div>
            <div className="boxImagenProd">
              <img src={imagen} alt={descripcion} />
            </div>
          </div>
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