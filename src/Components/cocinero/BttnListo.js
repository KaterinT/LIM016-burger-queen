import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const TemplatePedidos = ({ objetoPedido }) => {
    return <>
            <p><b>Hora:</b> {objetoPedido.hora}</p>
            <p><b>Cliente: </b> {objetoPedido.cliente}</p>
            <ul>
              <b>Pedidos: </b>
              {objetoPedido.pedidosArray.map((e) => (<li key={e}>{e}</li>))}
            </ul>
          </>
  };
  
  export const PedidoEstadoFalse = ({objeto}) => {
    const  reconocimiento = (e) => {
        updateDoc(doc(db,'ordenes',e.target.name),{estado:true});
    }
    return <>
            <div className="infoMesa"> <b>Mesa: </b>{objeto.mesa}</div>
            <div className="infoPedido">
                <TemplatePedidos objetoPedido={objeto} />
                <button name={objeto.id} onClick={reconocimiento}>Listo?</button>
            </div>
           </>
  }