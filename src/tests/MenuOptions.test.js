import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MenuOptions } from "../components/tomarOrden/menu/MenuOptions";


describe('Empezaremos a testear las opciones del Menu',()=>{
    beforeAll((done) => {
        document.body.innerHTML = '';
        done();
      });
    afterEach(cleanup);
    let categoryMensaje;
    const setCurrentCategory=(category)=>{
        categoryMensaje='Estamos en la categoria '+category;
    }
    it('Deberian aparecer 3 botones:Desayuno, burgers y bebidad',() => {
        render(<MenuOptions/>);
        expect(screen.getAllByRole('button').length).toBe(3)
    })
    it('Deberiamos estar en la categoria desayuno al darle click a su boton',() => {
        render(<MenuOptions setCurrentCategory={setCurrentCategory}/>);
        fireEvent.click(screen.getByText('Desayuno'))
        expect(categoryMensaje).toBe('Estamos en la categoria Desayuno')
    })
})