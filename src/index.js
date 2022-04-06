/*eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { BurguerApp } from './BurguerApp';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals';

const container = document.querySelector('#root');

// es buena practica dejar un espacio despues del Home

ReactDOM.render(<BurguerApp />, container);

serviceWorkerRegistration.register();

reportWebVitals();
