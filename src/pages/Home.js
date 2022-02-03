import React, {useState}from 'react'
import ReacDOM from 'react-dom'


const Home = ({saludo="vacio"}) => {  
  const [counter,setCounter] =  useState(0);//counter es una constante ,toma en cuenta eso .Otro que el arreglo es [valor,funcion]
  
  const hadleSecondButton = () => {
    setCounter(counter + 1);
  }
  const handleApp = () => console.log('+8');

    return(<div >
      <div className="button__options">

        <button onClick={handleApp} type="button" className="btn-orden">{saludo}</button>
        <button onClick={hadleSecondButton} type="button" className="btn-chef">{counter}</button>
        
      </div>
    </div>)
}



export default Home

