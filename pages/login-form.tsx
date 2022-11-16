import useAuth from "../hooks/useAuth";
import { useState } from 'react';


export default function LoginForm({ isLoggedin, setIsLoggedin }) {
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

  const handleAgentLogin = (event: React.FormEvent<HTMLFormElement>) => {
    debugger;
    setIsSubmiting(true);
    const data = new FormData(event.target);
    agentlogin({ username, password, isAdmin: data.isAdmin, agent: data.agent }, setIsSubmiting).then(data => {
      if (data.AccessToken != null) {
        setIsLoggedin(true);
      }
    }).catch(err => {
      console.log("Login failed"); // Handle this in the UI
      console.log(err);
    });
    event.preventDefault();
  }


  return (
    <div className="container">
      {!isLoggedin && <form onSubmit={handleSubmit} method="post">
        <label htmlFor="username">User Name</label>
        <input onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" value={username} />
        <label htmlFor="password">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" value={password} />
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>}
      {isLoggedin && <form onSubmit={handleAgentLogin} method="post">
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
