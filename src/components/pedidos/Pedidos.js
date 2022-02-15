import './pedidos.scss';
import { useEffect, useState } from 'react';
import { eliminarDocFirestore, obtenerDataFiltrada, obtenerDataFirestore } from '../../data/listaProductos';

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

const [ordenesListas, setOrdenes]=useState([]);

/* const obtenerOrdenesListas = async () => {
  const ordenes = await obtenerDataFiltrada('ordenes','estado',true);
  setOrdenes(ordenes);
} */
/* 
useEffect(() => {
  return () =>{
    setOrdenes([])
  }

},[])

useEffect(() => {
  setOrdenes(ordersListas.filter((obj) => obj.estado===true))

},[ordersListas]) */
/* 
useEffect(() => {
  obtenerOrdenesListas();
},[ordenesListas]) */

const entregarPedido = (e) => {
  eliminarDocFirestore(e.target.name,'ordenes')
}

  return <>
          <p className="horaAc">{horaAc}</p>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            {ordenesListas!==undefined&&(<TemplatePedidosListos pedidosListos={ordenesListas} entregarPedido={entregarPedido} />)}
            
          </ul>
         </>
};