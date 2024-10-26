import React, { useState } from 'react';
import style from './Experiencias.module.css';

function Experiencias() {
  const [activeExperience, setActiveExperience] = useState('beCoders');

  const handleExperienceChange = (experience) => {
    setActiveExperience(experience);
  };

  return (
    <section id="experiencias" className={style.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">EXPERIÊNCIAS</h1>
        <h2 className="foregroundTitle">EXPERIÊNCIAS</h2>
      </div>

      <div className={style.content}>
        <nav className={style.sidebar}>
          <ul>
            <li className={activeExperience === 'beCoders' ? style.active : ''}>
              <a onClick={() => handleExperienceChange('beCoders')}>BeCoders</a>
            </li>
            <li className={activeExperience === 'melinda' ? style.active : ''}>
              <a onClick={() => handleExperienceChange('melinda')}>Melinda Restaurante</a>
            </li>
            <li className={activeExperience === 'likeimovel' ? style.active : ''}>
              <a onClick={() => handleExperienceChange('likeimovel')}>Like Imóvel</a>
            </li>
            <li className={activeExperience === 'designGarcia' ? style.active : ''}>
              <a onClick={() => handleExperienceChange('designGarcia')}>Design Garcia</a>
            </li>
            <li className={activeExperience === 'imovelGuide' ? style.active : ''}>
              <a onClick={() => handleExperienceChange('imovelGuide')}>Imóvel Guide</a>
            </li>
          </ul>
        </nav>

        <div className={style.details}>

        {activeExperience === 'beCoders' && (
          <div id="beCoders" className={style.experience}>
            <h3>Desenvolvedora Web Fullstack</h3>
            <p>Março 2024 - Atual</p>
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

          {activeExperience === 'melinda' && (
              <div id="melinda" className={style.experience}>
                <h3>Desenvolvedora Web Fullstack</h3>
                <p>Agosto 2024 - Atual</p>
                <h4>Melinda Restaurante</h4>
                <ul>
                  <li>Desenvolvimento e manutenção de um sistema web completo para gerenciamento de um estabelecimento.</li>
                  <li>Implementação de funcionalidades para gerenciamento de clientes, pedidos, financeiro, estoque e criação de comandas eletrônicas.</li>
                  <li>Integração com impressoras térmicas para impressão automática de pedidos.</li>
                  <li>Criação e manutenção do site de apresentação da empresa, garantindo uma experiência de navegação responsiva e otimizada</li>
                </ul>
              </div>
            )}

          {activeExperience === 'likeimovel' && (
            <div id="likeimovel" className={style.experience}>
              <h3>Desenvolvedora Web Fullstack</h3>
              <p>Outubro 2024 - Atual</p>
              <h4>Like Imóvel</h4>
              <ul>
                <li>Desenvolvimento de um sistema web para gerenciamento de negociações imobiliárias.</li>
                <li>Implementação de diversas funcionalidades para otimizar a experiência do usuário.</li>
                <li>Realização de testes de usabilidade e implementação de melhorias baseadas no feedback dos usuários.</li>
                <li>Documentação do código e das funcionalidades desenvolvidas, facilitando a manutenção e futuras atualizações do sistema.</li>
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
                <li>Criação de layout de sites e aplicativos</li>
              </ul>
            </div>
          )}

          {activeExperience === 'imovelGuide' && (
            <div id="imovelGuide" className={style.experience}>
              <h3>Desenvolvedora Back-end</h3>
              <p>Fevereiro 2024 - Junho 2024</p>
              <h4>Imóvel Guide</h4>
              <ul>
                <li>Desenvolvimento de plataforma de imóveis;</li>
                <li>Implementação de funcionalidades back-end;</li>
                <li>Suporte e manutenção contínuos;</li>
                <li>Responsável pela criação de um sistema de multi-inquilinos com o pacote "Tenancy for Laravel"</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experiencias;