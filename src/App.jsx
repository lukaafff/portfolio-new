import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Inicio from './pages/Inicio/Inicio'
import SobreMim from './pages/SobreMim/SobreMim';
import Skills from './pages/Skills/Skills';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Inicio />
        <SobreMim />
        <Skills/>
    </Router>
    </>
  )
}

export default App
