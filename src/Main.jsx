import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './knowYourGreens';
import 'bootstrap/dist/css/bootstrap.min.css';

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render((<BrowserRouter>
        <App />
    </BrowserRouter>), document.getElementById('root'));
  })
