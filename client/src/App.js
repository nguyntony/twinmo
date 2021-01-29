import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import TestSignup from './components/TestSignup'
import TestLogin from './components/TestLogin'

function App() {

  return (
    <Router>
      <div className="App">
          <section id="bg">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </section>
  
        <div id="window">
          <Nav />
  
          <Switch>
              {/* more routes will go here */}
              <Route path='/' exact component={Home}/>
              <Route path='/user/login' exact component={Login}/>
              <Route path='/user/signup' exact component={Signup}/>
              <Route path='/test/dummy/signup' exact component={TestSignup}/>
              <Route path='/test/dummy/login' exact component={TestLogin}/>
              
          </Switch>

        </div>
  
      </div>
    </Router>
  );
}

export default App;
