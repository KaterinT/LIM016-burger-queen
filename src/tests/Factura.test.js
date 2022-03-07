import { screen,cleanup, fireEvent, render } from "@testing-library/react";
import { Factura } from "../componentes/tomarOrden/factura/Factura";
describe('Render de la factura',() => {

    beforeAll((done) => {
        document.body.innerHTML = '';
        done();
      });
      afterEach(cleanup)

    const factura=[{
        id:100,
        count:2,
        descripcion:'Cafe Americano',
        precio:10,
    },{
        id:200,
        count:4,
        descripcion:'Jugo de Frutas',
        precio:7,
    }];
    const countMinus= (e) => {
        const index=factura.findIndex((obj) => obj.id===e);
        let agregarCount=factura[index]
        agregarCount.count= agregarCount.count-1;
    };
    const countPlus= (e) => {
        const index=factura.findIndex((obj) => obj.id===e);
        let disminuirCount=factura[index]
        disminuirCount.count= disminuirCount.count+1;
    };

    const eliminarItemPedido=jest.fn()

    it('Deberian aparecer los pedidos de la factura en el documento',() => {
        render(<Factura factura={factura} eliminarItemPedido={eliminarItemPedido} countMinus={countMinus} countPlus={countPlus} />)
        expect(screen.getByText('Cafe Americano')).toBeInTheDocument();
        expect(screen.getByText('Jugo de Frutas')).toBeInTheDocument();
    })

    it('Deberia descontar el pedido de la factura al clickearle a su boton minus correspondiente',() => {
        render(<Factura factura={factura} eliminarItemPedido={eliminarItemPedido} countMinus={countMinus} countPlus={countPlus} />)
        fireEvent.click(screen.getAllByAltText('minus')[0]);
        expect(factura[0].count).toBe(1);
    })

    it('Deberia agregar el pedido de la factura al clickearle a su boton plus correspondiente',() => {
        render(<Factura factura={factura} eliminarItemPedido={eliminarItemPedido} countMinus={countMinus} countPlus={countPlus} />)
        fireEvent.click(screen.getAllByAltText('plus')[1]);
        expect(factura[1].count).toBe(5);
    })
    it('Deberia reconocer el click al boton eliminar',() => {
        render(<Factura factura={factura} eliminarItemPedido={eliminarItemPedido} countMinus={countMinus} countPlus={countPlus} />)
        fireEvent.click(screen.getAllByAltText('tacho')[0]);
        expect(eliminarItemPedido).toHaveBeenCalled();
    })
})