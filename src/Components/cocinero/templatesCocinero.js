

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
  
  export const PedidoEstadoFalse = ({objeto, cambioEstado}) => {
    
    return <>
            <div className="infoMesa"> <b>Mesa: </b>{objeto.mesa}</div>
            <div className="infoPedido">
                <TemplatePedidos objetoPedido={objeto} />
                <button name={objeto.id} onClick={cambioEstado}>Listo?</button>
            </div>
           </>
  }