import { useState ,useEffect} from "react";
import { Factura } from "./factura/Factura";
import { Menu } from "./menu/Menu";
import { Modal } from "./modalExtras/modal";
import "./tomarOrden.scss";
import { obtenerDataById, subirPedidoFirestore } from "../../data/listaProductos";

export const TomarOrden = () => {

  const locale = 'en';
  const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update

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
  const [estadoModal, setEstadoModal] = useState(false);
  const [alarmBurger, setAlarm] = useState('noActive')
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
    console.log(adicional);
    if(burger!==''){
    obtenerDataById(identificador, "Menu").then((pedido) => {
      const p = pedidos.find((obj) => obj.id === pedido.id + burger + adicional);
      
      if (p === undefined) {
        setPedidos([...pedidos,
            {
              ...pedido,
              count: 1,
              descripcion: pedido.descripcion + " " + burger + " " + adicional,
              id: pedido.id + burger + adicional,
              precio:(adicional==='')?pedido.precio:pedido.precio+1
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
  }else{
    setAlarm('isActive')
  }
  };

  const cancelarModal = () => {
    setEstadoModal(false);
  };

  // 
  // 
  
  const subirDataPedido = () =>{
    const cliente=document.getElementById('cliente').value;//requerido estrictamente
    const mesa=document.getElementById('numeroMesa').value;//requerido estrictamente
    const pedidoToSubir ={
      cliente:cliente,
      mesa:mesa,
      pedidosArray:pedidos,
      hora: horaAc,
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
          <p className="horaAc">{horaAc}</p>
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
        <Modal confirmarModal={confirmarModal} cancelarModal={cancelarModal} alarm={alarmBurger} alarmSet={setAlarm} />
      )}
    </>
  );
};
