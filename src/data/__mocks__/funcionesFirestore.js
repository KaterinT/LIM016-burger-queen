// aqui generaremos un array de pedidos , simularemos las data de la coleccion 'ordenes'
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
const menu = []

export const db = jest.fn();

export const collection = jest.fn((_db_, nameCol) => {
    if(nameCol==='ordenes'){
        return ordenes;
    }else if(nameCol==='Menu'){
        return menu;
    }else{
        return undefined
    }
});

export const doc = jest.fn((_db_, nameCol, identificador) => {
    if(nameCol==='ordenes'){
        const objById = ordenes.find((obj) => obj.id===identificador);
        return objById;
    }else if(nameCol==='Menu'){
        const objById = menu.find((obj) => obj.id===identificador);
        return objById;
    }else{
        return undefined
    }
})

export const updateDoc = jest.fn((docRef, actualizacion) => ({...docRef,...actualizacion}))

export const actualizarDoc = jest.fn((nameColection, idDoc, actualizacion) => {
    const docRef= doc(db, nameColection,idDoc);
    const cambio=updateDoc(docRef,actualizacion)
    return console.log(cambio);
  })

export const obtenerDataFirestore =jest.fn((nameCollection)=>Promise.resolve([{
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
  ]))