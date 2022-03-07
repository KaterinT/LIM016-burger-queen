import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";

export const Entregados = () => {
    const [entregados,setEntregados]= useState([])
    useEffect(()=>{
        const unsubscribe=onSnapshot(collection(db, "entregados"), (snapshot) => {
          const tempOrders=[]
          snapshot.forEach((doc) =>{
            tempOrders.push({...doc.data(),id:doc.id});
          })
          //sessionStorage.setItem('ArrayDePedidos', JSON.stringify(tempOrders));
          setEntregados(tempOrders)
        });
        return () =>{
          //sessionStorage.clear();
          unsubscribe();
        }
      },[])
    return entregados.map((pedido) => {
    return <li key={pedido.id}>
    <section className='pedidosListos'>
      <div>CLIENTE: {pedido.cliente}</div>
      <div >N° MESA: {pedido.mesa}</div>
      <button>Ver detalles
      </button>
    </section>
    <section>{}</section>
  </li>})
}