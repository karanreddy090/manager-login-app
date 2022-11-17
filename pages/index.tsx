import Head from 'next/head'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import LoginForm from './login-form'
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();
  useEffect(() => {
    
    window.location.replace('https://rcadmin1.auth.us-west-2.amazoncognito.com/login?client_id=63040hgvklso6cfdotcd651jah&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://manager-login-app.vercel.app/agent/');
  })
  
  // const [isLoggedin, setIsLoggedin] = useState(false);
  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>HSF Franchise</title>
  //       <meta name="description" content="login page for roaster managers" />
  //       {/* <link rel="icon" href="/favicon.ico" /> */}
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>
  //        {!isLoggedin && "Manager Login"}
  //        {isLoggedin && "Login as Agent"}
  //       </h1>
  //       {/* <LoginForm isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>         */}
  //     </main>

  //     <footer className={styles.footer}>
  //       {/* <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
  //         Built with Next.js | Powered by{' '}
  //         <span className={styles.logo}>
  //           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
  //         </span>
  //       </a> */}
  //     </footer>
  //   </div>
  // )
  return null;
}
