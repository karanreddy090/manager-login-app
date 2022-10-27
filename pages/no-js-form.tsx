import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Form() {
  return (
    <div className="container">
      <form action="/api/form" method="post">
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
