import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import { obtenerDataOrdenes } from "../../data/listaProductos";
import { TemplatePedidos } from "./templatesCocinero";
import { updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebase.config";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = () => {
  
  const [ordenes, setOrdenes] = useState();
  const [classNameBttns, setNameClass]=useState(['clicked','no-clicked'])
  const [bttnToDo, bttnDone] =classNameBttns

  const recibirOrdenes= async (estadoBoleano) => {
    const arrayData =await obtenerDataOrdenes();
      return arrayData.filter((orden) => orden.estado === estadoBoleano);
  };

  useEffect(() => {
    async function fetchOrdenes() {
      const ordenesFalso =await recibirOrdenes(false)
      setOrdenes(ordenesFalso)
    };
    fetchOrdenes();
  },[])

  const handleToDo = () => {
    // Agregando estilos a los botones seleccionados
    setNameClass(['clicked','no-clicked'])

    async function fetchOrdenes() {
      const ordenesFalso =await recibirOrdenes(false)
      setOrdenes(ordenesFalso)
    }
    fetchOrdenes()
  };

  const handleDone = () => {
    // Agregando estilos a los botones seleccionados
    setNameClass(['no-clicked','clicked'])
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
