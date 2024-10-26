import React from 'react';
import styleInicio from './Inicio.module.css';
import avatar from '../../assets/imgs/luiza.jpg';
import curriculo from '../../../public/Luiza_Nascimento Garcia_Curriculo.pdf';

const Inicio = () => {
  return (
    <section id="inicio" className={styleInicio.container}>
      <div className={styleInicio.content}>
        <h1>Olá, eu sou a</h1>
        <h2>Luiza</h2>
        <p>Desenvolvedora web fullstack & Designer</p>
        <a href={curriculo} target="_blank" rel="noopener noreferrer" className={styleInicio.iconBox}>
          Currículo <i className='bx bx-chevron-down'></i>
        </a>
      </div>
      <img className={styleInicio.avatar} src={avatar} alt="Avatar Luiza Garcia" />
    </section>
  );
}

export default Inicio;
