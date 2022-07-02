import React from 'react'
import Index from './pages/Index'
import Header from './components/header'
import './index.css'
import Contact from './pages/Contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
      <Header/>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App