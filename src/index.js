import React from 'react'
import ReactDOM from 'react-dom'
import {BurguerApp} from './BurguerApp';
import * as ServiceWorkerRegistration from './serviceWorkerRegistration'
const container = document.querySelector('#root');

// es buena practica dejar un espacio despues del Home

ReactDOM.render(<BurguerApp />,container);
ServiceWorkerRegistration.register()

