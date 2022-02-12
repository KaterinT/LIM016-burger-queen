import { db } from "../firebase.config";
import { getDocs, collection, doc, getDoc, deleteDoc } from "firebase/firestore"





export const obtenerDataFirestore =(nameColection) => {
  const colleccionRef = collection(db,nameColection);
  const array = getDocs(colleccionRef).then((arrayData) => {
    let arrayOrdenes = [];
    arrayData.forEach((docs) => {
        arrayOrdenes.push({...docs.data(), id:docs.id});
      });
      return arrayOrdenes
  });
  return array
} 
export const obtenerDataById = (id, nameColeccion) => {
  const docRef = doc(db, nameColeccion, id);
  const querySnapshot = getDoc(docRef).then((docs) => docs.data());
  return querySnapshot;
};

export const eliminarDocFirestore = (id,nameColection) => {
  deleteDoc(doc(db,nameColection,id))
}



// export const items=[
//   {
//     id:1,
//     descripcion:"Café americano",
//     price:7,
//     category:"Desayuno",
//     imagen:'.../imagenes/cafeAmericano.jpg'
//   },
//   {
//     id:2,
//     descripcion:"Café con leche",
//     price:7,
//     category:"Desayuno",
//     imagen:'../imagenes/cafeConLeche.jpg'
//   },
//   {
//     id:3,
//     descripcion:"Sandwich de jamón y queso",
//     price:10,
//     category:"Desayuno",
//     imagen:'../imagenes/sadwishJamonYQueso.webp'
//   },
//   {
//     id:4,
//     descripcion:"Jugo de frutas natural",
//     price:7,
//     category:"Desayuno",
//     imagen:'../imagenes/jugoFrutas.jpg'
//   },
//   {
//     id:5,
//     descripcion:"Hamburguesa simple",
//     price:10,
//     category:"Kids",
//     imagen:'../imagenes/hamburguesaSimple.webp'
//   },
//   {
//     id:6,
//     descripcion:"Hamburguesa doble",
//     price:15,
//     category:"Kids",
//     imagen:'../imagenes/hamburguesaDoble.webp'
//   },
//   {
//     id:7,
//     descripcion:"Papas fritas",
//     price:5,
//     category:"Kids",
//     imagen:'../imagenes/papasFrita.webp'
//   },
//   {
//     id:8,
//     descripcion:"Aros de cebolla",
//     price:5,
//     category:"Kids",
//     imagen:'../imagenes/arosCebolla.jpg'
//   },
//   {
//     id:9,
//     descripcion:"Agua 500ml",
//     price:5,
//     category:"Bebidas",
//     imagen:'../imagenes/agua500ml.webp'
//   },
//   {
//     id:10,
//     descripcion:"Agua 750ml",
//     price:7,
//     category:"Bebidas",
//     imagen:'../imagenes/agua750ml.webp'
//   },
//   {
//     id:11,
//     descripcion:"Bebida/gaseosa 500ml",
//     price:7,
//     category:"Bebidas",
//     imagen:'../imagenes/gaseosaPepsi500ml.jpg'
//   },
//   {
//     id:12,
//     descripcion:"Bebida/gaseosa 750ml",
//     price:10,
//     category:"Bebidas",
//     imagen:'../imagenes/gaseosaPepsi750ml.jpg'
//   }
// ]

