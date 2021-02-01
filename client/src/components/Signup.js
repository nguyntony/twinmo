import signupImage from '../assets/signup.png'

export default function Signup() {

  const test = true;
  const message = test ? "this is a message" : ""

  return (
    <section className="contentContainer">
      <div className="mainContentContainer">
        <div className="description">
          <div className="form">
            <h1>Create account</h1>
            <form>
              <div className="one-line">
                <div className="field">
                  <input type="text" name="first" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="first" className="label">First Name</label>
                </div>
                <div className="field">
                  <input type="text" name="last" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="last" className="label">Last Name</label>
                </div>
              </div>

              <div className="one-line">
                <div className="field email">
                  <input type="email" name="email" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="email" className="label">Email</label>
                </div>
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
              
              <p className="errorMessage">{message}</p>
              
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