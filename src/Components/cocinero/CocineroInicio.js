import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import { obtenerDataOrdenes } from "../../data/listaProductos";
import { PedidoEstadoFalse, TemplatePedidos } from "./templatesCocinero";
import { updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebase.config";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = () => {
  
  const [ordenes, setOrdenes] = useState();

  const recibirOrdenes= async (estadoBoleano) => {
    const arrayData =await obtenerDataOrdenes();
      const newArray = arrayData.filter((orden) => orden.estado === estadoBoleano);
        return newArray
  };

  useEffect(() => {
    async function fetchOrdenes() {
      const ordenesFalso =await recibirOrdenes(false)
      setOrdenes(ordenesFalso)
    }
    fetchOrdenes()
  },[])

  const handleToDo = ({currentTarget}) => {
    // Agregando estilos a los botones seleccionados
    currentTarget.classList.add("clicked");
    currentTarget.classList.remove("no-clicked");
    document.getElementById("done").classList.add("no-clicked");
    document.getElementById("done").classList.remove("clicked");

    async function fetchOrdenes() {
      const ordenesFalso =await recibirOrdenes(false)
      setOrdenes(ordenesFalso)
    }
    fetchOrdenes()
  };

  const handleDone = ({currentTarget}) => {
    // Agregando estilos a los botones seleccionados
    currentTarget.classList.add("clicked");
    currentTarget.classList.remove("no-clicked");
    document.getElementById("toDo").classList.add("no-clicked");
    document.getElementById("toDo").classList.remove("clicked");
   
    // la funcion obtenerDataOrdenes se renombrara y se sacara de la coleccion 'ordenes'
    obtenerDataOrdenes().then((arrayObjetos2) => {
      const ordenesTrue = arrayObjetos2.filter((orden) => orden.estado === true);
      setOrdenes(ordenesTrue);
    })
    
  };
  const  cambioEstadoOrden = (e) => {
    updateDoc(doc(db,'ordenes',e.target.name),{estado:true});
    obtenerDataOrdenes().then((arrayObjetos2) => {
      const arrayObjetosF = arrayObjetos2.filter((e) => e.estado === false);      
      setOrdenes(arrayObjetosF)
    })
  };

  return (
    <div id="cocinero">
      <h4>Cocinero</h4>
      <section className="pedidos-al-chef">
        <button onClick={handleToDo} id="toDo" className="clicked">
          <b>Por Preparar</b>
        </button>
        <button onClick={handleDone} id="done" className="no-clicked">
          <b>Preparados</b>
        </button>
      </section>
      <section id="eventosChef">
        {ordenes!==undefined&&(
          ordenes.map((objeto) => {
            if(objeto.estado===true){
              return <div key={objeto.id} id={objeto.id} className='pedidos'> 
                        <div className="infoMesa"> <b>Mesa: </b>{objeto.mesa}</div>
                        <div className="infoPedido">
                          <TemplatePedidos objetoPedido={objeto} />
                        </div>
              
                     </div>
            }else{
              return <div key={objeto.id} id={objeto.id} className='pedidos'> 
                        <PedidoEstadoFalse objeto={objeto} cambioEstado={cambioEstadoOrden} />
                      </div>}
            })//array filtrado
        )}
      </section>
    </div>
  );
};
