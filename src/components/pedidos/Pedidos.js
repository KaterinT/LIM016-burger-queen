import './pedidos.scss';
import { useEffect, useState } from 'react';
import { eliminarDocFirestore } from '../../data/listaProductos';

const TemplatePedidosListos = ({pedidosListos, entregarPedido}) => {
  return pedidosListos.map((pedido) => {
    return <li key={pedido.id}>
              <section className='pedidosListos'>
                <div>CLIENTE: {pedido.cliente}</div>
                <div>N° MESA: {pedido.mesa}</div>
                <div><button onClick={() => entregarPedido(pedido.id)}>Entregar</button></div>
              </section>
            </li>
  } )
}

export const Pedidos = ({orders}) => {

  const locale = 'en';
  const [today, setDate] = useState(new Date()); 

  useEffect(() => {
      const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const horaAc = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric',second:'numeric' });

  //*****/


const entregarPedido = (id) => {
  eliminarDocFirestore(id,'ordenes')
}

  return <>
          <p className="horaAc">{horaAc}</p>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            <TemplatePedidosListos pedidosListos={orders.filter((obj) => obj.estado===true)} entregarPedido={entregarPedido} />)
          </ul>
         </>
};