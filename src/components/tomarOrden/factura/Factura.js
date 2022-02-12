import './factura.scss'
import tacho from '../../../imagenes/basuraLlena2.png'

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
        {pedido.length > 0 && pedido.map((element) => (
        <div key={element.id} className="boxDescripcionCadaItemOrden">
          <section className="descripcionOrdenItem">
            <p>{element.count}</p>
          </section><section className="descripcionOrdenItem">
            <p>{element.descripcion}</p>
          </section><section className="descripcionOrdenItem">
            <p>S/ {element.precio}.00</p>
            <img src={tacho} alt="" />
          </section>
        </div>
        ))}
      </div>
      <div className="boxTotal">
        <p className="boxTotalDesc">TOTAL</p>
        <span className="boxTotalDesc">0</span>
      </div>
    </div>

  );  
};

// export const Factura = ({pedido}) => {
//   return (
//     <div className='boxFactura'>
//       <div classNameName="boxDescripcion">
//         <div classNameName="BoxMC">
//           <div classNameName="boxnombreCliente">
//             <h3>CLIENTE</h3>
//             <input type="text" />
//           </div>
//           <div classNameName="boxnumMesa">
//             <h3>MESA</h3>
//             <input type="text" />
//           </div>
//         </div>
//       </div>
      
//       <table className="table table-borderless factura">
//         <thead>
//           <tr>
//             <th>Cant.</th>
//             <th>Descripcion</th>
//             <th>Precio Unitario</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>Clases de Cha-Cha-Cha</td>
//             <td>3,000.00</td>
//           </tr>
//           <tr>
//             <td>3</td>
//             <td>Clases de Salsa</td>
//             <td>4,000.00</td>
//           </tr>
//         </tbody>
//         <tfoot>
//           <tr>
//             <th></th>
//             <th>Total Factura</th>
//             <th>RD$15,000.00</th>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// };