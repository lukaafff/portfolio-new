import React from 'react';
import styles from './Contato.module.css';

function Contato() {
  return (
    <section id="contato" className={styles.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">CONTATO</h1>
        <h2 className="foregroundTitle">CONTATO</h2>
      </div>

      <p className={styles.subtitle}>Vamos conversar!</p>
      <form className={styles.form}>

        <div className={styles.inputGroupRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message"></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
