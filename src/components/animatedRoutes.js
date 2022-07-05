import React from 'react'
import Index from '../pages/Index';
import Contact from '../pages/Contact';
import About from '../pages/About';
import {Route,Routes, useLocation } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import Projects from '../pages/Projects';
import Project from '../pages/Project';

const AnimatedRoutes = () => {
    const location=useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Index />} />
    <Route path="contact" element={<Contact/>} />
    <Route path="About" element={<About/>} />
    <Route path="Project" element={<Projects/>} />
    <Route path="Project/:id" element={<Project/>} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes