import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import styles from './Contato.module.css';

function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then((result) => {
        toast.success('Mensagem enviada com sucesso!');
        form.current.reset();
    }, (error) => {
        toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
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
