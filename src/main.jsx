import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Toaster} from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // browserroute sare routes ko browser se connect karta hai
  <BrowserRouter>
    <App />
  <Toaster/>
  </BrowserRouter>
  
 
)
