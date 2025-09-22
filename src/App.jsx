import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Login from './Components/Login'
import AppContextProvider from './context/AppContext';

const App = () => {
  return (
    <AppContextProvider>
      <div className='bg-white text-gray-900 min-h-screen'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </AppContextProvider>
  );
};

export default App;