import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/imgs/Logo github v2.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="/"><img className={styles.logo} src={logo} alt="Logo Luiza Garcia" /></a>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <i className={menuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
      </div>
      <nav className={`${styles.navbar} ${menuOpen ? styles.open : ''}`}>
        <a href="/" className={styles.navLink} onClick={closeMenu}>Inicio</a>
        <a href="#sobre-mim" className={styles.navLink} onClick={closeMenu}>Sobre Mim</a>
        <a href="#skills" className={styles.navLink} onClick={closeMenu}>Habilidades</a>
        <a href="#experiencias" className={styles.navLink} onClick={closeMenu}>Experiências</a>
        <a href="#servicos" className={styles.navLink} onClick={closeMenu}>Serviços</a>
        <a href="#projetos" className={styles.navLink} onClick={closeMenu}>Projetos</a>
        <a href="#contato" className={styles.navLink} onClick={closeMenu}>Contato</a>
      </nav>
    </header>
  );
}

export default Header;
