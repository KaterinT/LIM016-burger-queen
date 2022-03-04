export const TemplatePedidosListos = ({pedidosListos, entregarPedido}) => {
  // console.log(pedidosListos);
  return pedidosListos.map((pedido) => {
    return <li key={pedido.id}>
              <section className='pedidosListos'>
                <div>CLIENTE: {pedido.cliente}</div>
                <div >N° MESA: {pedido.mesa}</div>
                <div><button data-testid="clickEntregarPedido" onClick={() => entregarPedido(pedido.id)}>Entregar</button></div>
              </section>
            </li>
  } )
}