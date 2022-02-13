  
  export const TemplatePedidos = ({objeto, cambioEstado}) => {
    
    return <>
            <div className="infoMesa"> <b>Mesa: </b>{objeto.mesa}</div>
            <div className="infoPedido">
                <p><b>Hora:</b> {objeto.hora}</p>
                <p><b>Cliente: </b> {objeto.cliente}</p>
                <ul>
                  <b>Pedidos: </b>
                  {objeto.pedidosArray.map((e) => {
                    return (<li key={objeto.id+e.count+e.descripcion.replace(' ','')}>
                              {e.count+''+e.descripcion}
                            </li>)
                  } )}
                </ul>
                {objeto.estado===false&&(<button name={objeto.id} onClick={cambioEstado}>Listo?</button>)}
            </div>
           </>
  }