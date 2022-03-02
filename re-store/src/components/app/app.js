import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage, CardPage } from '../pages';

const App = ({ bookstoreService }) => {
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/card" element={<CardPage />}/>
        </Routes>
    )
}

export default App;