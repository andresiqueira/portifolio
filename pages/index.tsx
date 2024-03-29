import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { MouseEvent, useRef } from 'react'

export default function Home() {

  const pointerRef = useRef<HTMLSpanElement>(null)

  const handleMouseEvent = (e: MouseEvent<HTMLDivElement>) => {
    if (pointerRef.current) {
      pointerRef.current.style.left = `${e.pageX}px`;
      pointerRef.current.style.top = `${e.pageY}px`;
    }
  }

  return (
    <div
      className={styles.container}
      onMouseMove={(e) => handleMouseEvent(e)}
    >
      <Head>
        <title>André Siqueira</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1><span className={styles.hash}>#</span> André Siqueira </h1>
        <h2>Desenvolvedor Front-End</h2>
      </main>

      <footer className={styles.footer}>
        <ul>
          <li><a target='_blank' rel='noreferrer' href='https://github.com/andresiqueira'>Github</a></li>
          <li><a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/andre-siqueira'>Linkedin</a></li>
        </ul>
      </footer>
      <span
        className={styles.cursor}
        ref={pointerRef}
      />
    </div>
  )
}
