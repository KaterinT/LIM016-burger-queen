import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Menu } from "../componentes/tomarOrden/menu/Menu";

const menuIt= [{
    id:1,
    descripcion:"Café americano",
    price:7,
    category:"Desayuno",
    imagen:''
  },
  {
    id:2,
    descripcion:"Sandwich de pollo",
    price:7,
    category:"Burger",
    imagen:''
  }
  ]
jest.mock('../data/funcionesFirestore')
jest.mock('../componentes/tomarOrden/menu/Productos',() => ({ Productos: ({menuItems=menuIt, moreClick}) => {
    console.log(menuItems)
    return <div>{menuItems.map((item) =>
    {
        return <div key={item.id}>
            <p>item.descripcion</p>
            <button onClick={moreClick}>BotonMoreClick</button>
            </div>
    })}
    </div>
} }) );

jest.mock('../componentes/tomarOrden/menu/MenuOptions',() => ({ MenuOptions: ({setCurrentCategory}) => {
    return (<div>
        <button onClick={setCurrentCategory('Desayuno')}>Boton Desayuno</button>
    </div>)
} }) );

/* const obtenerDataFirestore =jest.fn((nameCollection)=>Promise.resolve([{
    id:1,
    descripcion:"Café americano",
    price:7,
    category:"Desayuno",
    imagen:''
  },
  {
    id:2,
    descripcion:"Sandwich de pollo",
    price:7,
    category:"Burger",
    imagen:''
  }
  ])) */
const moreClick=jest.fn();
describe('Empecemos a testear Menu', () => {
    beforeAll((done) => {
        document.body.innerHTML = '';
        done();
      });
    afterEach(cleanup);
    it('Deberia',()=>{
        render(<Menu moreClick={moreClick}/>)
        fireEvent.click(screen.getByText('Boton Desayuno'));
        expect(screen.getByText('Cafe americano')).toBeInTheDocument()

    })
})
