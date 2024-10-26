import React from 'react';
import styles from './Servicos.module.css';

function Servicos() {
  return (
    <section id="servicos" className={styles.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">SERVIÇOS</h1>
        <h2 className="foregroundTitle">SERVIÇOS</h2>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>DESENVOLVIMENTO</h3>
          <p>Eu desenvolvo soluções digitais que atendem às suas necessidades. Sou especializado em criar websites responsivos e sistemas web personalizados. Utilizo as tecnologias mais recentes para garantir que seu projeto esteja sempre à frente.</p>
          <button>
            <a href="#projetos" className={styles.projectButton}>
              Ver projetos
            </a>
          </button>
        </div>

        <div className={styles.card}>
          <h3>DESIGN</h3>
          <p>Eu ofereço soluções criativas para todas as suas necessidades visuais. Desde logotipos impactantes até materiais de marketing, estou pronta para transformar suas ideias em realidade. Acredito que um bom design é essencial para comunicar sua mensagem de maneira eficaz.</p>
          <button>
            <a href="#projetos" className={styles.projectButton}>
              Ver projetos
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Servicos;
