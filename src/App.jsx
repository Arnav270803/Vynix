import React from 'react';
import Navbar from './Components/Navbar';
import PromptBox from './Components/PromptBox';

const App = () => {
  return (
    <div className='bg-gray-950 min-h-screen'>
      <Navbar />
      <PromptBox />
    </div>
  );
};

export default App;