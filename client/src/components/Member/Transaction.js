export default function Transaction({img, date, name, description, amount}) {
  return (
    <div className="transaction">
      <div className="icon">
        <img src={img} alt="friend icon"/>
      </div>

      <div className="info">
        <h4>{description}</h4>
        <p>{date}</p>
      </div>

      <div className="amount">
        <p>{amount}</p>
      </div>

      <div className="action">
        <p><i className="far fa-check-circle approve"></i></p>
        <p><i className="far fa-times-circle deny"></i></p>
      </div>
    </div>
  )
}