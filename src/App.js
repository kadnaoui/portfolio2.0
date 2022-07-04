import React from 'react'
import Header from './components/header'
import './index.css'
import './App.css'
import AnimatedRoutes from './components/animatedRoutes';
import {  BrowserRouter} from "react-router-dom";

const App = () => {
 
  return (
      <BrowserRouter>
      <Header/>
   <AnimatedRoutes/>
  </BrowserRouter>
  )
}

export default App