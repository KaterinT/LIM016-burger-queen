//import React, { useState } from "react";
// import { Fragment } from "react/cjs/react.production.min";
// import PropTypes from "prop-types"; condiciones o sino error
import Burger from "../assets/imagenes/Burger.png"

export const Home = ({valueInit}) => {
    /* const [contador, setContador] = useState(valueInit);
    const handleAgregarContador = (e) => {
        setContador((hereCounter) =>{
            return hereCounter+1;
        })
    };
    const handleRestarContador = (e) => {
        setContador((hereCounter) =>{
            return hereCounter-1;
        })
    };
    const reset = (e) => {
        setContador((hereCounter) =>{
            return valueInit;
        })
    }; */

    return <article> {/* en vez de usar Fragments */}
            <section>
                <img src={Burger} alt=''/>
            </section>
            <section id="sectionEquipo">
                <div id = "tituloHome">
                    <h2> Original Taste</h2>
                    <h1> BURGER </h1>
                </div>
                <div id ="bttnsHome">
                    <button >Mesero</button>
                    <button>Cocinero</button>
                </div>

            </section>
            
            {/* <h1 id ='contador'> { contador} </h1>
            <button onClick={ handleAgregarContador}>+1</button>
            <button onClick={ handleRestarContador }> -1</button>
            <button onClick={ reset }> Reset</button> */}
        </article>
    ;
};

/* Home.propTypes = {
    valueInit: PropTypes.number,

} */