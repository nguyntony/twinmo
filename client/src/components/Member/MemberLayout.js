import Background from './Background'
import Sidebar from './Sidebar'
import Home from './Home'
import Friends from './Friends'
import PayRequestForm from './PayRequestForm'
import Request from './Request'
import Payment from './Payment'
import History from './History'

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
  {route: 'home', path: '/member/home', component: Home},
  {route: 'friends', path: '/member/friends', component: Friends},
  {route: 'pay/request', path: '/member/pay-request', component: PayRequestForm},
  {route: 'request', path: '/member/request', component: Request},
  {route: 'pending', path: '/member/payment', component: Payment},
  {route: 'history', path: '/member/history', component: History}
]