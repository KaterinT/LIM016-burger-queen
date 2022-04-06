/*eslint-disable */
import './cocinero.scss';
import React, { useEffect, useState } from 'react';
import { TemplatePedidos } from './templatesCocinero';
import { actualizarDoc } from '../../data/funcionesFirestore';

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export function Cocinero({ orders, horaAc }) {
  const [ordenesFiltradas, setOrdenesFilter] = useState();
  const [estadoOrdenes, setEstado] = useState(false);

  useEffect(() => () => {
    setOrdenesFilter([]);
  }, []);

  useEffect(() => {
    setOrdenesFilter(orders.filter((obj) => obj.estado === estadoOrdenes));
  }, [estadoOrdenes, orders]);

  const handleToDo = () => {
    setEstado(false);
  };

  const handleDone = () => {
    setEstado(true);
  };
  const cambioEstadoOrden = (id) => {
    actualizarDoc('ordenes', id, { estado: true, horaEntrega: horaAc });
  };

  return (
    <div id="cocinero">
      <p className="horaAc">{horaAc}</p>
      <h4>Cocinero</h4>
      <section className="pedidos-al-chef">
        <button onClick={handleToDo} id="toDo" className={(estadoOrdenes === false) ? 'clicked' : 'no-clicked'}>
          <b>Por Preparar</b>
        </button>
        <button onClick={handleDone} id="done" className={(estadoOrdenes === true) ? 'clicked' : 'no-clicked'}>
          <b>Preparados</b>
        </button>
      </section>
      <section id="eventosChef">
        {ordenesFiltradas !== undefined
          && ordenesFiltradas.map((objeto) => (
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
}
