export default function Archive({img, date, name, description, amount, username, status, approved}) {

  return (
    <div className="archive">

      <div className="archiveIcon">
        <div className="icon">
          <img src={img} alt="friend icon"/>
        </div>
        <div className="username">
          <p>@{username}</p>
        </div>
      </div>


      <div className="archiveInfo">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>

      <div className="amount">
        <h4>{amount}</h4>
      </div>
    </div>
  )
}