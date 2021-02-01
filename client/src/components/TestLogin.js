import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function TestLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // create another state, possibly named 'isLoggedIn'
  // the state will start out as false

  const processLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post('/api/user/login', {
        email,
        password
      })
      console.log('You logged in!')
      // here if the user is logged in, we set the state to true and then we can conditionally do something with the bool
    } catch (e) {
      console.log('Cant login')
      // if the user failed to log in, we can do something else 
    }
  }

  // we can add that state as a dependency to this use effect hook, it will be set to false and whenever the user clicks on button to log in, we can register that event to manually change something, in the event the user failed to log in, we will render a message
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