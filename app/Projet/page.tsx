import Header from '../Home/page';
import styles from '../style/Projects.module.css';


const projects = [
  { title: 'Projet 1', description: 'Description du projet 1' },
  { title: 'Projet 2', description: 'Description du projet 2' },
];

export default function Projects() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Mes Projets</h1>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
