import {useEffect, useState} from 'react'
import {Factura} from './factura/Factura'
import {Menu} from './menu/Menu'
import { Modal } from './modalExtras/modal';
import './tomarOrden.scss'
import { obtenerDataById } from '../../data/listaProductos';

export const TomarOrden = () => {

  const [estadoModal,setEstadoModal] =useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [factura,setFactura] =useState([]);

/*   useEffect(()=>{
    if (ultimoPedido.sendToFactura===true) {
        console.log('no estaba, y se agrego');
        setPedido((listaPedidosAnterio) => {
          return [...listaPedidosAnterio,ultimoPedido]
        })      
    }
    
  },[ultimoPedido]) */

/* 

  if(!pedido.includes(ultimoPedido)){
    setPedido([...pedido,{...ultimoPedido,count:1}])
  }else{
    setPedido((ultimaListPedido) =>{
      const index=ultimaListPedido.indexOf(ultimoPedido);
      ultimaListPedido[index]={...ultimaListPedido[index], count:ultimaListPedido[index].count+1}
      return ultimaListPedido
    })
  }
 */


  const moreClick =(e) => {
    obtenerDataById(e.target.name,'Menu').then((pedido) => {
        
      if (pedido.descripcion === "Hamburguesa simple"||pedido.descripcion === "Hamburguesa doble") {
        console.log("reconoce burgers");
        setEstadoModal(true);
      } else{
        const p =pedidos.find((obj) => obj.id===pedido.id);
        if(p===undefined){
          setPedidos((ultimaListPedido)=>{
            return [...ultimaListPedido,{...pedido,count:1}]})
        }else{
          pedidos.find((obj,index) => {
            if(obj.id===pedido.id){
              console.log(index);
              setPedidos((ultimaListPedido) =>{
                ultimaListPedido[index]={...ultimaListPedido[index], count:ultimaListPedido[index].count+1}
                return ultimaListPedido
              }) 
            }
            return true
          });
          /* setPedidos((ultimaListPedido) =>{
            
            const index=ultimaListPedido.indexOf(pedido);
            ultimaListPedido[index]={...ultimaListPedido[index], count:ultimaListPedido[index].count+1}
            return ultimaListPedido
          }) */
        }
        
      }
    })
  }; 
useEffect(()=>{
  console.log(pedidos);
},[pedidos])


  const confirmarModal=(arrayExtras) =>{
    const [burger,adicional]=arrayExtras

   /*  setUltimoPedido((ultimPedido) =>{
      return {...ultimPedido,
        id: ultimPedido.id+burger+adicional,
        descripcion:ultimPedido.descripcion+' '+burger+',con  '+adicional,
        sendToFactura:true}
    }) */
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
            <Menu  moreClick={moreClick} />
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