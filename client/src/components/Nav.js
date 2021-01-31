import {useLocation, Link} from 'react-router-dom'

export default function Nav() {

  const location = useLocation()
  const currentPath = location.pathname
  const underline = {
    textDecoration: 'underline', 
    textDecorationColor: '#ff778f',
    textDecorationThickness: '0.3rem'
  }

  const homeUnderline = currentPath === '/' ? {...underline} : null
  const loginUnderline = currentPath === '/user/login' ? {...underline} : null
  const aboutUnderline = currentPath === '/about' ? {...underline} : null

  return (
    <nav>
      <h2>twinmo</h2>
      
      <ul className="nav-list">
        <Link to='/'><li style={homeUnderline}>home</li></Link>
        <Link to='/about'><li style={aboutUnderline}>about</li></Link>
        <Link to='/user/login'><li style={loginUnderline}>login</li></Link>
      </ul>
    </nav>
  )
}