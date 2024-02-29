import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from 'react-toastify'; // Keep only this import for ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/Auth';
import { SearchProvider } from './context/search';
import { CartProvider } from './context/cart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <SearchProvider>
    <CartProvider>
  <BrowserRouter>
    <React.StrictMode>
      <ToastContainer />
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </CartProvider>
  </SearchProvider>
  </AuthProvider>
);

reportWebVitals();
