import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='container'>
      <h1>News Blog</h1>
        <nav>
          <Link to='/Home'>Home</Link> |{" "}
          <Link to='/blog'>Blog</Link>
        </nav>
    </div>
  );
};

export default App;
