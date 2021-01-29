import hero from '../assets/hero.png'
import {Link} from 'react-router-dom'

export default function Home() {
  return (

    <section className="contentContainer">
      <div className="heroImg">
        <img src={hero} alt="woman interacting with phone to send money"/>
      </div>
      <div className="mainContentContainer">
        <div className="homeContent">
          <Link to='/user/signup' className="btnLink"><button className="joinBtn">Join now</button></Link>

          <div className="description">
            <h1>Best way to send money?</h1>
            <h2>Just send it <span className="emphasis">(with us)!</span></h2>
            <h3>twinmo is a quick, easy and secure way to send/receive money from anyone.</h3>
          </div>



          <Link to='#' className="btnLink"><button className="infoBtn">more info<i className="far fa-arrow-alt-circle-right"></i></button>
          </Link>
        </div>
      </div>
    </section>

  )
}