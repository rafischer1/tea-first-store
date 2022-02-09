import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='App'>
      <Routes switch={true}>
        <Route exact path='/' component={HomePage} />
        <Route path='applesauce' component={HomePage} />
      </Routes>
      <HomePage />
    </div>
  );
}

export default App;
