import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react'

import TestSignup from './components/TestSignup'
import TestLogin from './components/TestLogin'

import {FundsProvider} from './components/Member/FundsContext'

import Protected from './components/Member/Protected'
import {HomepageLayout, homeRoute} from './components/Homepage/HomeLayout'
import {MemberLayout, memberRoute} from './components/Member/MemberLayout'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
      
          <Switch>

              {/* will be deleted */}
              <Route path='/test/dummy/signup' exact component={TestSignup}/>
              <Route path='/test/dummy/login' exact component={TestLogin}/>

              {/* homepage */}
              {homeRoute.map(r => (
                <Route path={r.path} key={r.route} exact>
                  <HomepageLayout component={r.component}/>
                </Route>
              ))}


              {/* members-only */}
              <Protected isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                
                <FundsProvider>
                  {memberRoute.map(r => (
                    <Route path={r.path} key={r.route} exact>
                      <MemberLayout component={r.component}/>
                    </Route>
                  ))}
                </FundsProvider>

              </Protected>
              
          </Switch>
      </div>
    </Router>
  );
}

export default App;
