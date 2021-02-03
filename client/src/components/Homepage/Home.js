import hero from '../../assets/hero.png'
import {Link} from 'react-router-dom'

export default function Home() {

  return (

    <section className="contentContainer">
      <div className="heroImg">
        <img src={hero} alt="woman interacting with phone to send money"/>
      </div>
      <div className="mainContentContainer">
        <div className="homeContent">

          <div className="description">
            <h1>Best way to send money?</h1>
            <h2>Send it <span className="emphasis">with us!</span></h2>
            <h3>Quick, easy and secure way to transfer money.</h3>
          </div>

          <Link to='/user/signup' className="btnLink"><button className="joinBtn">Join now</button></Link>
        </div>
      </div>
    </section>

  )
}