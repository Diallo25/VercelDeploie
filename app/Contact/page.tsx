import Header from '../Home/page';
import styles from '../style/Contact.module.css';


export default function Contact() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Contactez-moi</h1>
        <form className={styles.form}>
          <input className='myInput' type="text" placeholder="Nom" required />
          <input className='myInput' type="email" placeholder="Email" required />
          <textarea className='myTextarea' placeholder="Votre message" required />
          <button className='mybtn' type="submit">Envoyer</button>
        </form>
      </main>
    </div>
  );
}
