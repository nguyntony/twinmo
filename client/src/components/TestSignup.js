import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function TestSignup() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const processSignup = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('/api/user/new', {
        first,
        last,
        email,
        username,
        password
      })
      console.log('CLIENT:'+ resp)
    } catch (e) {
      console.log('invalid')
    }
  }
  
  useEffect(() => {
    async function checkLogin() {
      try {
        const resp = await axios.get('/api/login-status');
        console.log('You are logged in')
        setIsLoggedIn(true)
      } catch (e) {
        console.log('You are not logged in')
        setIsLoggedIn(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <section className="contentContainer">
      <h2>this is a test signup route</h2>

      {isLoggedIn ?
      <h1>Logged in</h1>
      : <h1>Not logged in</h1>}

      <form onSubmit={processSignup}>
        <br/>
        <label htmlFor="first">First</label>
        <input type="text" id="first" onChange={e => setFirst(e.target.value)}/>
  
        <br/>
        <label htmlFor="last">Last</label>
        <input type="text" id="last" onChange={e => setLast(e.target.value)}/>
  
        <br/>
        <label htmlFor="email">email</label>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)}/>
  
        <br/>
        <label htmlFor="username">username</label>
        <input type="text" id="username" onChange={e => setUsername(e.target.value)}/>
  
        <br/>
        <label htmlFor="password">password</label>
        <input type="text" id="password" onChange={e => setPassword(e.target.value)}/>

        <input type="submit" value='submit'/>
      </form>
    </section>
  )
}