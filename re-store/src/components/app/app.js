import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CardPage } from '../pages';

const App = ({ bookstoreService }) => {
    return(
        <main role="main" className="container">
        <ShopHeader numItems={5} total={210}/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/card" element={<CardPage />}/>
            </Routes>
        </main>
    )
}

export default App;