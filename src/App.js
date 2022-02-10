import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/applesauce' element={<Shop />} />
        <Route path='shop/selbyville' element={<Shop />} />
        <Route path='shop/dracula' element={<Shop />} />
        <Route path='shop/merch' element={<Shop />} />
        <Route path='shop/releases' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
