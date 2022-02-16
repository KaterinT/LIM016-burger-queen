import './factura.scss'
import tacho from '../../../imagenes/contenedor.png'

export const Factura = ({factura,eliminarItemPedido}) => {
  let total = 0;
  for (const objeto of factura) {
    total= total+objeto.count*objeto.precio
  }


  return (
    <div className="boxFactura">
      <div className="boxDescripcion">
        <div className="boxMesaCliente">
          <div className="BoxMC">
            <div className="boxnombreCliente">
              <h3>CLIENTE</h3>
              <input type="text" id='cliente' />
            </div>
            <div className="boxnumMesa">
              <h3>MESA</h3>
              <input type="text" id='numeroMesa' />
            </div>
          </div>
          
        </div> 
        <div className="boxItemOrden">
          <p>Cantidad</p>
          <p>Item</p>
          <p>Precio C/U</p>
        </div>
        <div className='boxPedidos'>
        {factura.map((pedido)=>{
          const {id, count,descripcion,precio}=pedido;
        return (<div key={id} className="boxDescripcionCadaItemOrden" id={id}>
                <section className="descripcionOrdenItem">
                  <p>{count}</p>
                </section>
                <section className="descripcionOrdenItem">
                  <p>{descripcion}</p>
                </section>
                <section className="descripcionOrdenItem">
                  <p>S/ {precio}.00</p>
                </section>
                <section className="descripcionOrdenItem">
                  <img src={tacho} alt="" onClick={eliminarItemPedido}/>
                </section>
              </div>)})}
              </div>
      </div>
      <div className="boxTotal">
        <p className="boxTotalDesc">TOTAL</p>
        <span className="boxTotalDesc">s/{total}.00</span>
      </div>
    </div>

  );  
};