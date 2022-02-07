import './factura.scss'
import tacho from '../../../imagenes/basuraLlena2.png'

export const Factura = () => {
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
        <div className="boxDescripcionCadaItemOrden">
          <section className="descripcionOrdenItem">
            <p>1</p>
          </section>
          <section className="descripcionOrdenItem">
            <p>Café con leche</p>
          </section>
          <section className="descripcionOrdenItem">
            <p>S/ 7.00</p>
            <img src={tacho} alt="" />
          </section>
        </div>
      </div>
      <div className="boxTotal">
        <p className="boxTotalDesc">TOTAL</p>
        <span className="boxTotalDesc">0</span>
      </div>
    </div>
  );
};