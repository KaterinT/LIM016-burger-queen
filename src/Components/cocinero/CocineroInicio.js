import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import { obtenerDataFiltrada } from "../../data/listaProductos";
import { TemplatePedidos } from "./templatesCocinero";
import { updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebase.config";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = () => {

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

  // ****************
/*   const [pedidoHechos, setHechos] =useState()
  const [pedidosNoHechos, setNoHcehos] =useState() */
  const [ordenes, setOrdenes] = useState();
  const [[bttnToDo, bttnDone], setNameClass]=useState(['clicked','no-clicked']);
  const [estadoOrdenes, setEstado] =useState(false) 

  const recibirOrdenes= async (estadoBoleano) => {
    const arrayData =await obtenerDataFiltrada('ordenes','estado',estadoBoleano);
    setOrdenes(arrayData);
  };
   useEffect(() => {
    return () => {
      setOrdenes([]);
    };
   },[])

  useEffect(() => {
    recibirOrdenes(estadoOrdenes);    
  },[estadoOrdenes/*,ordenes */])

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
      <p className="horaAc">{horaAc}</p>
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
