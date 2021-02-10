import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Settings() {

  // hooks for forms
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordCheck, setNewPasswordCheck] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [currentPasswordCheck, setCurrectPasswordCheck] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [buttonStyle, setButtonStyle] = useState({backgroundColor: "#dfdfed", cursor: "unset"})
  const [showEmailIcon, setShowEmailIcon] = useState(false)
  const [showUserIcon, setShowUserIcon] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [emailIcon, setEmailIcon] = useState('')
  const [userIcon, setUserIcon] = useState('')
  const [currentIcon, setCurrentIcon] = useState('')
  const [newIcon, setNewIcon] = useState('')
  const invalidIcon = "far fa-times-circle"
  const validIcon = "far fa-check-circle"

  const [submitMessage, setSubmitMessage] = useState('')

  // events

  // if the current password === the current password check then it will turn on the button
  // I will accomplish that with an onblur
  // const currentPasswordConfirmation = () => {
  //   if (currentPassword === currentPasswordCheck) {setDisabled(false)}
  // }

  // Submit button to change the information.
  const submitHandler = async (e) => {
    e.preventDefault()
    const resp = await axios.put('/api/member/user/update', {
      first,
      last,
      email,
      username,
      password: currentPassword,
      newPassword
    })

    if (resp.data.status) {
      setSubmitMessage('Changes have been succesfully updated.')
    } else {
      setSubmitMessage('Incorrect password.')
    }
    setFirst('')
    setLast('')
    setEmail('')
    setUsername('')
    setNewPassword('')
    setNewPasswordCheck('')
    setCurrectPasswordCheck('')
    setCurrentPassword('')
  }

  // I need to grab the api for emails
  const isEmailUnique = async () => {
    const resp = await axios.post('/api/user/email-check', {email});

    if (resp.data.status) {
      setEmailIcon(invalidIcon)
      setShowEmailIcon(true)
    } else {
      if (email.includes("@")){
        setEmailIcon(validIcon)
        setShowEmailIcon(true)
      } else {
          setShowEmailIcon(false)
      }
    }
  }

  const emailReset = () => {
    setEmailIcon('')
    setShowEmailIcon(false)
    setDisabled(true)
  }

  const isUsernameUnique = async () => {
    const resp = await axios.post('/api/user/username-check', {username})

    if (resp.data.status) {
      setUserIcon(invalidIcon)
      setShowUserIcon(true)
    } else {
      if (username.length !== 0) {
        setUserIcon(validIcon)
        setShowUserIcon(true)
      } else {
        setShowUserIcon(false)
      }
    }
  }

  const usernameReset = e => {
    setUserIcon('')
    setShowUserIcon(false)
    setDisabled(true)
  }

  // check if new passwords match
  useEffect(() => {
    setDisabled(true)
    if (newPassword === newPasswordCheck && newPasswordCheck) {
      setNewIcon(validIcon)
      setShowNew(true)
    } else if (newPassword !== newPasswordCheck) {
      setNewIcon(invalidIcon)
      setShowNew(true)
    } else if (newPassword.length === 0 && newPasswordCheck.length === 0) {
      setNewIcon(invalidIcon)
      setShowNew(false)
    }
  }, [newPassword, newPasswordCheck])


  // check if current passwords match
  useEffect(()=> {
    if (currentPassword === currentPasswordCheck && currentPasswordCheck) {
      setCurrentIcon(validIcon)
      setShowCurrent(true)

      if (emailIcon === invalidIcon &&  showEmailIcon) {
        setDisabled(true)
      } else if (userIcon === invalidIcon && showUserIcon) {
        setDisabled(true)
      } else if ( !showUserIcon && username ){
        setDisabled(true)
      } else if (!showEmailIcon && email ) {
        setDisabled(true)
      } else if (showNew && newPassword && newIcon === invalidIcon) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }


    } else if (currentPassword !== currentPasswordCheck) {
      setCurrentIcon(invalidIcon)
      setShowCurrent(true)
      setDisabled(true)
    } else if (currentPassword.length === 0 && currentPasswordCheck.length === 0) {
      setCurrentIcon(invalidIcon)
      setShowCurrent(false)
      setDisabled(true)
    }
    // console.log(`emailIcon ${emailIcon}`)
    // console.log(`showEmailIcon ${showEmailIcon}`)
    // console.log(`validIcon ${validIcon}`)
  }, [currentPassword, currentPasswordCheck, showEmailIcon, showUserIcon, showNew, newIcon])

  useEffect(()=> {
    setSubmitMessage('')
  }, [])

  return (
    <section id="settingsContainer">
      <h1>profile</h1>
      <div className="settingsForm">
        <h3>Update your information</h3>
        <p>Fill out the fields that you wish to update then enter your current password to save the changes.</p>
        <form onSubmit={submitHandler}>
          {/* FIRST & LAST NAME */}
              <div className="one-line">
                <div className="field">
                  <input type="text" name="first" autoComplete="off" placeholder=" "
                  onChange={e => setFirst(e.target.value)} value={first}/>
                  <label htmlFor="first" className="label">First Name</label>
                </div>
                <div className="field">
                  <input type="text" name="last" autoComplete="off" placeholder=" "
                  onChange={e => setLast(e.target.value)} value={last}/>
                  <label htmlFor="last" className="label">Last Name</label>
                </div>
              </div>

              {/* EMAIL */}
              <div className="one-line">
                <div className="field email">
                  <input type="email" name="email" autoComplete="off" placeholder=" " onChange={e => setEmail(e.target.value)} value={email}
                  onBlur={isEmailUnique}
                  onFocus={emailReset}
                  />
                  <label htmlFor="email" className="label">Email</label>
                  
                  {showEmailIcon && <p className="status"><i className={emailIcon}></i></p>}
                  
                </div>
              </div>


              {/* USERNAME */}
              <div className="one-line">
                <div className="field">
                  <input type="text" name="username" autoComplete="off" placeholder=" "
                  onChange={e=>setUsername(e.target.value)} value={username}
                  onBlur={isUsernameUnique}
                  onFocus={usernameReset}
                  />
                  <label htmlFor="username" className="label">Username</label>

                  {showUserIcon && <p className="status"><i className={userIcon}></i></p>}
                  
                </div>
              </div>

              {/* NEW PASSWORD */}
              {/* NEW STATE. IF THERE IS CONTENT IN NEW PASSWORD, MAKE THE CONFIRM NEW PASSWORD REQUIRED */}
              <div className="one-line">
                
                <div className="field">
                  <input type="password" name="new-password"  autoComplete="off" placeholder=" " onChange={e=>setNewPassword(e.target.value)} value={newPassword}/>
                  <label htmlFor="password" className="label">New Password</label>
                </div>
                <div className="field">
                  <input type="password" name="new-password-checker"  autoComplete="off" placeholder=" " onChange={e=>setNewPasswordCheck(e.target.value)} 
                  value={newPasswordCheck}/>
                  <label htmlFor="password-checker" className="label">Confirm New Password</label>

                  {showNew && <p className="status"><i className={newIcon}></i></p>}
                </div>

              </div>  
      
              {/* CURRENT PASSWORD */}
              <div className="one-line">
              
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" " onChange={e=>setCurrentPassword(e.target.value)} value={currentPassword}/>
                  <label htmlFor="password" className="label">Password</label>
                </div>
                <div className="field">
                  <input type="password" name="password-checker" required autoComplete="off" placeholder=" " onChange={e=>setCurrectPasswordCheck(e.target.value)} value={currentPasswordCheck}/>
                  <label htmlFor="password-checker" className="label">Confirm Password</label>

                  {showCurrent && <p className="status"><i className={currentIcon}></i></p>}
                </div>

              </div>  

                {/* BUTTON */}
              <div className="button">
                <button type="submit" disabled={disabled} style={disabled ? buttonStyle : null}><h4>Save changes</h4></button>
              </div>
              <p id="updateStatus">{submitMessage}</p>
            </form>
      </div>
    </section>
  )
}