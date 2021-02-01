import signupImage from '../assets/signup.png'
import {useEffect, useState} from 'react'
import axios from 'axios';

export default function Signup() {

  // const test = true;
  // const message = test ? "this is a message" : ""

  // hooks to check all values from field
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [showMessage, setShowMessage] = useState(false) 
  const [alert, setAlert] = useState('default')
  const [emailUnique, setEmailUnique] = useState(false)
  const [usernameUnique, setUsernameUnique] = useState(false)
  const [passwordCheck, setPasswordCheck] = useState(false)

  const emailCheckHandler = async (e) => {
    // console.log(email)
    try {
      const resp = await axios.post('/api/user/email-check', {email})
      setShowMessage(true)
      setAlert('Email is already in use.')
    } catch (e) {
      if (email.includes('@')) {
        setEmailUnique(true)
      } else {
        setEmailUnique(false)
      }
    }
  }

  const usernameCheckHandler = async (e) => {
    try {
      const resp = await axios.post('/api/user/username-check', {username})
      setShowMessage(true)
      setAlert('Username has already been taken.')
    } catch (e) {
      if (username.length !== 0) {
        setUsernameUnique(true)
      } else {
        setUsernameUnique(false)
      }
    }
  }

  useEffect(()=> {
    if (password === password2 && password2) {
      setShowMessage(false)
      setAlert('')
      setPasswordCheck(true)
    } else if (password !== password2) {
      setShowMessage(true)
      setAlert('Passwords do not match.')
      setPasswordCheck(false)
      
    }
  },[password2])

  return (
    <section className="contentContainer">
      <div className="mainContentContainer">
        <div className="description">
          <div className="form">
            <h1>Create account</h1>
            <form>
              <div className="one-line">
                <div className="field">
                  <input type="text" name="first" required autoComplete="off" placeholder=" " onChange={e => setFirst(e.target.value)}
                  />
                  <label htmlFor="first" className="label">First Name</label>
                </div>
                <div className="field">
                  <input type="text" name="last" required autoComplete="off" placeholder=" " onChange={e => setLast(e.target.value)}/>
                  <label htmlFor="last" className="label">Last Name</label>
                </div>
              </div>

              <div className="one-line">
                <div className="field email">
                  <input type="email" name="email" required autoComplete="off" placeholder=" " onChange={e => setEmail(e.target.value)} onBlur={emailCheckHandler} onFocus={e => setShowMessage(false)}/>
                  <label htmlFor="email" className="label">Email</label>
                  
                  {emailUnique && <p className="status"><i className="far fa-check-circle"></i></p>}
                  
                </div>
              </div>

              <div className="one-line">
                <div className="field">
                  <input type="text" name="username" required autoComplete="off" placeholder=" " onChange={e => setUsername(e.target.value)} onBlur={usernameCheckHandler} onFocus={e => setShowMessage(false)}/>
                  <label htmlFor="username" className="label">Username</label>

                  {usernameUnique && <p className="status"><i className="far fa-check-circle"></i></p>}
                </div>
              </div>

              <div className="one-line">
              
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" " onChange={e => setPassword(e.target.value)}/>
                  <label htmlFor="password" className="label">Password</label>
                </div>

                <div className="field">
                  <input type="password" name="password-checker" required autoComplete="off" placeholder=" " onChange={e => setPassword2(e.target.value)}/>
                  <label htmlFor="password-checker" className="label">Confirm Password</label>

                  {passwordCheck && <p className="status"><i className="far fa-check-circle"></i></p>}
                </div>
              </div>
              
              {/* {showMessage && <p id="alert">{alert}</p>} */}
              
              <div className="submit signup">
                <button type="submit"><i className="fas fa-arrow-alt-circle-right"></i></button>
              </div>
              <p className="message">Already a member? <a href="/user/login">Login</a></p>
            </form>

            
          </div>
        </div>
      </div>
      
      <div className="heroImg">
        <img src={signupImage} alt="signup man"/>
      </div>
    </section>
  )
}