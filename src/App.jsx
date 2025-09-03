import React from 'react';
import Navbar from './Components/Navbar';
import PromptBox from './Components/PromptBox';

const App = () => {
  return (
    <div className='bg-white  text-gray-900 min-h-screen'>
      <Navbar />
      <PromptBox />
    </div>
  );
};

export default App;