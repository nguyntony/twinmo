import { useState, useEffect } from 'react'
import {useLocation, Link} from 'react-router-dom'

export default function Nav() {

  const location = useLocation()
  const currentPath = location.pathname
  const underline = {
    textDecoration: 'underline', 
    textDecorationColor: '#ff778f',
    textDecorationThickness: '0.3rem'
  }

  const homePath = '/'
  const loginPath = '/user/login'
  const signupPath = '/user/signup'
  const aboutPath = '/about'
  const [showNav, setShowNav] = useState(false)

  const homeUnderline = currentPath === '/' ? {...underline} : null
  const loginUnderline = currentPath === '/user/login' ? {...underline} : null
  const aboutUnderline = currentPath === '/about' ? {...underline} : null

  // I can do the logic here to render a nav or not
  // {/* if path does not equal what I want then dont render the nav */}
  // {/* if path !== 'members-only' then render nav : null */}

  useEffect(()=> {
    if (currentPath === homePath || currentPath === loginPath || currentPath === signupPath || currentPath === aboutPath) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
  }, [currentPath])

  return (
    <>
    {showNav ? 
      <nav id="homeNav">
        <h2>twinmo</h2>
        
        <ul className="nav-list">
          <Link to='/'><li style={homeUnderline}>home</li></Link>
          <Link to='/about'><li style={aboutUnderline}>about</li></Link>
          <Link to='/user/login'><li style={loginUnderline}>login</li></Link>
        </ul>
      </nav> 
      :
        null
    }
    </>
  )
}