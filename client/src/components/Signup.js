import signupImage from '../assets/signup.png'
import {useState} from 'react'
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
  const [passwordCheck, setPasswordCheck] = useState('')
  const [showMessage, setShowMessage] = useState(true) 
  const [alert, setAlert] = useState('default')

  const emailHandler = async (e) => {
    try {
      const resp = await axios.post('/api/user/email-check', email)
    } catch (e) {
      setShowMessage(false)
      setAlert('Email is already in use.')
    }
  }

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
                  <input type="email" name="email" required autoComplete="off" placeholder=" " onChange={e => e.target.value} onBlur={emailHandler}/>
                  <label htmlFor="email" className="label">Email</label>
                </div>
                  {/* {!showMessage && <p>Email is already in use.</p>} */}
              </div>

              <div className="one-line">
                <div className="field">
                  <input type="text" name="username" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="username" className="label">Username</label>
                </div>
              </div>

              <div className="one-line">
                <div className="field">
                  <input type="password" name="password-checker" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password-checker" className="label">Confirm Password</label>
                </div>
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password" className="label">Password</label>
                </div>
              </div>
              
              {showMessage && <p>{alert}</p>}
              
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