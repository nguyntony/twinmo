import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Homepage/Home'
import Nav from './components/Homepage/Nav'
import Login from './components/Homepage/Login'
import Signup from './components/Homepage/Signup'
import About from './components/Homepage/About'
import TestSignup from './components/TestSignup'
import TestLogin from './components/TestLogin'

import DashboardContainer from './components/Member/DashboardContainer'
import TestMember from './components/Member/TestMember'
import { useEffect, useState } from 'react'


import Protected from './components/Member/Protected'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
        {/* <Switch>  */}
          <section id="bg">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </section>
  
        <div id="window">
          <Nav />
  
          <Switch>

              <Route path='/' exact component={Home}/>
              <Route path='/user/login' exact component={Login}/>
              <Route path='/user/signup' exact component={Signup}/>
              <Route path='/about' exact component={About}/>
              <Route path='/test/dummy/signup' exact component={TestSignup}/>
              <Route path='/test/dummy/login' exact component={TestLogin}/>
              
              <Protected isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                <Route path='/member/dashboard' component={DashboardContainer}/>
              </Protected>
              
          </Switch>

        </div>
      {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
