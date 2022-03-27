import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartState from './context/cart/CartState';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    <CartState>

      <App />

    </CartState>
  
  </React.StrictMode>,
  
  document.getElementById('root')
);


reportWebVitals();
