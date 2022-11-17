import useAuth from "../hooks/useAuth";
import { useState } from 'react';


export default function LoginForm({ isLoggedin, setIsLoggedin }:{isLoggedin:boolean, setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>}) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmiting] = useState(false);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmiting(true);
    login({ username, password }, setIsSubmiting).then(data => {
      if (data.AccessToken != null) {
        setIsLoggedin(true);
      }
    }).catch(err => {
      console.log("Login failed"); // Handle this in the UI
      console.log(err);
    });
    event.preventDefault();
  }

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
      <a href="https://rcadmin1.auth.us-west-2.amazoncognito.com/login?client_id=63040hgvklso6cfdotcd651jah&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=http://localhost:3000/">Sign in</a>
      {!isLoggedin && <form onSubmit={handleSubmit} method="post">
        <label htmlFor="username">User Name</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" value={username} />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" value={password} />
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>}
      {isLoggedin && <form method="post">
        <input type="hidden" id="username" name="username" value={username} />
        <input type="hidden" id="password" name="password" value={password} />
        <input type="hidden" id="isAdmin" name="isAdmin" value={"true"} />
        <label htmlFor="agents">Choose a agent:</label>
        <select name="agents" id="agents">
          <option value="rcagent">rcagent</option>
          <option value="rcagent1">rcagent1</option>
        </select>
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>}
    </div>
  )
}
