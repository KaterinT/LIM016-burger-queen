import "./cocinero.scss";
import React, { useEffect, useState } from "react";
import { veamos } from "../../data/listaProductos";
import { TemplatePedidos, PedidoEstadoFalse } from "./BttnListo";

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
 Aqui empieza la vista COCINERO
>>>>>>>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>< */

export const Cocinero = () => {

  const [render, setRender] = useState();

  useEffect(() => {
    veamos().then((arrayObjetos2) => {
      const arrayObjetosF = arrayObjetos2.filter((e) => e.estado === false);
      setRender((hereRender) => {
        hereRender = arrayObjetosF.map((objeto) => {//array filtrado
          return <div key={objeto.id} id={objeto.id} className='pedidos'> 
                    <PedidoEstadoFalse objeto={objeto} />
                </div>;
        });
        return hereRender
      })
    })
  },[])

  const handleToDo = ({currentTarget}) => {
    // Agregando estilos a los botones seleccionados
    currentTarget.classList.add("clicked");
    currentTarget.classList.remove("no-clicked");
    document.getElementById("done").classList.add("no-clicked");
    document.getElementById("done").classList.remove("clicked");

    veamos().then((arrayObjetos2) => {
      const arrayObjetosF = arrayObjetos2.filter((e) => e.estado === false);      
      setRender((hereRender) => {
        hereRender = arrayObjetosF.map((objeto) => {//array filtrado
          return <div key={objeto.id} id={objeto.id} className='pedidos'> 
                    <PedidoEstadoFalse objeto={objeto} />
                </div>;
        });
        return hereRender
      })
    })
  };

  const handleDone = ({currentTarget}) => {
    // Agregando estilos a los botones seleccionados
    currentTarget.classList.add("clicked");
    currentTarget.classList.remove("no-clicked");
    document.getElementById("toDo").classList.add("no-clicked");
    document.getElementById("toDo").classList.remove("clicked");
   
    // la funcion veamos se renombrara y se sacara de la coleccion 'ordenes'
    veamos().then((arrayObjetos2) => {
      const arrayObjetosT = arrayObjetos2.filter((e) => e.estado === true);
      setRender((hereRender) => {
        hereRender = arrayObjetosT.map((objeto) => { // aqui reemplazaremos arrayObjetos2 por el array filtrado
          return (
            <div key={objeto.id} id={objeto.id} className='pedidos'>
              <div className="infoMesa"> <b>Mesa: </b>{objeto.mesa}</div>
              <div className="infoPedido">
                <TemplatePedidos objetoPedido={objeto} />
              </div>
            </div>
          );
        });
        return hereRender;
      });
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
      <section id="eventosChef">{render}</section>
    </div>
  );
};
