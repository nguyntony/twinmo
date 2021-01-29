import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {PageHook} from './components/HomeHook'

import Home from './components/Home'
import Login from './components/Login'
import TestSignup from './components/TestSignup'
import TestLogin from './components/TestLogin'

function App() {
  const {page, setPage} = PageHook(false)

  return (
    <Router>
      <div className="App">
          <section id="bg">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </section>
  
        {/* I can have the window here but what gets rendered will be changed via routes. */}
        <div id="window">
          
          <nav>
            <h2>twinmo</h2>
            
            <ul className="nav-list">
              <Link to='/'><li>home</li></Link>
              <Link to='/user/login'><li>login</li></Link>
            </ul>
          </nav>
  
          <Switch>
              {/* more routes will go here */}
              <Route path='/' exact component={Home}/>
              <Route path='/user/login' exact component={Login}/>
              <Route path='/test/dummy/signup' exact component={TestSignup}/>
              <Route path='/test/dummy/login' exact component={TestLogin}/>
              
          </Switch>

        </div>
  
      </div>
    </Router>
  );
}

export default App;
