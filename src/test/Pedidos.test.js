import '@testing-library/jest-dom';
// import { shallow } from 'enzyme';
import { render,cleanup,screen,queryByTestId } from '@testing-library/react';
import React from 'react';
import {Pedidos} from '../components/pedidos/Pedidos';
// import { eliminarDocFirestore } from '../../data/listaProductos';


// jest.mock('../components/pedidos/Pedidos', () => ({
//   TemplatePedidosListos:({pedidosListos,entregarPedido}) => {
//     // console.log(pedidosListos);
//     return pedidosListos.map((pedido) => {
//       return <li key={pedido.id}>
//                 <section className='pedidosListos'>
//                   <div>CLIENTE: {pedido.cliente}</div>
//                   <div >N° MESA: {pedido.mesa}</div>
//                   <div><button data-testid="clickEntregarPedido" onClick={() => entregarPedido(pedido.id)}>Entregar</button></div>
//                 </section>
//               </li>
//     })
//   }}));

//   jest.mock('../data/listaProductos')

// test('should do a partial mock', () => {
//   expect(TemplatePedidosListos).toBe(pedidosListos.map((pedido) => {
//     return <li key={pedido.id}>
//               <section className='pedidosListos'>
//                 <div>CLIENTE: {pedido.cliente}</div>
//                 <div >N° MESA: {pedido.mesa}</div>
//                 <div><button data-testid="clickEntregarPedido" onClick={() => entregarPedido(pedido.id)}>Entregar</button></div>
//               </section>
//             </li>
//   } ));
// });

describe('Pruebas en Pedidos />' , () => {
  const orders = [{
    cliente: "kate",
    estado: true,
    hora: "6:16:38 PM",
    horaEntrega: "10:51:48 PM",
    id: "yWI4JI2qPIVL6AYB9SQ4",
    mesa: "1",
    pedidosArray: [{
      categoria: "Desayuno",
      count: 1,
      descripcion: "Sanwich de jamón y queso",
      id: "NmiALQo2T8k63iDeJC3Q",
      imagen: "https://firebasestorage.googleapis.com/v0/b/taste-burger.appspot.com/o/menuImages%2FsandwishJamonYQueso.webp?alt=media&token=47b0aee7-1d6c-4c77-9f21-5d630969a973",
      precio: 10
    }]
  }];
  beforeAll((done) => {
    document.body.innerHTML = '';
    done();
  });
  afterEach(cleanup);

  it('debe renderizar Pedidos', () => {
    const {container} = render(<Pedidos orders={orders} horaAc={'6:16:38 PM'} />)
    expect(container).toMatchSnapshot();
  })

  it('Debe renderizarse el texto en h4', () => {
    render(<Pedidos orders={orders} />);
    expect(screen.getByText('Mesero')).toBeInTheDocument()
  })
  
  it('Debe renderizarse el texto en p', () => {
    render(<Pedidos orders={orders} />);
    expect(screen.getByText('PEDIDOS LISTOS')).toBeInTheDocument()
  })

  it('Debe renderizarse correctamente Template', () => {
    render(<Pedidos orders={orders} />);
    expect(screen.getByTestId("clickEntregarPedido")).toBeTruthy()
  })
});