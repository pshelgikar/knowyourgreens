import React from 'react'
import ReactDOM from 'react-dom'
import ReactRouterDOM from 'react-router-dom'
import App from './knowYourGreens'

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render((<ReactRouterDOM.BrowserRouter>
        <App />
    </ReactRouterDOM.BrowserRouter>), document.getElementById('root'));
  })
