import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Switch, Route, Redirect, Link, useLocation} from 'react-router-dom'
import numeral from 'numeral'
import {FundsContext} from "./FundsContext";

export default function Sidebar() {
  const [successfulLogout, setSuccessfulLogout] = useState(false);
  const [userData, setUserData] = useState({})
  const [userFunds, setUserFunds] = useState('')
  const {updateFundsContext, toggleContext, refreshSidebarContext} = useContext(FundsContext)
  const [updateFunds, setUpdateFunds] = updateFundsContext
  const [refreshSidebar, setRefreshSidebar] = refreshSidebarContext

  const [toggle, setToggle] = toggleContext

  const [PPErrorMsg, setPPErrorMsg] = useState('')

  const location = useLocation()
  const currentPath = location.pathname

  const highlight = {
    // backgroundColor: '#c6c6fa',
    textDecoration: 'underline',
    textDecorationColor: '#ff778f',
    textDecorationThickness: '2px',
    // color: '#ff99ab'
  }

  const iconHighlight = {
    color: '#ff778f'
  }

  const dashboardHighlight = currentPath === '/member/home' ? {...highlight} : null
  const friendsHighlight = currentPath === '/member/friends' ? {...highlight} : null
  const payRequestHighlight = currentPath === '/member/pay-request' ? {...highlight} : null
  const iconHome = currentPath === '/member/home' ? {...iconHighlight} : null
  const iconFriend = currentPath === '/member/friends' ? {...iconHighlight} : null
  const iconPayRequest = currentPath === '/member/pay-request' ? {...iconHighlight} : null
  const iconHistory = currentPath === '/member/history' ? {...iconHighlight} : null

  const getUserData = async () => {
    const resp = await axios.get('/api/member/user-data');
    setUserData(resp.data)
  }

  const getUserFunds = async () => {
    const resp = await axios.get('/api/member/user-funds');
    setUserFunds(resp.data.funds)
  }

  const profilePicChange = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append('file', file)
    console.log(file)
    if (file) {
      if (file.size < 1572864) {
        if (file.type === 'image/jepg' || file.type === 'image/png'){
          const resp = await axios.put('/api/user/profile-picture', data);
          if (resp.data.status) setRefreshSidebar(!refreshSidebar)
        } else {
          setPPErrorMsg('File must be in png or jpeg format')
        }
      } 
      else {
        setPPErrorMsg('File size is too large.')
      }
    }
  }

  const processLogout = async (e) => {
    const resp = axios.get('/api/logout');
    setSuccessfulLogout(true)
  }

  const toggleSidebar = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    setSuccessfulLogout(false);
    getUserData();
  }, [refreshSidebar])

  useEffect(()=> {
    getUserFunds()
  }, [updateFunds])

  return (
    <section className={toggle ? "sidebar open" : "sidebar"}>

        <div className="toggleIcon"><i className="fas fa-bars" onClick={toggleSidebar}></i></div>
        
        {toggle ? 
        <div className={toggle ? "sidebarContent active" : "sidebarContent"}>
          {/* <div className="profilePicture">
            <img src={userData.profilePic} alt="profile pic"/>
          </div> */}
          <form className='profilePicture'>
            <label htmlFor="pp-upload"><img src={userData.profilePic} alt="profile pic"/></label>
            <input id='pp-upload' type="file" name="content" onClick={()=> setPPErrorMsg('')} onChange={profilePicChange}/>
          </form>

          <p style={{color:'white', textAlign:'center'}}>{PPErrorMsg}</p>
    
          <div className="nameCard">
            <h3>{userData.first} {userData.last}</h3>
            <p>{numeral(userFunds).format('$0,0.00')}</p>
          </div>
    
          <nav id="dashNav">
            <ul>
              <li><Link to="/member/home" style={dashboardHighlight}>Dashboard</Link></li>
              <li><Link to="/member/friends" style={friendsHighlight}>Friends</Link></li>
              <li><Link to="/member/pay-request" style={payRequestHighlight}>Pay / Request</Link></li>
              <li><Link to="/member/history">History</Link></li>
            </ul>
          </nav>
    
          <nav id="dashSubNav">
            <ul>
              <li><Link to="/member/settings"><i className="fas fa-cog"></i></Link></li>
              <li><p onClick={processLogout}><i className="fas fa-sign-out-alt"></i></p></li>
            </ul>
          </nav>
        </div>
        :
        
          <nav id="quickLinks">
            <ul>
              <li><Link style={iconHome} to="/member/home"><i className="fas fa-home"></i></Link></li>
              <li><Link style={iconFriend} to="/member/friends"><i className="fas fa-user-friends"></i></Link></li>
              <li><Link style={iconPayRequest} to="/member/pay-request"><i className="fas fa-hand-holding-usd"></i></Link></li>
              <li><Link style={iconHistory} to="/member/history"><i className="fas fa-money-check-alt"></i></Link></li>
              {/* <li><p onClick={processLogout}><i className="fas fa-sign-out-alt"></i></p></li> */}
            </ul>
          </nav>
      
        }

      <Switch>
        <Route path={currentPath} exact>
          {successfulLogout && <Redirect to='/'/>}
        </Route>
      </Switch>
    </section>
  )
}