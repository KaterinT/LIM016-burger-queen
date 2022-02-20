import './pedidos.scss';
import { eliminarDocFirestore } from '../../data/listaProductos';
import { TemplatePedidosListos } from "./templatesPedidos";

const entregarPedido = (id) => {
  eliminarDocFirestore(id,'ordenes')
}

export const Pedidos = ({orders,horaAc }) => {

  console.log(orders);

  return <>
          <p className="horaAc">{horaAc}</p>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            <TemplatePedidosListos data-testid="templatePedidos"pedidosListos={orders.filter((obj) => obj.estado===true)} entregarPedido={entregarPedido} />)
          </ul>
         </>
};
 