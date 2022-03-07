import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Productos } from "../componentes/tomarOrden/menu/Productos";


const menuItems=[{
  id:1,
  descripcion:"Café americano",
  price:7,
  category:"Desayuno",
  imagen:''
},
{
  id:2,
  descripcion:"Café con leche",
  price:7,
  category:"Desayuno",
  imagen:''
}
]

describe('Empecemos con los tests de Productos', () => {
    beforeAll((done) => {
        document.body.innerHTML = '';
        done();
      });
    afterEach(cleanup);
    

    let carrito={};

    const moreClick=(e) => {
        carrito={...menuItems.find((p) => p.id=e)}
    }
    it('Deberia contener al menu Café con leche', () => {
        render(<Productos menuItems={menuItems} moreClick={moreClick}/>)
        expect(screen.getByText('Café con leche')).toBeInTheDocument()
    })
    it('Deberia contener al menu Café americano', () => {
        render(<Productos menuItems={menuItems} moreClick={moreClick}/>)
        expect(screen.getByText('Café americano')).toBeInTheDocument()
    })
    it('Deberia agregar al carrito el objeto de menuItems', () => {
        render(<Productos menuItems={menuItems} moreClick={moreClick}/>)
        fireEvent.click(screen.getAllByText('Agregar')[0]);
        expect(carrito).toEqual(menuItems[0])
    })
})