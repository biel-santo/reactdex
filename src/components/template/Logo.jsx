import React from 'react';
import logo from '../../assets/img/logo.png'
import './Logo.css'
import { Link } from 'react-router-dom';

export default props =>
    <aside className="logo">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
    </aside>