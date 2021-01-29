import loginImage from '../assets/login.png'

export default function Login() {
  return (
    <section className="contentContainer">
      <div className="mainContentContainer">
        <div className="description">
          <div className="form">
          <h1>Login</h1>
            <form>
              <div className="one-line">
                <div className="field email">
                  <input type="email" name="email" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="email" className="label">Email</label>
                </div>
  
                <div className="field">
                  <input type="password" name="password" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="password" className="label">Password</label>
                </div>
                <div className="submit login">
                  <button type="submit"><i className="fas fa-arrow-alt-circle-right"></i></button>
                </div>
              </div>
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