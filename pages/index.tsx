import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from './no-js-form'

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HSF Franchise</title>
        <meta name="description" content="login page for roaster managers" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Manager Login
        </h1>
        <Form />        
      </main>

      <footer className={styles.footer}>
        {/* <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Built with Next.js | Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  )
}
