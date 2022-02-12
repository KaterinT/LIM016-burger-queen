import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import { obtenerDataFirestore } from "../../data/listaProductos";
import { TemplatePedidos } from "./templatesCocinero";
import { updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebase.config";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = () => {
  
  const [ordenes, setOrdenes] = useState();
  const [[bttnToDo, bttnDone], setNameClass]=useState(['clicked','no-clicked']);
  const [estadoOrdenes, setEstado] =useState(false) 

  const recibirOrdenes= async (estadoBoleano) => {
    const arrayData =await obtenerDataFirestore('ordenes');
    setOrdenes(arrayData.filter((orden) => orden.estado === estadoBoleano));
  };
   useEffect(() => {
    return () => {
      setOrdenes([]);
    };
   },[])

  useEffect(() => {
    recibirOrdenes(estadoOrdenes);    
  },[estadoOrdenes,ordenes])

  const handleToDo = () => {
    setNameClass(['clicked','no-clicked']);
    setEstado(false)
  };

  const handleDone = () => {
    // Agregando estilos a los botones seleccionados
    setNameClass(['no-clicked','clicked']);
    setEstado(true)
    
  };
  const  cambioEstadoOrden = (e) => {
    updateDoc(doc(db,'ordenes',e.target.name),{estado:true});
    setEstado(false)
  };

  return (
    <div id="cocinero">
      <h4>Cocinero</h4>
      <section className="pedidos-al-chef">
        <button onClick={handleToDo} id="toDo" className={bttnToDo}>
          <b>Por Preparar</b>
        </button>
        <button onClick={handleDone} id="done" className={bttnDone}>
          <b>Preparados</b>
        </button>
      </section>
      <section id="eventosChef">
        {ordenes!==undefined&&(
          ordenes.map((objeto) => <div key={objeto.id} id={objeto.id} className='pedidos'> 
                                    <TemplatePedidos objeto={objeto} cambioEstado={cambioEstadoOrden} />
                                  </div>))}
      </section>
    </div>
  );
};
