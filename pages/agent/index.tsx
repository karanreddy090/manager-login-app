import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import { CognitoIdentityProviderClient, UpdateUserAttributesCommand } from "@aws-sdk/client-cognito-identity-provider"; 

export default function Agent() {

  // verify cognito cookie exists
  // use it to call SF and get agent list

    
  const [agent, setAgent] = useState("SueSeaberg@Hsfranchise.com");
  const [isSubmitting, setIsSubmiting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    debugger;
    event.preventDefault();
    setIsSubmiting(true);
    // window.location.replace('https://hsfaffiliates--fullcopy.sandbox.my.site.com/resourcecenter/services/auth/sso/AWS_Cognito?state='+agent);
    const accessToken = window.location.hash.slice(1).split("&")[1].split("=")[1];
    var params = {
        AccessToken: accessToken, /* required */
        UserAttributes: [ /* required */
          {
            Name: 'website', /* should we use custom:email https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-cognito-identity-provider/interfaces/updateuserattributescommandinput.html*/
            Value: agent
          },
          /* more items */
        ],
      };
      
    const cognitoClient = new CognitoIdentityProviderClient({
        region: 'us-west-2'
    })
    const command = new UpdateUserAttributesCommand(params);
    const response = await cognitoClient.send(command);
    console.log(response);
    window.location.replace("https://hsfaffiliates--fullcopy.sandbox.my.site.com/resourcecenter/services/auth/sso/AWS_Cognito");
    
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
