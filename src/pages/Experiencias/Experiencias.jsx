import React, { useState } from 'react';
import style from './Experiencias.module.css';

function Experiencias() {
  const [activeExperience, setActiveExperience] = useState('beCoders');

  const handleExperienceChange = (experience) => {
    setActiveExperience(experience);
  };

  return (
    <section className={style.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">EXPERIÊNCIAS</h1>
        <h2 className="foregroundTitle">EXPERIÊNCIAS</h2>
      </div>

      <div className={style.content}>
        <nav className={style.sidebar}>
          <ul>
            <li className={activeExperience === 'beCoders' ? style.active : ''}>
              <a href="#beCoders" onClick={() => handleExperienceChange('beCoders')}>BeCoders</a>
            </li>
            <li className={activeExperience === 'designGarcia' ? style.active : ''}>
              <a href="#designGarcia" onClick={() => handleExperienceChange('designGarcia')}>Design Garcia</a>
            </li>
            <li className={activeExperience === 'eCatalogos' ? style.active : ''}>
              <a href="#eCatalogos" onClick={() => handleExperienceChange('eCatalogos')}>E-Catalogos</a>
            </li>
            <li className={activeExperience === 'imovelGuide' ? style.active : ''}>
              <a href="#imovelGuide" onClick={() => handleExperienceChange('imovelGuide')}>Imóvel Guide</a>
            </li>
          </ul>
        </nav>

        <div className={style.details}>
          {activeExperience === 'beCoders' && (
            <div id="beCoders" className={style.experience}>
              <h3>Desenvolvedora web</h3>
              <p>Janeiro 2024 - Atual</p>
              <h4>BeCoders</h4>
              <ul>
                <li>Desenvolvimento Web:</li>
                <li>Back-end utilizando PHP e/ou Laravel, Node.js, MySQL, PostgreSQL;</li>
                <li>Front-end com JavaScript, CSS, React;</li>
                <li>Desenvolvimento de plataformas como CRM, WebSite, Rastreador, Mensageiro, Plataforma de Jogos Online</li>
                <li>Integração com APIs ou Bibliotecas como GoogleAPIs, Dropbox, Geolocalização, Correios, dentre outras;</li>
                <li>Desenvolvimento atendendo sempre a necessidades específicas do cliente;</li>
              </ul>
            </div>
          )}

          {activeExperience === 'designGarcia' && (
            <div id="designGarcia" className={style.experience}>
              <h3>Designer</h3>
              <p>Maio 2020 - Atual</p>
              <h4>Design Garcia</h4>
              <ul>
                <li>Desenvolvimento de interfaces gráficas;</li>
                <li>Criação de identidades visuais;</li>
                <li>Design de materiais promocionais;</li>
                <li>Desenvolvimento de branding e logotipos;</li>
              </ul>
            </div>
          )}

          {activeExperience === 'eCatalogos' && (
            <div id="eCatalogos" className={style.experience}>
              <h3>Desenvolvedora Web</h3>
              <p>Julho 2024 - Atual</p>
              <h4>E-Catalogos</h4>
              <ul>
                <li>Desenvolvimento de catálogos eletrônicos;</li>
                <li>Implementação de funcionalidades interativas;</li>
                <li>Otimização de desempenho;</li>
                <li>Testes e depuração de código;</li>
              </ul>
            </div>
          )}

          {activeExperience === 'imovelGuide' && (
            <div id="imovelGuide" className={style.experience}>
              <h3>Desenvolvedora Back-end</h3>
              <p>Janeiro 2021 - Maio 2022</p>
              <h4>Imóvel Guide</h4>
              <ul>
                <li>Desenvolvimento de plataforma de imóveis;</li>
                <li>Implementação de funcionalidades back-end;</li>
                <li>Suporte e manutenção contínuos;</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experiencias;