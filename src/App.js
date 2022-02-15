import React from 'react';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from './Component/Menu';
import Home from './Component/Home';
import Create from './Component/Create'
import Update from './Component/Update'
import Pnf from './Component/Pnf';

function App() {
  return (
   
      <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/home`} element={<Home/>}/>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/update/:id`} element={<Update/>}/>
        <Route path={`/*`} element={<Pnf/>}/>



      </Routes>
      
      </BrowserRouter>
      
    
  );
}

export default App;
