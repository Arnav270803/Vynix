import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='bg-white  text-gray-900 min-h-screen'>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;