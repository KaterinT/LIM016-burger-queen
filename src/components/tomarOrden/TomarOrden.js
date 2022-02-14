import { useState } from "react";
import { Factura } from "./factura/Factura";
import { Menu } from "./menu/Menu";
import { Modal } from "./modalExtras/modal";
import "./tomarOrden.scss";
import { obtenerDataById, subirPedidoFirestore } from "../../data/listaProductos";

export const TomarOrden = () => {
  const [estadoModal, setEstadoModal] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [identificador, setId] = useState("");

  const moreClick = (e) => {
    obtenerDataById(e.target.name, "Menu").then((pedido) => {
      if (pedido.descripcion === "Hamburguesa simple" || pedido.descripcion === "Hamburguesa doble") {
        
        setEstadoModal(true);
        setId(e.target.name);

      } else {

        const p = pedidos.find((obj) => obj.id === e.target.name);
        if (p === undefined) {
          setPedidos([...pedidos, { ...pedido, count: 1,id:e.target.name }]);
        } else {
          const index =pedidos.findIndex((obj) => obj.id===e.target.name)
          let agregarCount=pedidos[index]
          agregarCount.count= agregarCount.count+1;
          setPedidos([...pedidos])
        

        }
      }
    });
  };

  const confirmarModal = (arrayExtras) => {
    const [burger, adicional] = arrayExtras;// burger sea requerido estrictamente y el adicional y ponerle condiciones
    obtenerDataById(identificador, "Menu").then((pedido) => {
      const p = pedidos.find((obj) => obj.id === pedido.id + burger + adicional);
      
      if (p === undefined) {
        setPedidos([...pedidos,
            {
              ...pedido,
              count: 1,
              descripcion: pedido.descripcion + " " + burger + " " + adicional,
              id: pedido.id + burger + adicional,
              precio:pedido.precio+1
            },
          ]);
      } else {
        const index =pedidos.findIndex((obj) => obj.id===pedido.id+burger+adicional)
        let agregarCount=pedidos[index];
        agregarCount.count=agregarCount.count+1;
        setPedidos([...pedidos]);
      }
    });
    setEstadoModal(false);
  };

  const cancelarModal = () => {
    setEstadoModal(false);
  };


  const subirDataPedido = () =>{
    const cliente=document.getElementById('cliente').value;//requerido estrictamente
    const mesa=document.getElementById('numeroMesa').value;//requerido estrictamente
    const pedidoToSubir ={
      cliente:cliente,
      mesa:mesa,
      pedidosArray:pedidos,
      hora:'nose',
      estado:false,
    }
    subirPedidoFirestore(pedidoToSubir);
    setPedidos([]);
  };

  const cancelarPedido = () => {
    setPedidos([])
  }

  return (
    <>
      <div className="containert">
        <div className="boxTomarOrden">
          <h4>Mesero</h4>
          <div className="boxTomarOrdenMenu">
            <div className="boxTomarOrdenMenu2">
              <Menu moreClick={moreClick} />
              <Factura factura={pedidos} />
            </div>
            <div className="boxBtnTomarOrden">
              <button onClick={cancelarPedido}>CANCELAR</button>
              <button onClick={subirDataPedido}>CONFIRMAR</button>
            </div>
          </div>
        </div>
      </div>
      {estadoModal === true && (
        <Modal confirmarModal={confirmarModal} cancelarModal={cancelarModal} />
      )}
    </>
  );
};
