
import React from 'react'
import './App.scss'
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/Routes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}
  
export default App