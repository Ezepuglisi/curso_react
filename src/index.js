import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider } from '@chakra-ui/react';
import CartProvider, { CartContext } from './context/CartContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
);


