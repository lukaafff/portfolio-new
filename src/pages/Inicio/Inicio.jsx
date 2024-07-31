import React from 'react'
import styleInicio from './Inicio.module.css';
import avatar from '../../assets/imgs/luiza.jpg'

const Inicio = () => {
  return (
    <section id="inicio" className={styleInicio.container}>

        <div className={styleInicio.content}>
            <h1>Olá, eu sou a</h1>
            <h2>Luiza</h2>
            <p>Designer & Desenvolvedora web fullstack</p>
            <button className={styleInicio.iconBox}>Currículo <i className='bx bx-chevron-down'></i></button>
        </div>

        <img className={styleInicio.avatar} src={avatar} alt="Avatar Luiza Garcia" />
    </section>
  )
}

export default Inicio