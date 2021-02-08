import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import numeral from 'numeral'
import { FundsContext } from "./FundsContext";

export default function Sidebar() {
  const [successfulLogout, setSuccessfulLogout] = useState(false);
  const [userData, setUserData] = useState({})
  const [userFunds, setUserFunds] = useState('')
  
  const [updateFunds, setUpdateFunds] = useContext(FundsContext)

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

  const getUserData = async () => {
    const resp = await axios.get('/api/member/user-data');
    setUserData(resp.data)
  }

  const getUserFunds = async () => {
    const resp = await axios.get('/api/member/user-funds');
    setUserFunds(resp.data.funds)
  }

  const processLogout = async (e) => {
    const resp = axios.get('/api/logout');
    setSuccessfulLogout(true)
  }

  useEffect(() => {
    setSuccessfulLogout(false);
    getUserData();
  }, [])

  useEffect(()=> {
    console.log('Funds changed')
    getUserFunds()
  }, [updateFunds])

  return (
    <section id="sidebar">

      <div className="profilePicture">
        <img src={userData.profilePic} alt="profile pic"/>
      </div>

      <div className="nameCard">
        <h3>{userData.first} {userData.last}</h3>
        <p>{numeral(userFunds).format('$0,0.00')}</p>
      </div>

      <nav id="dashNav">
        <ul>
          <li><a href="/member/home" style={dashboardHighlight}>Dashboard</a></li>
          <li><a href="/member/friends" style={friendsHighlight}>Friends</a></li>
          <li><a href="/member/pay-request" style={payRequestHighlight}>Pay / Request</a></li>
          <li><a href="#">History</a></li>
        </ul>
      </nav>

      <nav id="dashSubNav">
        <ul>
          <li><a href="#"><i className="fas fa-cog"></i></a></li>
          <li><a onClick={processLogout}><i className="fas fa-sign-out-alt" onClick={processLogout}></i></a></li>
        </ul>
      </nav>
      <Switch>
        <Route path={currentPath} exact>
          {successfulLogout && <Redirect to='/'/>}
        </Route>
      </Switch>
    </section>
  )
}