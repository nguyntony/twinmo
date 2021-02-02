import Sidebar from './Sidebar'
import DashboardContentContainer from './DashboardContentContainer'

export default function Dashboard() {
  return (
    <section id="dashboardContainer">
      <Sidebar/>
      <DashboardContentContainer/>
    </section>
  )
}