import signupImage from '../../assets/signup.png'
import {useEffect, useState} from 'react'
import axios from 'axios';
import {Switch, Route, Redirect, Link} from 'react-router-dom'

export default function Signup() {

  // hooks for form!
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  // hooks to check for validation and set icons
  const [emailValidation, setEmailValidation] = useState(false)
  const [usernameValidation, setUsernameValidation] = useState(false)
  const [passwordValidation, setPasswordValidation] = useState(false)
  const [emailIcon, setEmailIcon] = useState('')
  const [usernameIcon, setUsernameIcon] = useState('')
  const [passwordIcon, setPasswordIcon] = useState('')
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [successfulSignup, setSuccessfulSignup] = useState(false)
  const [btnColor, setBtnColor] = useState('#dfdfed')
  const [btnPointer, setBtnPointer] = useState('unset')
  const invalidIcon = "far fa-times-circle"
  const validIcon = "far fa-check-circle"

  // event handler fns
  const emailCheckHandler = async (e) => {
    const resp = await axios.post('/api/user/email-check', {email});
    
    if (resp.data.status) {
      setEmailIcon(invalidIcon)
      setEmailValidation(true)
    } else {
      if (email.includes('@')) {
        setEmailIcon(validIcon)
        setEmailValidation(true)
      } else {
        setEmailValidation(false)
      }
    }
  }

  const emailReset = e => {
    setEmailIcon('')
    setEmailValidation(false)
  }

  const usernameCheckHandler = async (e) => {
    const resp = await axios.post('/api/user/username-check', {username});

    if (resp.data.status) {
      setUsernameIcon(invalidIcon)
      setUsernameValidation(true)
    } else {
      if (username.length !== 0) {
        setUsernameIcon(validIcon)
        setUsernameValidation(true)
      } else {
        setUsernameValidation(false)
      }
    }
  }

  const usernameReset = e => {
    setUsernameIcon('')
    setUsernameValidation(false)
  }

  const processSignup = async (e) => {
    e.preventDefault();
    const resp = await axios.post('/api/user/new', {
      first,
      last,
      email,
      username,
      password
    })

    if (resp.data.status) {
      setSuccessfulSignup(true)
    } else {
      setSuccessfulSignup(false)
    }
  }

  const disabledBtnStyle = {
    color: btnColor,
    cursor: btnPointer
  }

  // check if the passwords match
  useEffect(()=> {
    if (password === passwordConfirmation && passwordConfirmation) {
      setPasswordIcon(validIcon)
      setPasswordValidation(true)
    } else if (password !== passwordConfirmation) {
      setPasswordIcon(invalidIcon)
      setPasswordValidation(true)
    } else if (password.length === 0 && passwordConfirmation.length === 0) {
      setPasswordIcon(invalidIcon)
      setPasswordValidation(false)
    }
  },[password, passwordConfirmation])

  // check if all three fields are valid
  useEffect(() => {
    if (emailIcon === validIcon && usernameIcon === validIcon && passwordIcon === validIcon && first && last) {
      
      setDisableSubmit(false)
      setBtnColor(null)
      setBtnPointer(null)
      
    } else {
      setDisableSubmit(true)
      setBtnColor('#9e9898')
      setBtnPointer('unset')
    }
  }, [emailIcon, usernameIcon, passwordIcon, first, last])

  // onload, set successful signup to false
  useEffect(()=> {
    setSuccessfulSignup(false)
  }, [])

  return (
    <section className="contentContainer">
      <div className="mainContentContainer signupContainer">
        <div className="description">
          <div className="form">
            <h1>Create account</h1>
            <form onSubmit={processSignup}>
              <div className="one-line">
                <div className="field">
                  <input type="text" name="first" required autoComplete="off" placeholder=" " onChange={e => setFirst(e.target.value)} value={first}
                  />
                  <label htmlFor="first" className="label">First Name</label>
                </div>
                <div className="field">
                  <input type="text" name="last" required autoComplete="off" placeholder=" " onChange={e => setLast(e.target.value)} value={last}/>
                  <label htmlFor="last" className="label">Last Name</label>
                </div>
              </div>

              <div className="one-line">
                <div className="field email">
                  <input type="email" name="email" required autoComplete="off" placeholder=" " onChange={e => setEmail(e.target.value)} onBlur={emailCheckHandler} onFocus={emailReset} value={email}/>
                  <label htmlFor="email" className="label">Email</label>
                  
                  {emailValidation && <p className="status"><i className={emailIcon}></i></p>}
                  
                </div>
              </div>

              <div className="one-line">
                <div className="field">
                  <input type="text" name="username" required autoComplete="off" placeholder=" " onChange={e => setUsername(e.target.value)} onBlur={usernameCheckHandler} onFocus={usernameReset} value={username}/>
                  <label htmlFor="username" className="label">Username</label>

                  {usernameValidation && <p className="status"><i className={usernameIcon}></i></p>}
                </div>
              </div>

              <div className="one-line">
              
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" " onChange={e => setPassword(e.target.value)} value={password}/>
                  <label htmlFor="password" className="label">Password</label>
                </div>

                <div className="field">
                  <input type="password" name="password-checker" required autoComplete="off" placeholder=" " onChange={e => setPasswordConfirmation(e.target.value)} value={passwordConfirmation}/>
                  <label htmlFor="password-checker" className="label">Confirm Password</label>

                  {passwordValidation && <p className="status"><i className={passwordIcon}></i></p>}
                </div>
              </div>    
              <div className="submit signup">
                <button type="submit" disabled={disableSubmit}><i className="fas fa-arrow-alt-circle-right" style={disabledBtnStyle}></i></button>
              </div>
              <p className="message">Already a member? <Link to="/user/login">Login</Link></p>
            </form>

            <Switch>
              <Route path='/user/signup' exact>
                {successfulSignup && <Redirect to='/user/login'/>}
              </Route>
            </Switch>
            
          </div>
        </div>
      </div>
      
      <div className="heroImg signupForm">
        <img src={signupImage} alt="signup man"/>
      </div>
    </section>
  )
}