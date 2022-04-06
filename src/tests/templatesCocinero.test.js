/*eslint-disable */
import React from "react";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { TemplatePedidos } from "../componentes/cocinero/templatesCocinero";
// import ReactTestUtils, { renderIntoDocument } from 'react-dom/test-utils';

describe('Prueba del template de los pedidos al cocinero', () => {
    beforeAll((done) => {
        document.body.innerHTML = '';
        done();
      });
    afterEach(cleanup)
    
    const arrayObj = [{
        id:1,
        estado:true,
        cliente: 'Yum',
        mesa:8,
        pedidosArray: [{count:3, descripcion: 'Hamburguesa doble'}],
        hora: '2:34:45pm'
    },
    {
        id:2,
        estado:false,
        cliente: 'Yumari',
        mesa:8,
        pedidosArray: [{count:3, descripcion: 'Cafe Americano'}],
        hora: '3:38:45am'
    }]

    const cambioEstado= (id) => {
        const index= arrayObj.findIndex((element)=>element.id===id);
        let cambiarEstado=  arrayObj[index];
        cambiarEstado.estado=true;
    }

    it('Deberia estar el boton en el document cuaando estado es false',  () => {
        render(<TemplatePedidos objeto={arrayObj[1]}/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })

    it('Deberia encontrar el pedido 3 Hamburguesa doble, Yum y 8 en el documento', () => {
        render(<TemplatePedidos objeto={arrayObj[0]}/>);

        expect(screen.getByText('3Hamburguesa doble')).toBeInTheDocument();
        expect(screen.getByText('Yum')).toBeInTheDocument();
        expect(screen.getByText(8)).toBeInTheDocument();
    })
    it('Deberiamos simular el click del boton', () => {
        render(<TemplatePedidos objeto={arrayObj[1]} cambioEstado={cambioEstado}/>);
        fireEvent.click(screen.getByRole('button'));
        expect(arrayObj[1].estado).toBeTruthy();
    })

})