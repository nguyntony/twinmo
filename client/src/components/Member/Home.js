import requestProfilePicture from '../../assets/demo_assets/peridot.png'
import pendingProfilePicture from '../../assets/demo_assets/connie.png'

export default function Home() {
  return (
    <section id="dashboardContentContainer">
      <div className="request-container">
        <div className="half-circle-bg"></div>
        <div className="icon">
          {/* img will go here */}
          <img src={requestProfilePicture} alt="profile pic of requester"/>
        </div>
        <div className="mostRecent">
          <h3>$10<span className="divider"></span>🌮 Dinner</h3>
        </div>

        <div className="title">
          <h1><a href="#">requests</a></h1>
          <div className="badge">
            <p>
              5
              {/* will grab data */}
            </p>
          </div>
        </div>
      </div>


      <div className="pending-container">
        <div className="half-circle-bg"></div>
        <div className="icon">
          {/* img will go here */}
          <img src={pendingProfilePicture} alt="profile picture"/>
        </div>
        <div className="mostRecent">
          <h3>$500<span className="divider"></span>Feb. Rent 💸</h3>
        </div>
        <div className="title">
          <h1><a href="#">pending</a></h1>
          <div className="badge">
            <p>
              2
              {/* will grab data */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}