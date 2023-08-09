import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../components/home/Home'
import Dex from '../components/dex/Advanced'

export default props => (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/dex' element={<Dex />} />
    </Routes>
);