import loginImage from '../assets/login.png'

export default function Login() {
  return (
    <section className="contentContainer">
      <div className="heroImg">
        <img src={loginImage} alt="login woman"/>
      </div>
      <div className="mainContentContainer">
        <div className="description">
          <h1>Login</h1>
        </div>
      </div>
    </section>
  )
}