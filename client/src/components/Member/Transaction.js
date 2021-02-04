export default function Transaction({img, date, name, description, amount}) {
  return (
    <div className="transaction">
      <div className="icon">
        <img src={img} alt="friend icon"/>
      </div>

      <div className="amount">
        <h4>{amount}</h4>
      </div>


      <div className="info">
        <p>{description}</p>
        <p>{date}</p>
      </div>


      <div className="action">
        <h4><i className="far fa-check-circle approve"></i></h4>
        <h4><i className="far fa-times-circle deny"></i></h4>
      </div>
    </div>
  )
}