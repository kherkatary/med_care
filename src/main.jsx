import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { ScrollToTop } from './Components/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>

  </React.StrictMode>,
)
