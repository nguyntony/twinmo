import './styles/App.scss'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'


function App() {
  return (
    <Router>
      <div className="App">
          {/* <section id="bg">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="circle3"></div>
            <div className="circle4"></div>
          </section> */}
  
        {/* I can have the window here but what gets rendered will be changed via routes. */}
        <div id="window">
          
          <nav>
            <h2>twinmo.</h2>
            
            <ul className="nav-list">
              <li>home</li>
              <li>login</li>
            </ul>
          </nav>
  
          <Switch>
              <Route path='/' exact component={Home}></Route>
              
          </Switch>

        </div>
  
      </div>
    </Router>
  );
}

export default App;
