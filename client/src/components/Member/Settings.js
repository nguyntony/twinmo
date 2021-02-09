import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Settings() {

  // hooks for forms
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  return (
    <section id="settingsContainer">
      <h1>profile</h1>
      <div className="settingsForm">
        <h3>Update your information</h3>
        <p>Fill out the fields that you wish to update then enter your current password to save the changes.</p>
        <form>
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
                  <input type="email" name="email" autoComplete="off" placeholder=" " onChange={e => setEmail(e.target.value)} value={email}/>
                  <label htmlFor="email" className="label">Email</label>
                  
                  {}
                  
                </div>
              </div>


              {/* USERNAME */}
              <div className="one-line">
                <div className="field">
                  <input type="text" name="username" autoComplete="off" placeholder=" "
                  onChange={e=>setUsername(e.target.value)} value={username}/>
                  <label htmlFor="username" className="label">Username</label>

                  {}
                </div>
              </div>

              {/* NEW PASSWORD */}
              <div className="one-line">
                
                <div className="field">
                  <input type="password" name="new-password" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password" className="label">New Password</label>
                </div>
                <div className="field">
                  <input type="password" name="new-password-checker" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password-checker" className="label">Confirm Password</label>

                  {}
                </div>

              </div>  
      
              {/* CURRENT PASSWORD */}
              <div className="one-line">
              
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password" className="label">Password</label>
                </div>
                <div className="field">
                  <input type="password" name="password-checker" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password-checker" className="label">Confirm Password</label>

                  {}
                </div>

              </div>  

                {/* BUTTON */}
              <div className="button">
                <button type="submit"><h4>Save changes</h4></button>
              </div>
            </form>
      </div>
    </section>
  )
}