import {useEffect, useState} from 'react'
import {Factura} from './factura/Factura'
import {Menu} from './menu/Menu'
import { Modal } from './modalExtras/modal';
import './tomarOrden.scss'

export const TomarOrden = () => {
  const [estadoModal,setEstadoModal] =useState(false);
  
  const [pedido, setPedido] = useState([])

  useEffect(()=>{
    console.log(pedido);
  },[pedido])

  const confirmarModal=(arrayExtras) =>{
    const [burger,adicional]=arrayExtras
    if(pedido[pedido.length-1].categoria==='Hamburguesas'){
      setPedido((listaPedidos) =>{
        const ultimoPedido=listaPedidos[listaPedidos.length-1];
        ultimoPedido.descripcion=ultimoPedido.descripcion+' '+burger;
       // ultimoPedido.burger=burger;
        ultimoPedido.adicional=adicional;
        return listaPedidos;
      })
    }
    console.log(burger,adicional);
    setEstadoModal(false)
  }

  const cancelarModal=() =>{
    setEstadoModal(false)
  }

  return <>
    <div className="containert">
      <div className="boxTomarOrden">
        <h4>Mesero</h4>
        <div className="boxTomarOrdenMenu">
          <div className="boxTomarOrdenMenu2">
            <Menu /* pedido={pedido} */ setPedido={setPedido} setEstadoModal={setEstadoModal} />
            <Factura />
          </div>
          <div className="boxBtnTomarOrden">
                <button>CANCELAR</button>
                <button>CONFIRMAR</button>
          </div>
        </div>
      </div>
    </div>
    {estadoModal===true&&(<Modal confirmarModal={confirmarModal} cancelarModal={cancelarModal}/>)}
  </>
};