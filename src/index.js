// Librerias
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
import './assets/index.css';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faSearch, faMessage, faBell, faBars, faMap, faLocationDot } from '@fortawesome/free-solid-svg-icons';

library.add(faHouse, faSearch, faMessage, faBell, faBars, faMap, faLocationDot)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
