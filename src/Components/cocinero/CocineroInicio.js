import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import { TemplatePedidos } from "./templatesCocinero";
import { updateDoc, doc} from "firebase/firestore";
import { db } from "../../firebase.config";
import { actualizarDoc } from "../../data/listaProductos";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = ({orders,horaAc}) => {
  
  const [ordenesFiltradas, setOrdenesFilter] = useState();
  const [[bttnToDo, bttnDone], setNameClass] = useState(["clicked","no-clicked"]);
  const [estadoOrdenes, setEstado] = useState(false);
  

  useEffect(() => {
    return () => {
      setOrdenesFilter([]);
    };
  }, []);

  useEffect(() => {
    setOrdenesFilter(orders.filter((obj) => obj.estado === estadoOrdenes));
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
    actualizarDoc('ordenes',id,{ estado: true, horaEntrega:horaAc });
    //updateDoc(doc(db, "ordenes",id), { estado: true, horaEntrega:horaAc });
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
        {ordenesFiltradas !== undefined &&
          ordenesFiltradas.map((objeto) => (
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
