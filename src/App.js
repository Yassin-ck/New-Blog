import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import { useState } from 'react';
import Context from './Context/Context';
import { Routes,Route } from 'react-router-dom';
import List from './Components/List';
import Display from './Components/Display';
function App() {

  
  const[createText,setCreateText]=useState('')
 
const state={
  text:createText,
  setText:setCreateText
}
  return (
    <div className="App">
    
    <Context.Provider value={state}>
    <Routes>
    <Route path='/' element={<Create/>} />
    <Route path='/list' element={<List/>} />
    <Route path='/list/:id' element={<Display/>} />

    </Routes>


</Context.Provider>

    </div>
  );
}

export default App;
