import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contato.module.css';

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1duus7m', 'template_btj51d5', form.current, 'wWVSvqU--9Mtucd56')
      .then((result) => {
          console.log(result.text);
          alert('Mensagem enviada com sucesso!');
      }, (error) => {
          console.log(error.text);
          alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
      });
  };

  return (
    <section id="contato" className={styles.container}>
      <div className="titleWrapper">
        <h1 className="backgroundTitle">CONTATO</h1>
        <h2 className="foregroundTitle">CONTATO</h2>
      </div>

      <p className={styles.subtitle}>Vamos conversar!</p>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <div className={styles.inputGroupRow}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="user_name" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="user_email" required />
          </div>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>Enviar</button>
      </form>
    </section>
  );
}

export default Contato;
