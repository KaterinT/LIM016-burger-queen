import { db } from "../firebase.config";
import { getDocs, collection } from "firebase/firestore"


const colleccionRef = collection(db,'ordenes');
export const obtenerDataOrdenes =() => {
  const array = getDocs(colleccionRef).then((arrayData) => {
    let arrayOrdenes = [];
    arrayData.forEach((docs) => {
        arrayOrdenes.push({...docs.data(), id:docs.id});
      });
      return arrayOrdenes
  });
  return array
} 



export const items=[
  {
    id:1,
    title:"Café americano",
    price:7,
    category:"Desayuno",
    imagen:'../imagenes/cafeAmericano.jpg'
  },
  {
    id:2,
    title:"Café con leche",
    price:7,
    category:"Desayuno",
    imagen:'../imagenes/cafeConLeche.jpg'
  },
  {
    id:3,
    title:"Sandwich de jamón y queso",
    price:10,
    category:"Desayuno",
    imagen:'../imagenes/sadwishJamonYQueso.webp'
  },
  {
    id:4,
    title:"Jugo de frutas natural",
    price:7,
    category:"Desayuno",
    imagen:'../imagenes/jugoFrutas.jpg'
  },
  {
    id:5,
    title:"Hamburguesa simple",
    price:10,
    category:"Kids",
    imagen:'../imagenes/hamburguesaSimple.webp'
  },
  {
    id:6,
    title:"Hamburguesa doble",
    price:15,
    category:"Kids",
    imagen:'../imagenes/hamburguesaDoble.webp'
  },
  {
    id:7,
    title:"Papas fritas",
    price:5,
    category:"Kids",
    imagen:'../imagenes/papasFrita.webp'
  },
  {
    id:8,
    title:"Aros de cebolla",
    price:5,
    category:"Kids",
    imagen:'../imagenes/arosCebolla.jpg'
  },
  {
    id:9,
    title:"Agua 500ml",
    price:5,
    category:"Bebidas",
    imagen:'../imagenes/agua500ml.webp'
  },
  {
    id:10,
    title:"Agua 750ml",
    price:7,
    category:"Bebidas",
    imagen:'../imagenes/agua750ml.webp'
  },
  {
    id:11,
    title:"Bebida/gaseosa 500ml",
    price:7,
    category:"Bebidas",
    imagen:'../imagenes/gaseosaPepsi500ml.jpg'
  },
  {
    id:12,
    title:"Bebida/gaseosa 750ml",
    price:10,
    category:"Bebidas",
    imagen:'../imagenes/gaseosaPepsi750ml.jpg'
  }
]