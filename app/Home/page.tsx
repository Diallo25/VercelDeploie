    import Link from 'next/link';
    import styles from '../style/Header.module.css';
  import { headers } from 'next/headers';

    export default function Header() {
      return ( 
        <header>
          <div>          
              <nav  className={styles.header}>
            <Link href="/Home">Accueil</Link>
            <Link href="/About">À propos</Link>
            <Link href="/Projet">Projets</Link>
            <Link href="/Contact">Contact</Link>
            </nav> 
          </div>

          <div>
            <h1>Mon Portfolio</h1>
            <p>Développeur web et mobile</p>
          </div>
        
        </header> 

               
        
          
        
      );
    }
