import React from 'react';
import style from './SobreMim.module.css';
import foto from '../../assets/imgs/luiza foto.jpeg';

function SobreMim() {
  return (
    <section id="sobre-mim" className={style.container}>

      <div className="titleWrapper">
        <h1 className="backgroundTitle">SOBRE MIM</h1>
        <h2 className="foregroundTitle">SOBRE MIM</h2>
      </div>

      <div className={style.content}>
        <img className={style.foto} src={foto} alt="Foto Luiza Garcia" />

        <div className={style.text}>
          <p>Olá! Meu nome é <span className={style.highlight}>Luiza Garcia</span>, e sou uma <span className={style.highlight}>desenvolvedora web fullstack</span> e <span className={style.highlight}>designer</span> com uma paixão por criar experiências digitais intuitivas e visuais impactantes.</p>
          <p>Minha jornada começou com uma <span className={style.highlight}>curiosidade insaciável</span> por tecnologia e design, o que me levou a aprender diversas linguagens de programação e ferramentas de design.</p>
          <p>Acredito que a fusão entre um <span className={style.highlight}>código bem estruturado</span> e um <span className={style.highlight}>design atraente</span> pode transformar a forma como as pessoas interagem na web. Meu objetivo é sempre <span className={style.highlight}>criar soluções que não só atendam às necessidades dos usuários</span>, mas que também superem suas expectativas. Trabalho em colaboração entre clientes e equipes para garantir que cada projeto seja <span className={style.highlight}>único</span> e <span className={style.highlight}>impactante</span>.</p>
          <p>Fora do trabalho, estou <span className={style.highlight}>sempre buscando aprender algo novo</span> e me <span className={style.highlight}>manter atualizada</span> com as últimas tendências e inovações no campo da tecnologia e do design. Quando não estou codificando ou criando, você pode me encontrar lendo um bom livro ou conversando com a galera.</p>
        </div>

      </div>
    </section>
  );
}

export default SobreMim;
