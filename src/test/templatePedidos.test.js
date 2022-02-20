import '@testing-library/jest-dom';
// import { shallow } from 'enzyme';
import { screen,render,cleanup,fireEvent } from '@testing-library/react';
import { TemplatePedidosListos } from '../components/pedidos/templatesPedidos';
import eliminarDocFirestore from '../data/listaProductos';

// describe('Pruebas en Pedidos />' , () => {
//   test('debe mostrarse corrrect',() => {
//     const wrapper = shallow(<Pedidos /> )
//     expect(wrapper).toMatchSnapshot();
//   })
// })

// describe('prueba en <Pedidos />', () => {
  // test ('evalua si es una función', () => {
  //   expect( typeof TemplatePedidosListos ).toBe('function')
  // })
  // test ('TemplatePedidosListos debe retornar el template de descripcion de pedidos listos', () => {

  // test('debe de mostrar el mensaje con el botón de entregado',() => {
  //   const id = pedidosListos.id;
  //   const cliente = pedidosListos.cliente;
  //   const mesa = pedidosListos.mesa;
  //   const wrapper = render(<TemplatePedidosListos />)
  // })



    // console.log(TemplatePedidosListos(pedidosListos));
  // })
// })

// describe('prueba en <Pedidos />', () => {
//     test ('Debe de mostrar <TemplatePedidosListos /> correctamente', () => {
//       const entregarPedido = (id) => {
//         eliminarDocFirestore(id,'ordenes')
//       }
//       const wrapper = shallow(<TemplatePedidosListos pedidosListos={pedidosListos} entregarPedido={entregarPedido} />);

//       expect( wrapper ).toMatchSnapshot();
      
//   })

  // test('debe de mostrar el número de mesa y cliente enviado por props', () => {
  //   const entregarPedido = (id) => {
  //     eliminarDocFirestore(id,'ordenes')
  //   }
  //   const wrapper = shallow(<TemplatePedidosListos pedidosListos={pedidosListos} entregarPedido={entregarPedido} />);

  //   const textParrafo = wrapper.find('div').text();
  //   console.log(textParrafo)
  // })
// });

// test('render Pedidos',() => {
//   render(<TemplatePedidosListos pedidosListos={pedidosListos} />);
//   screen.debug()
//   const title = screen.getByText('Yum');
//   expect(title).toBeInTheDocument();
// })

describe('Prueba del template Pedidos',() => {
  beforeAll((done) => {
    document.body.innerHTML = '';
    done();
  });
  afterEach(cleanup)

  const pedidosListos = [{
    cliente: "Yum",
    estado: true,
    hora: "4:34:44 AM",
    horaEntrega: "5:28:25 AM",
    id: "XUAHw1Qzro499d4wyRHP",
    mesa: "8",
    pedidosArray: [{
      categoria: "Desayuno",
      count: 3,
      descripcion: "Café americano",
      id: "WA5QILZ0P0QqxF2w8TMe",
      imagen: "https://firebasestorage.googleapis.com/v0/b/taste-burger.appspot.com/o/menuImages%2FcafeAmericano.jpg?,alt=media&token=f5524d37-de44-4bb8-b574-8f956704b05b",
      precio: 7,
    }]
  }];

    //   const entregarPedido = (id) => {
    //   eliminarDocFirestore(id,'ordenes')
    // }

  it('Deberia estar el boton en el documento',  () => {
    render(<TemplatePedidosListos pedidosListos={pedidosListos}  />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  })

  it('Deberia encontrar el pedido el nombre del cliente y el numero de mesa en el documento', () => {
    render(<TemplatePedidosListos pedidosListos={pedidosListos} />);

    expect(screen.getByText('CLIENTE: Yum')).toBeInTheDocument();
    expect(screen.getByText('N° MESA: 8')).toBeInTheDocument();
  })

  it('Al dar click debe llamar al callback entregarPedido', () => {
    const entregarPedidoSpy = jest.fn()

    render(
      <TemplatePedidosListos pedidosListos={pedidosListos} entregarPedido={entregarPedidoSpy} />
    );
  
    fireEvent.click(screen.getByTestId('clickEntregarPedido'));

    expect(entregarPedidoSpy).toHaveBeenCalled();
  })


});



