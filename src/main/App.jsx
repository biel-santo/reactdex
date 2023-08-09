import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react';

import { BrowserRouter } from 'react-router-dom'

import Footer from '../components/template/Footer'
import Routes from './Routes';

export default props =>
    <BrowserRouter>
        <div className="app">    
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>