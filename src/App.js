import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './pages/NotFound/index';


function App() {



  return (

    <BrowserRouter>

      <Navbar/>
       
      <Cart/> 
     
       <Routes>
         
          <Route path='/' element={<Home />} exact/>
          <Route path='*' element={<NotFound />} />  

       </Routes>
       
    </BrowserRouter> 
       
        
  );
}

export default App;
