import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import {
  obtenerDataFiltrada,
  obtenerDataFirestore,
} from "../../data/listaProductos";
import { TemplatePedidos } from "./templatesCocinero";
import { updateDoc, doc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase.config";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = ({orders}) => {
  const locale = "en";
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const horaAc = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });

  // ****************
  const [ordenes, setOrdenes] = useState();
  const [[bttnToDo, bttnDone], setNameClass] = useState(["clicked","no-clicked"]);
  const [estadoOrdenes, setEstado] = useState(false);
  

  useEffect(() => {
    console.log(orders);
    return () => {
      setOrdenes([]);
    };
  }, []);

  useEffect(() => {
    setOrdenes(orders.filter((obj) => obj.estado === estadoOrdenes));
  }, [estadoOrdenes, orders]);

  const handleToDo = () => {
    setNameClass(["clicked", "no-clicked"]);
    setEstado(false);
  };

  const handleDone = () => {
    // Agregando estilos a los botones seleccionados
    setNameClass(["no-clicked", "clicked"]);
    setEstado(true);
  };
  const cambioEstadoOrden = (id) => {
    console.log(id);
    updateDoc(doc(db, "ordenes",id), { estado: true, horaEntrega:horaAc });
    setEstado(false);
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
        {ordenes !== undefined &&
          ordenes.map((objeto) => (
            <div key={objeto.id} id={objeto.id} className="pedidos">
              <TemplatePedidos
                objeto={objeto}
                cambioEstado={cambioEstadoOrden}
              />
            </div>
          ))}
      </section>
    </div>
  );
};
