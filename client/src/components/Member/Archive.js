import {useState, useEffect} from 'react'

export default function Archive({img, date, name, description, amount, username, transactionDetail, archivedIcon, month, year}) {

  const [icon, setIcon] = useState('')
  const [caption, setCaption] = useState('')
  const up = "fas fa-chevron-circle-up"
  const down = "fas fa-chevron-circle-down"
  const neutral = "fas fa-minus-circle"
  const received = "received"
  const sent = "sent"
  const denied = "no-change"


  useEffect(()=> {
    if (archivedIcon === "up") {
      setIcon(up) 
      setCaption(received)
    }
    else if (archivedIcon === "down") {
      setIcon(down)
      setCaption(sent)
    }
    else if (archivedIcon === "neutral") {
      setIcon(neutral)
      setCaption(denied)
    }
  }, [])

  return (
    <div className="archive">

      <div className="archiveIcon">
        <div className="icon">
          <img src={img} alt="friend icon"/>
        </div>
      </div>


      <div className="archiveInfo">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="description">
          <p><span className="date">{date}</span> {description}</p>
        </div>
        <div className="type">
          <p className="message">friend sent a request</p>
        </div>
      </div>

      <div className="amount">
        <h4 className={archivedIcon}><i className={icon}></i>{amount}</h4>
        <p className={caption}>{transactionDetail}</p>
      </div>
    </div>
  )
}