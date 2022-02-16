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

export const Cocinero = () => {
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
  const [orders, setOrders] = useState([]);

  const veamosOnsnap = async () => {
    const data = await onSnapshot(collection(db, "ordenes"), (snapshot) => {
      console.log(snapshot);
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setOrders((anterior) => {
            return [
              ...anterior,
              { ...change.doc.data(), id: change.doc.id, tipo: change.type },
            ];
          });
        }
        if (change.type === "modified") {
          setOrders((anterior) => {
            const indexModif = anterior.findIndex(
              (obj) => obj.id === change.doc.id
            );
            let objModif = anterior[indexModif];
            objModif = {
              ...change.doc.data(),
              id: change.doc.id,
              tipo: change.type,
            };
            return [
              ...anterior.filter((obj, index) => index !== indexModif),
              objModif,
            ];
          }); //[...orders.filter((obj,index) => index!==indexModif),objModif])
        }
        if (change.type === "removed") {
          setOrders((anterior) => {
            const indeRemov = anterior.findIndex(
              (obj) => obj.id === change.doc.id
            );
            return [...anterior.filter((obj, index) => index !== indeRemov)];
          }); //[...orders.filter((obj,index) => index!==indeRemov)])
        }
      });
    });
    return data;
  };

  useEffect(() => {
    veamosOnsnap();
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
  const cambioEstadoOrden = (e) => {
    updateDoc(doc(db, "ordenes", e.target.name), { estado: true, horaEntrega:horaAc });
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
