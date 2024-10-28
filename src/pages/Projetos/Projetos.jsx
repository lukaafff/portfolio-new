import React, { useState, useEffect } from 'react';
import styles from './Projetos.module.css';
import projetosData from './projetosdata.jsx'; 

function Projetos() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [allProjects, setAllProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    setAllProjects(projetosData);
  }, []);

  const filterProjects = () => {
    if (activeCategory === 'todos') {
      return allProjects;
    }
    return allProjects.filter(project => project.category === activeCategory);
  };

  const filteredProjects = filterProjects();

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <section id="projetos" className={styles.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">PROJETOS</h1>
        <h2 className="foregroundTitle">PROJETOS</h2>
      </div>

      <div className={styles.filterMenu}>
        <button onClick={() => setActiveCategory('todos')} className={activeCategory === 'todos' ? styles.active : ''}>
          Todos
        </button>
        <button onClick={() => setActiveCategory('desenvolvimento')} className={activeCategory === 'desenvolvimento' ? styles.active : ''}>
          Desenvolvimento
        </button>
        <button onClick={() => setActiveCategory('design')} className={activeCategory === 'design' ? styles.active : ''}>
          Design
        </button>
      </div>

      <div className={styles.projectList}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <div key={project.id} className={styles.projectItem}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage} 
                onClick={() => openModal(project.image)} 
              />
              <h3>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <p className={styles.tech}>{project.technologies.join(', ')}</p>
              <div className={styles.buttonContainer}>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                    Ver no GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                    Ver Aplicação
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <h3>Nenhum projeto encontrado!</h3>
        )}
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagem do projeto" className={styles.modalImage} />
            <button onClick={closeModal} className={styles.closeButton}>X</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projetos;
