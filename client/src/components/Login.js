import loginImage from '../assets/login.png'
import {useState} from 'react'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [alert, setAlert] = useState('')

  const processLogin = async (e) => {
    e.preventDefault();
    const resp = await axios.post('/api/user/login', {email, password})

    if (resp.data.loginStatus) {
      // will need to add a condition so that we can redirect to the member dashboard
      console.log('login successful')
    } else {
      setShowMessage(true)
      setAlert(resp.data.status)
    }
  }

  return (
    <section className="contentContainer">
      <div className="mainContentContainer">
        <div className="description">
          <div className="form">
          <h1>Welcome back</h1>
            <form onSubmit={processLogin}>
              <div className="one-line">
                <div className="field email">
                  <input type="email" name="email" required autoComplete="off" placeholder=" " onChange={e => setEmail(e.target.value)}/>
                  <label htmlFor="email" className="label">Email</label>
                </div>
  
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" " onChange={e => setPassword(e.target.value)}/>
                  <label htmlFor="password" className="label">Password</label>
                </div>
                <div className="submit login">
                  <button type="submit"><i className="fas fa-arrow-alt-circle-right"></i></button>
                </div>
              </div>
              {showMessage && <p id="alert">{alert}</p>}
              <p className="message">Not a member? <a href="/user/signup">Signup</a></p>
            </form>
          </div>
        </div>
      </div>
      <div className="heroImg">
        <img src={loginImage} alt="login woman"/>
      </div>
    </section>
  )
}