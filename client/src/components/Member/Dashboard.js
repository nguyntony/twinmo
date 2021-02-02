import Sidebar from './Sidebar'

export default function Dashboard() {
  // this comp. will receive props but most importantly the isLoggedin
  return (
    <section className="dashboard">
      <Sidebar/>

    {/*  in the body we do the conditional render here isLoggedIn && props.chidlren */}

    </section>
  )
}