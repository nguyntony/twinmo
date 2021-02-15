import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useState } from 'react'
import {FundsProvider} from './components/Member/FundsContext'
import Protected from './components/Member/Protected'
import {HomepageLayout, homeRoute} from './components/Homepage/HomeLayout'
import {MemberLayout, memberRoute} from './components/Member/MemberLayout'
import Error from './components/404Error'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <div className="App">
      
          <Switch>

                {/* homepage */}
                {homeRoute.map(r => (
                  <Route path={r.path} key={r.route} exact>
                    <HomepageLayout component={r.component}/>
                  </Route>
                ))}
  
                {/* members-only */}
                <Route path='/member'>
                  <Protected isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                    
                        <FundsProvider>
                          <Switch>

                            {memberRoute.map(r => (
                              <Route path={r.path} key={r.route} exact>
                                <MemberLayout component={r.component}/>
                              </Route>
                            ))}
                            <Route path='*' component={Error}/>
                          </Switch>
                        </FundsProvider>
        
                  </Protected>
                </Route>

                <Route path='*' component={Error}/>
              
          </Switch>
      </div>
    </Router>
  );
}

export default App;
