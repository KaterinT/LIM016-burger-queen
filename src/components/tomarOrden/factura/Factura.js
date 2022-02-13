import './factura.scss'
import tacho from '../../../imagenes/contenedor.png'
import { useEffect, useState } from 'react';

export const Factura = ({pedido}) => {

    return (
    <div className="boxFactura">
      <div className="boxDescripcion">
        <div className="boxMesaCliente">
          <div className="BoxMC">
            <div className="boxnombreCliente">
              <h3>CLIENTE</h3>
              <input type="text" />
            </div>
            <div className="boxnumMesa">
              <h3>MESA</h3>
              <input type="text" />
            </div>
          </div>
          
        </div> 
        <div className="boxItemOrden">
          <p>Cantidad</p>
          <p>Item</p>
          <p>Precio C/U</p>
        </div>
        <div className="boxPedidos">
        {pedido.length > 0 && pedido.map((element) => (
        <div key={element.id} className="boxDescripcionCadaItemOrden">
          <section className="descripcionOrdenItem">
            <p>2</p>
          </section><section className="descripcionOrdenItem">
            <p>{element.descripcion}</p>
          </section><section className="descripcionOrdenItem">
            <p>S/ {element.precio}.00</p>
          </section>
          <section className="descripcionOrdenItem">
            <img src={tacho} alt="" />
          </section>
        </div>
        ))}
        </div>

      </div>
      <div className="boxTotal">
        <p className="boxTotalDesc">TOTAL</p>
        <span className="boxTotalDesc">0</span>
      </div>
    </div>

  );  
};