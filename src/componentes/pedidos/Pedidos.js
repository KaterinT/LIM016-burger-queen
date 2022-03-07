import './pedidos.scss';
import { eliminarDocFirestore, obtenerDataById, subirPedidoConId, subirPedidoFirestore } from '../../data/funcionesFirestore';
import { TemplatePedidosListos } from "./templatesPedidos";

const entregarPedido = (id) => {
  obtenerDataById(id,'ordenes').then((pedido)=>{
    console.log(pedido);
    subirPedidoConId(pedido,'entregados',pedido.id)
    eliminarDocFirestore(id,'ordenes'); 
  })
}

export const Pedidos = ({orders,horaAc }) => {


  return <>
          <p className="horaAc">{horaAc}</p>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            <TemplatePedidosListos pedidosListos={orders.filter((obj) => obj.estado===true)} entregarPedido={entregarPedido} />)
          </ul>
         </>
};
 