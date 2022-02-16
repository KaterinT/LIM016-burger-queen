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
    console.log(identificador);
    if(burger!==''){
    obtenerDataById(identificador, "Menu").then((pedido) => {
      const p = pedidos.find((obj) => obj.id === pedido.id + burger + adicional);
      console.log(p);
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
    setAlarm('noActive')
    setEstadoModal(false);
  };

  const subirDataPedido = () =>{
    let cliente=document.getElementById('cliente').value;//requerido estrictamente
    let mesa=document.getElementById('numeroMesa').value;//requerido estrictamente
    if (cliente==="" || mesa==="" ) {
      console.log('cliente y/o mesa vaxio')
    }else if (pedidos.length=== 0) {
      console.log('Orden Vacia')
    }else {
      const pedidoToSubir ={
        cliente:cliente,
        mesa:mesa,
        pedidosArray:pedidos,
        hora: horaAc,
        estado:false,
      }
      subirPedidoFirestore(pedidoToSubir);
      setPedidos([]);
    }
    // cliente=document.getElementById('cliente').reset();//requerido estrictamente
    // mesa=document.getElementById('numeroMesa').reset();//req
  };

  const cancelarPedido = () => {
    setPedidos([])
  }


  const eliminarItemPedido = (e) =>{
    const padre =e.target.parentNode.parentNode;
    const indexE = pedidos.findIndex((obj) => obj.id===padre.id);
    setPedidos((anterior) => {
      return [...anterior.filter((obj,index) => index !== indexE)]
    })
    console.log(padre.id);
  }

  const countPlus = (e) =>{
    const padre =e.target.parentNode.parentNode;
    const indexE = pedidos.findIndex((obj) => obj.id===padre.id);
    let agregarCount=pedidos[indexE]
    agregarCount.count= agregarCount.count+1;
    setPedidos([...pedidos])
    console.log(indexE);
  }
  
  const countMinus = (e) =>{
    const padre =e.target.parentNode.parentNode;
    const indexE = pedidos.findIndex((obj) => obj.id===padre.id);
    let restarCount=pedidos[indexE]
    if (restarCount.count === 1) {
      setPedidos((anterior) => {
        return [...anterior.filter((obj,index) => index !== indexE)]
      })
    } else {
    restarCount.count= restarCount.count-1;
    setPedidos([...pedidos])
    console.log(padre.id);
  }}

  return (
    <>
      <div className="containert">
        <div className="boxTomarOrden">
          <p className="horaAc">{horaAc}</p>
          <h4>Mesero</h4>
          <div className="boxTomarOrdenMenu">
            <div className="boxTomarOrdenMenu2">
              <Menu moreClick={moreClick} />
              <Factura factura={pedidos} eliminarItemPedido={eliminarItemPedido} countPlus={countPlus} countMinus={countMinus}/>
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
