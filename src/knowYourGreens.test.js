/**
 * @jest-environment jsdom
 */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from '@testing-library/react';
import {createMemoryHistory} from 'history'
import App from './knowYourGreens'

describe('App',()=>{
    test('renders App component',()=>{
        const page_history = createMemoryHistory();
        page_history.push('/')
        //const root = document.createElement('div');
        //document.body.appendChild(root);
        render(<Router history={page_history}><App /></Router>);
    })
})



