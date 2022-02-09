import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='shop/applesauce' element={<HomePage />} />
        <Route path='shop/selbyville' element={<HomePage />} />
        <Route path='shop/dracula' element={<HomePage />} />
        <Route path='shop/merch' element={<HomePage />} />
        <Route path='shop/releases' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
