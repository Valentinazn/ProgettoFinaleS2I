import { BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './pages/NotFound/index';


function App() {


  const [ isOpen, setIsOpen] = useState(false)

  const toggle = () => {

    setIsOpen( !isOpen )

  }

  return (

    <BrowserRouter>

      <Navbar toggle={ toggle } />
       
      <Cart/> 
     
       <Routes>
         
          <Route path='/' element={<Home />} exact/>
          <Route path='*' element={<NotFound />} />  

       </Routes>
       
    </BrowserRouter> 
       
        
  );
}

export default App;
