import {useLocation} from 'react-router-dom'

export default function Sidarbar() {

  const location = useLocation()
  const currentPath = location.pathname

  const highlight = {
    // backgroundColor: '#c6c6fa',
    textDecoration: 'underline',
    textDecorationColor: '#ff778f',
    textDecorationThickness: '0.2rem'
  }

  const dashboardHighlight = currentPath === '/member/dashboard' ? {...highlight} : null
  const friendsHighlight = currentPath === '/member/friends' ? {...highlight} : null
  const payRequestHighlight = currentPath === '/member/pay-request' ? {...highlight} : null

  return (
    <section id="sidebar">

      <div className="profilePicture">
        {/* <img src="" alt=""/> */}
        {/* will need to grab data here */}
      </div>

      <div className="nameCard">
        <h3>Steven Universe</h3> 
        {/* will need to grab data here */}
      </div>

      <nav id="dashNav">
        <ul>
          <li><a href="/member/dashboard" style={dashboardHighlight}>Dashboard</a></li>
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