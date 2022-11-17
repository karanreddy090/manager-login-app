
import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import { useState } from 'react';


export default function Agent() {
  // verify cognito cookie exists
  // use it to call SF and get agent list

  // const handleAgentLogin = (event: React.FormEvent<HTMLFormElement>) => {
  //   debugger;
  //   setIsSubmiting(true);
  //   const data = new FormData(event.target);
  //   agentlogin({ username, password, isAdmin: data.isAdmin, agent: data.agent }, setIsSubmiting).then(data => {
  //     if (data.AccessToken != null) {
  //       setIsLoggedin(true);
  //     }
  //   }).catch(err => {
  //     console.log("Login failed"); // Handle this in the UI
  //     console.log(err);
  //   });
  //   event.preventDefault();
  // }


  return (
    <div className="container">      
        <Head>
            <title>HSF Franchise</title>
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>
                Login as Agent
            </h1>
       </main>
       <form method="post">
        <input type="hidden" id="isAdmin" name="isAdmin" value={"true"} />
        <label htmlFor="agents">Choose a agent:</label>
        <select name="agents" id="agents">
          <option value="SueSeaberg@Hsfranchise.com">Sue Seaberg</option>
          <option value="cedwards@bhhspreferredauburn.com.invalid">C Edwards</option>
        </select>
        <button type="submit">Login As</button>
      </form>
    </div>
  )
}
