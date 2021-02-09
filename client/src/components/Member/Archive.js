import {useState, useEffect} from 'react'

export default function Archive({img, date, name, description, amount, username, transactionDetail, archivedIcon, month, year}) {

  const [icon, setIcon] = useState('')
  const up = "fas fa-chevron-circle-up"
  const down = "fas fa-chevron-circle-down"
  const neutral = "fas fa-minus-circle"

  useEffect(()=> {
    if (archivedIcon === "up") {setIcon(up)}
    else if (archivedIcon === "down") {setIcon(down)}
    else if (archivedIcon === "neutral") {setIcon(neutral)}
  }, [])

  return (
    <div className="archive">

      <div className="archiveIcon">
        <div className="icon">
          <img src={img} alt="friend icon"/>
        </div>
        <div className="username">
          {/* <p>@{username}</p> */}
        </div>
      </div>


      <div className="archiveInfo">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="description">
          <p><span className="date">{date}</span> {description}</p>
        </div>
      </div>

      <div className="amount">
        <h4 className={archivedIcon}><i className={icon}></i>{amount}</h4>
        <p>{transactionDetail}</p>
      </div>
    </div>
  )
}