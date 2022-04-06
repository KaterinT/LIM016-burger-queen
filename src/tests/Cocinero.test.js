/*eslint-disable */
import { screen, cleanup, render, fireEvent } from "@testing-library/react";
import { Cocinero } from "../componentes/cocinero/CocineroInicio";


jest.mock('../componentes/cocinero/templatesCocinero',() => ({ TemplatePedidos: ({objeto, cambioEstado}) => {
    return (<div key ={objeto.id}>
        <p>{objeto.cliente}</p>
        <button onClick={() => cambioEstado(objeto.id)}>{(objeto.estado===false)?'falso':'true'}</button>
    </div>)
} }) );
jest.mock('../data/funcionesFirestore')


describe('Empecemos a testear vista Cocinero',() => {
    const ordenes = [{
        id:1,
        data:() => {
            const objeto = {
                cliente:'usuario11',
                estado:true,
                hora:'6:14:35PM',
                mesa:1,
                pedidosArray:[
                    {descripcion:'Cafe Americano', count:2, precio:10, id:1100}
                ]
            }
            return objeto
        }
    },{
        id:2,
        data:() => {
            const objeto = {
                cliente:'usuario21',
                estado:false,
                hora:'3:10:02PM',
                mesa:1,
                pedidosArray:[
                    {descripcion:'Cafe Americano', count:4, precio:10, id:1100}
                ]
            }
            return objeto
        }
    },{
        id:3,
        data:() => {
            const objeto = {
                cliente:'usuario32',
                estado:false,
                hora:'8:10:02AM',
                mesa:2,
                pedidosArray:[
                    {descripcion:'Hamburguesa doble res', count:1, precio:15, id:2200+'res'}
                ]
            }
            return objeto
        }
    },{
        id:4,
        data:() => {
            const objeto = {
                cliente:'usuario43',
                estado:true,
                hora:'3:59:02PM',
                mesa:3,
                pedidosArray:[
                    {descripcion:'Hamurguesa simple pollo', count:2, precio:11, id:3300+'pollo'}
                ]
            }
            return objeto
        }
    }]
    const orders =ordenes.map((objeto)=> ({...objeto.data(),id:objeto.id}))
    beforeAll((done) => {
        document.body.innerHTML = '';
        done();
      });
    afterEach(cleanup);

    it('Dberiamos renderizar Cocinero' , () => {
        const {container}=render(<Cocinero orders={orders} horaAc={'2:35:00pm'}/>)
        expect(container).toMatchSnapshot();
    })
    //--------Estado inicial :falso......
    it('Deberian aparecer usuario21 y usuario32',() => {
        render(<Cocinero orders={orders} horaAc={'2:35:00pm'}/>)
        expect(screen.getByText('usuario21')).toBeInTheDocument();
        expect(screen.getByText('usuario32')).toBeInTheDocument();
    });
    it('Deberia aparecen la clase del boton Por Hacer como clicked y de Preparados como no-clicked',() => {
        render(<Cocinero orders={orders} horaAc={'2:35:00pm'}/>)
        const arrayClassname=[];
        arrayClassname.push(screen.getAllByRole('button')[0].className);
        arrayClassname.push(screen.getAllByRole('button')[1].className);

        expect(arrayClassname).toEqual(['clicked','no-clicked']);
    });
    // -------Estado true
    it('Deberia aparecen la clase del boton Por Hacer como no-clicked y de Preparados como clicked', () => {
        render(<Cocinero orders={orders} horaAc={'2:35:00pm'}/>)
        fireEvent.click(screen.getAllByRole('button')[1]);
        const arrayClassname=[];
        arrayClassname.push(screen.getAllByRole('button')[0].className);
        arrayClassname.push(screen.getAllByRole('button')[1].className);

        expect(arrayClassname).toEqual(['no-clicked','clicked']);
        expect(screen.getByText('usuario11')).toBeInTheDocument();
        expect(screen.getByText('usuario43')).toBeInTheDocument();
    })


})