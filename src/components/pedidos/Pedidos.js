// import React from "react";
// import ReacDOM from "react-dom";
import './pedidos.scss';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useEffect, useState } from 'react';
import { obtenerDataFirestore } from '../../data/listaProductos';

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
  deleteDoc(doc(db,'ordenes',e.target.name))
}
  return <>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            {ordenesListas!==undefined&&(<TemplatePedidosListos pedidosListos={ordenesListas} entregarPedido={entregarPedido} />)}
            
          </ul>
         </>
};