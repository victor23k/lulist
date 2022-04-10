import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>lulist</title>
        <meta name='description' content='Manage your playlists' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>lulist</h1>

        <p className={styles.description}>
          Manage your playlists across your favorite music streaming services
        </p>
      </main>
    </div>
  );
};

export default Home;
