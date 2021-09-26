import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kryptonmc.dev</title>
        <meta
          name='keywords'
          content='minecraft, mc, minecraft plugins, krypton, krypton plugins, plugins'
        ></meta>
      </Head>
      <div className='landing'>
        <h1>
          A fresh <a href='kryptonmc.org'>Krypton</a> plugin resource site
          coming soon
        </h1>
      </div>
    </div>
  );
}
