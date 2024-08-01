import React from 'react';
import styleInicio from './Inicio.module.css';
import avatar from '../../assets/imgs/luiza.jpg';
import curriculo from '../../../public/Luiza_Nascimento Garcia_Curriculo_2024.pdf';

const Inicio = () => {
  return (
    <section id="inicio" className={styleInicio.container}>
      <div className={styleInicio.content}>
        <h1>Olá, eu sou a</h1>
        <h2>Luiza</h2>
        <p>Designer & Desenvolvedora web fullstack</p>
        <a href={curriculo} download className={styleInicio.iconBox}>
          Currículo <i className='bx bx-chevron-down'></i>
        </a>
      </div>
      <img className={styleInicio.avatar} src={avatar} alt="Avatar Luiza Garcia" />
    </section>
  );
}

export default Inicio;
