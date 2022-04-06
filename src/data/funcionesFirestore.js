/*eslint-disable */
import { db } from "../firebase.config";
import { getDocs, collection, doc, getDoc, deleteDoc, query, where, addDoc, onSnapshot, updateDoc, setDoc } from "firebase/firestore"


export const obtenerDataFiltrada =(nameColection,filter,condition) =>{
  const colleccionRef = collection(db,nameColection);
  const array = getDocs(query(colleccionRef,where(filter,'==',condition))).then((arrayData) => {
    let arrayOrdenes = [];
    arrayData.forEach((docs) => {
        arrayOrdenes.push({...docs.data(), id:docs.id});
      });
      return arrayOrdenes
  });
  return array 
}

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
  const querySnapshot = getDoc(docRef).then((docs) => {
    return {...docs.data(),id:docs.id}
  });
  return querySnapshot;
};

export const eliminarDocFirestore = (id,nameColection) => {
  deleteDoc(doc(db,nameColection,id))
}

export const subirPedidoFirestore = (pedido, nameColection) => {
  
  const colRef =collection(db,nameColection);
  const functionAdd = addDoc(colRef, pedido);
  return functionAdd;
}

export const subirPedidoConId = (pedido, nameColection, id) => {
  const functionAdd = setDoc(doc(db,nameColection,id),pedido)
  return functionAdd
}

export const actualizarDoc = (nameColection, idDoc, actualizacion) => {
  const docRef= doc(db, nameColection,idDoc);
  updateDoc(docRef,actualizacion)
}

