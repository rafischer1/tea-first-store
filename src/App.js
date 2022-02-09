import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='applesauce' element={<HomePage />} />
        <Route path='selbyville' element={<HomePage />} />
        <Route path='dracula' element={<HomePage />} />
        <Route path='merch' element={<HomePage />} />
        <Route path='releases' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
