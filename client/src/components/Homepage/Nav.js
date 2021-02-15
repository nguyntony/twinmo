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

  const [toggle, setToggle] = useState(true)

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
      <nav className="homeNav">
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

    {showNav ? 
      <nav className="responsive">
        <h2>twinmo</h2>

        <div className="menu">
          <div className="toggleIcon"><i className="fas fa-caret-down" onClick={() => setToggle(!toggle)}></i></div>
          <ul className={toggle ? "responsiveNav hidden" : "responsiveNav"}>
            <Link to='/'><li style={homeUnderline}>home</li></Link>
            <Link to='/about'><li style={aboutUnderline}>about</li></Link>
            <Link to='/user/login'><li style={loginUnderline}>login</li></Link>
          </ul>
        </div>
      </nav> 
      :
      null
    }
    </>
  )
}