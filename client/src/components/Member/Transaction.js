export default function Transaction({img, date, name, description, amount, username}) {
  return (
    <div className="transaction">
      <div className="card-bg"></div>
      <div className="name">
        <h3>{name}</h3>
      </div>

      <div className="icon">
        <img src={img} alt="friend icon"/>
      </div>

      <div className="username">
        <p>@{username}</p>
      </div>

      <div className="info">
        <p>{description}</p>
        <h4>{amount}</h4>
      </div>

      <div className="action">
        <h4><i className="far fa-check-circle approve"></i></h4>
        <h4><i className="far fa-times-circle deny"></i></h4>
      </div>
    </div>
  )
}