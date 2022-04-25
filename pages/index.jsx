import Head from 'next/head'
import Projects from '../components/projects/Projects'
import Footer from '../components/footer/Footer'
import Intro from '../components/intro/Intro'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colm Lang</title>
      </Head>

      <div className={styles.sections}>
        <div id="home"></div>
        <Intro />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}
