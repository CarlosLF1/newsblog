import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='container'>
      {/* <h3>React News blog</h3> */}
      <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          {/* <Route path="/" element={<Navigate replace to='/home' />} /> */}
      </Routes>
    </div>
  );
};

export default App;
