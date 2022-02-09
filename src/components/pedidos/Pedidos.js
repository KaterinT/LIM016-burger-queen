// import React from "react";
// import ReacDOM from "react-dom";
import './pedidos.scss';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TemplatePedidosListos = ({pedidosListos}) => {
  return pedidosListos.map((pedido) => {
    return <li key={pedido.id}>
              <section className='pedidosListos'>
                <div>CLIENTE: {pedido.cliente}</div>
                <div>N° MESA: {pedido.mesa}</div>
                <div><button>Entregar</button></div>
              </section>
            </li>
  } )
}
const arrayObjPrueba =[ {
  id: 112233,
  hora: 3,
  cliente: "yumariTodo",
  mesa: 100,
  pedidosArray: [1, 2],
},
{
  id: 445566,
  hora: 3,
  cliente: "yumariTodo",
  mesa: 100,
  pedidosArray: [3, 4],
},
{
  id: 778899,
  hora: 3,
  cliente: "yumdo",
  mesa: 100,
  pedidosArray: [3, 4],
},
{
  id: 123321,
  hora: 3,
  cliente: "yumdo",
  mesa: 100,
  pedidosArray: [3, 4],
},
{
  id: 423324,
  hora: 3,
  cliente: "yumdo",
  mesa: 100,
  pedidosArray: [3, 4],
}];
export const Pedidos = () => {
const [estado, setEstado]= useState();

/* const boleano = (useLocation().pathname === "/pedidos") ;

useEffect(() =>{
  
  onSnapshot(collection(db,'ordenes'),(querySnapshot) => {
  let newArray =[]
  querySnapshot.docChanges().forEach((change) => {
    if (boleano===true) {
      if (change.type === 'added') {
        newArray.push({...change.doc.data(), id:change.doc.id})
      }
      if (change.type === 'modified') {
        console.log(change);
      }
      if (change.type === 'removed') {
        console.log(change);
      }
    }
  });
  setEstado((hereEStado) => {
    const arreglo = newArray.filter((e) => e.estado===true)
    return <TemplatePedidosListos pedidosListos={arreglo} />
  }) 
}) 
},[estado]) */
  return <>
          <h4>Mesero</h4>
          <ul id='listaPedidos'>
            <p>PEDIDOS LISTOS</p>
            {/* {estado} */}
            <TemplatePedidosListos pedidosListos={arrayObjPrueba} />
          </ul>
         </>
};