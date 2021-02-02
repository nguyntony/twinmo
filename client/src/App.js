import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Homepage/Home'
import Nav from './components/Homepage/Nav'
import Login from './components/Homepage/Login'
import Signup from './components/Homepage/Signup'
import About from './components/Homepage/About'
import TestSignup from './components/TestSignup'
import TestLogin from './components/TestLogin'

import Dashboard from './components/Member/Dashboard'
import TestMember from './components/Member/TestMember'

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

              <Route path='/' exact component={Home}/>
              <Route path='/user/login' exact component={Login}/>
              <Route path='/user/signup' exact component={Signup}/>
              <Route path='/about' exact component={About}/>
              <Route path='/test/dummy/signup' exact component={TestSignup}/>
              <Route path='/test/dummy/login' exact component={TestLogin}/>
              {/* <Route path='/member' component={TestMember}/> */}
              <Route path='/member/dashboard' component={Dashboard}/>
              
          </Switch>

        </div>
  
      </div>
    </Router>
  );
}

export default App;
