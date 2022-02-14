import './pedidos.scss';
import { useEffect, useState } from 'react';
import { eliminarDocFirestore, obtenerDataFirestore } from '../../data/listaProductos';

const TemplatePedidosListos = ({pedidosListos, entregarPedido}) => {
  return pedidosListos.map((pedido) => {
    return <li key={pedido.id}>
              <section className='pedidosListos'>
                <div>CLIENTE: {pedido.cliente}</div>
                <div>N° MESA: {pedido.mesa}</div>
                <div><button name={pedido.id} onClick={entregarPedido}>Entregar</button></div>
              </section>
            </li>
  } )
}






export const Pedidos = () => {

const [ordenesListas, setOrdenes]=useState();

const obtenerOrdenesListas = async () => {
  const ordenes = await obtenerDataFirestore('ordenes');
  setOrdenes(ordenes.filter((orden) => orden.estado===true));
}


useEffect(() => {
  obtenerOrdenesListas();
  return () => {
    setOrdenes([]);
  };
},[])

useEffect(() => {
  obtenerOrdenesListas();
},[ordenesListas])

const entregarPedido = (e) => {
  eliminarDocFirestore(e.target.name,'ordenes')
}
  return <>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            {ordenesListas!==undefined&&(<TemplatePedidosListos pedidosListos={ordenesListas} entregarPedido={entregarPedido} />)}
            
          </ul>
         </>
};