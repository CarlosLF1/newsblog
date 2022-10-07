import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Blog from './Pages/Blog';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='Home' element={<Home />} />
        <Route path='Blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


