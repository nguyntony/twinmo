import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import About from './About'
import Background from './Background'

export function HomepageLayout(props) {
  return(
    <section id="HomeWindow">
      <Background/>
      <section id="homepageContainer">
        <Nav/>
        <props.component/>
      </section>
    </section>
  )
}

export const homeRoute = [
  {route: 'home', path: '/', component: Home},
  {route: 'login', path: '/user/login', component: Login},
  {route: 'signup', path: '/user/signup', component: Signup},
  {route: 'about', path: '/about', component: About}
]