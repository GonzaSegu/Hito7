import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import PizzasProvider from './contexts/PizzasContext';
import GlobalProvider from "./contexts/GlobalContext.jsx"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalProvider>
    <PizzasProvider> 
      <App />
    </PizzasProvider>
    </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
