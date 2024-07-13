import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/imgs/Logo github v2.png';

function Header() {
  return (
    <header className={styles.header}> 
      <a href="/"><img className={styles.logo} src={logo} alt="Logo Luiza Garcia" /></a> 

      <nav className={styles.navbar}>
        <Link to="#inicio" className={styles.navLink}>Inicio</Link>
        <Link to="#sobre-mim" className={styles.navLink}>Sobre Mim</Link>
        <Link to="#skills" className={styles.navLink}>Habilidades</Link>
        <Link to="#experiencias" className={styles.navLink}>Experiências</Link>
        <Link to="#servicos" className={styles.navLink}>Serviços</Link>
        <Link to="#projetos" className={styles.navLink}>Projetos</Link>
        <Link to="#contato" className={styles.navLink}>Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
