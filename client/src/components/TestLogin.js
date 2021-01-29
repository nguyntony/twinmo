import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function TestLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const processLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('/api/user/login', {
        email,
        password
      })
      console.log('You logged in!')
    } catch (e) {
      console.log('Cant login')
    }
  }

  useEffect(()=> {

  }, [])
  
  return (
    <section className="contentContainer">
      <h2>this is a test login route</h2>

      <form onSubmit={processLogin}>
        <br/>
        <label htmlFor="email">email</label>
        <input type="text" id="email" onChange={e => setEmail(e.target.value)}/>

        <br/>
        <label htmlFor="password">password</label>
        <input type="text" id="password" onChange={e => setPassword(e.target.value)}/>

        <input type="submit" value='submit'/>
      </form>
    </section>
  )
}