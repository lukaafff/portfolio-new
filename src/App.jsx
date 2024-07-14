import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Inicio from './pages/Inicio/Inicio'
import SobreMim from './pages/SobreMim/SobreMim';
import Skills from './pages/Skills/Skills';
import Experiencias from './pages/Experiencias/Experiencias';
import Footer from './components/Footer/Footer';
import Servicos from './pages/Servicos/Servicos';
import Projetos from './pages/Projetos/Projetos';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Inicio />
        <SobreMim />
        <Skills/>
        <Experiencias/>
        <Servicos/>
        <Projetos/>
        <Footer/>
    </Router>
    </>
  )
}

export default App
