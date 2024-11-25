import { useState } from 'react'
import Greet from './components/greet'
import Register from './components/login'
import Login from './components/register';
import DynamicAttributes from './components/image';
import Mappp from './components/Map';




function App() {
  

  return (
    <div>
      <Greet />
      <Register />
      <Login />
      <DynamicAttributes />
      <Mappp />
    </div>
  );
    
}

export default App
