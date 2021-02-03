import {useLocation} from 'react-router-dom'
import userProfilePicture from '../../assets/demo_assets/stevenuni.jpg'

export default function Sidarbar() {

  const location = useLocation()
  const currentPath = location.pathname

  const highlight = {
    // backgroundColor: '#c6c6fa',
    textDecoration: 'underline',
    textDecorationColor: '#ff778f',
    textDecorationThickness: '2px',
    // color: '#ff99ab'
  }

  const dashboardHighlight = currentPath === '/member/home' ? {...highlight} : null
  const friendsHighlight = currentPath === '/member/friends' ? {...highlight} : null
  const payRequestHighlight = currentPath === '/member/pay-request' ? {...highlight} : null

  return (
    <section id="sidebar">

      <div className="profilePicture">
        <img src={userProfilePicture} alt="profile pic"/>
        {/* will need to grab data here */}
      </div>

      <div className="nameCard">
        <h3>Steven Universe</h3> 
        {/* will need to grab data here */}
      </div>

      <nav id="dashNav">
        <ul>
          <li><a href="/member/home" style={dashboardHighlight}>Dashboard</a></li>
          <li><a href="/member/friends" style={friendsHighlight}>Friends</a></li>
          <li><a href="/member/pay-request" style={payRequestHighlight}>Pay / Request</a></li>
        </ul>
      </nav>

      <nav id="dashSubNav">
        <ul>
          <li><a href="#"><i className="fas fa-cog"></i></a></li>
          <li><a href="#"><i className="fas fa-sign-out-alt"></i></a></li>
        </ul>
      </nav>
    </section>
  )
}