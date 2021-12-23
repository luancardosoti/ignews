import Head from 'next/head';
import styles from './styles.module.scss';

export default function Post() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus necessitatibus, quaerat fugit corrupti illum deleniti non architecto, blanditiis impedit vel aliquam dicta, modi ducimus facilis! Porro saepe voluptatibus reiciendis!</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus necessitatibus, quaerat fugit corrupti illum deleniti non architecto, blanditiis impedit vel aliquam dicta, modi ducimus facilis! Porro saepe voluptatibus reiciendis!</p>
          </a>
          <a href="#">
            <time>12 de Março de 2021</time>
            <strong>Mapas com React usando Leaflet</strong>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis minus necessitatibus, quaerat fugit corrupti illum deleniti non architecto, blanditiis impedit vel aliquam dicta, modi ducimus facilis! Porro saepe voluptatibus reiciendis!</p>
          </a>
        </div>
      </main>
    </>
  )
}