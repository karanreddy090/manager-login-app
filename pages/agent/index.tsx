
import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import { useState } from 'react';


export default function Agent() {

  // verify cognito cookie exists
  // use it to call SF and get agent list

    
  const [agent, setAgent] = useState("SueSeaberg@Hsfranchise.com");
  const [isSubmitting, setIsSubmiting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmiting(true);
    window.location.replace('https://hsfaffiliates--fullcopy.sandbox.my.site.com/resourcecenter/services/auth/sso/AWS_Cognito?state='+agent);
    event.preventDefault();
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAgent(event.target.value);
  }

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
       <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="agents">Choose a agent:</label>
        <select name="agents" id="agents" onChange={handleChange}>
          <option value="SueSeaberg@Hsfranchise.com">Sue Seaberg</option>
          <option value="cedwards@bhhspreferredauburn.com.invalid">C Edwards</option>
        </select>
        <button type="submit" disabled={isSubmitting}>Login As</button>
      </form>
    </div>
  )
}
