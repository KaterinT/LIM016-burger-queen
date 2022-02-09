import { useEffect, useState } from 'react'
import { db } from '../../../firebase.config'
import { collection, doc, getDocs,onSnapshot, snapshotEqual } from 'firebase/firestore'

import './menu.scss'

import {MenuOptions} from './MenuOptions'
import {Productos} from './Productos'
// import {items} from '../../../data/listaProductos'

// const allCategories = [...new Set((items.map((item) => item.category)))]
// const newItemsInicio = items.filter((item) => item.category === "Desayuno");

export const Menu = () => {
  const [menuItems,setMenuItems] = useState([]);

  // const recibeCollectionRef = collection(db,"Menu")

  const allCategories = ["Desayuno","Hamburguesas","Bebidas"]

  // useEffect(() => {
  //   onSnapshot(recibeCollectionRef, snapshot => {
  //     setMenuItems(snapshot.docs.map(doc => {
  //       return {
  //         id:doc.id,
  //         viewing:false,
  //         ...doc.data()//de aquí se obtiene la data, con los elementos de cada objeto
  //       }
  //     }))
  //   })
  // }, [])


  const filterItems = (category) => {
    console.log(blogs)
    const newItems = blogs.filter((item) => item.categoria === category);
    console.log(newItems)
    setBlogs(newItems);
  }

  const [blogs,setBlogs]=useState([])


const fetchBlogs = async () => {
  const colRef = collection(db, 'Menu');
  const querySnapshot = await getDocs(colRef).then((snapshot) => {
    const posts = [];
    snapshot.docs.forEach((docs) => {
      posts.push({ ...docs.data(), userId: docs.id });
    });
    return posts;
  });
  setBlogs(querySnapshot)
  return querySnapshot;
};
  useEffect(() => {
    (fetchBlogs());
  }, [])

  console.log(blogs)
    const newItemsInicio = blogs.filter((item) => item.categoria === "Desayuno");

  return (
    <div className="boxMenu">
      <MenuOptions categorias={allCategories} filterItems={filterItems} />
      <Productos items={blogs}/>
    </div>
  );
};