import Background from './Background'
import Sidebar from './Sidebar'
import Home from './Home'

export function MemberLayout(props) {
  return (
    <section id="MemberWindow">
      <Background/>
      <section id="dashboardContainer">
        <Sidebar/>
        <props.component/>
      </section>
    </section>
  )
}

export const memberRoute = [
  {route: 'home', path: '/member/dashboard', component: Home}
]