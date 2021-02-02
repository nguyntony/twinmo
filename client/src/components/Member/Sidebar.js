export default function Sidarbar() {
  return (
    <section id="sidebar">
      {/* this will take the same space as the 'window' */}

      <div className="profilePicture">
        {/* <img src="" alt=""/> */}
      </div>

      <div className="nameCard">
        <h2>Your Name</h2>
      </div>

      <nav id="dashNav">
        <ul>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </ul>
      </nav>

      <nav id="dashSubNav">
        <ul>
          <li>logout</li>
          <li>settings</li>
        </ul>
      </nav>
    </section>
  )
}