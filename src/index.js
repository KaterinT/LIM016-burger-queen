<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import {BurguerApp} from './BurguerApp'


const container = document.querySelector('#root');

// ReactDOM.render(<BurguerApp saludo="Hola juju" />,container);
// es buena practica dejar un espacio despues del Home

ReactDOM.render(<BurguerApp />,container);







=======
import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./Components/Home";
import './StylesComponents/styleHome.scss'

const divRoot = document.getElementById('root');

ReactDOM.render(<Home/>, divRoot);
>>>>>>> eba00f91c4f8debfec57c7fc77b14a9e98294363

