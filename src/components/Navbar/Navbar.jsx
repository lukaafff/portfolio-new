import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/imgs/Logo github v2.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getLinkClass = (path) => {
    if (path === '/' && location.pathname === '/') {
      return styles.active;
    }
    if (path !== '/' && location.hash === path) {
      return styles.active;
    }
    return '';
  };

  return (
    <header className={styles.header}>
      <a href="/"><img className={styles.logo} src={logo} alt="Logo Luiza Garcia" /></a>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
      </div>
      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        <a href="#inicio" className={`${styles.navLink} ${getLinkClass('/')}`} onClick={closeMenu}>Inicio</a>
        <a href="#sobre-mim" className={`${styles.navLink} ${getLinkClass('#sobre-mim')}`} onClick={closeMenu}>Sobre Mim</a>
        <a href="#skills" className={`${styles.navLink} ${getLinkClass('#skills')}`} onClick={closeMenu}>Habilidades</a>
        <a href="#experiencias" className={`${styles.navLink} ${getLinkClass('#experiencias')}`} onClick={closeMenu}>Experiências</a>
        <a href="#servicos" className={`${styles.navLink} ${getLinkClass('#servicos')}`} onClick={closeMenu}>Serviços</a>
        <a href="#projetos" className={`${styles.navLink} ${getLinkClass('#projetos')}`} onClick={closeMenu}>Projetos</a>
        <a href="#contato" className={`${styles.navLink} ${getLinkClass('#contato')}`} onClick={closeMenu}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;
