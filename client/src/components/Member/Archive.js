import {useState, useEffect} from 'react'

export default function Archive({img, date, name, description, amount, transactionDetail, archivedIcon}) {

  const [icon, setIcon] = useState('')
  const [caption, setCaption] = useState('')
  const up = "fas fa-chevron-circle-up"
  const down = "fas fa-chevron-circle-down"
  const neutral = "fas fa-minus-circle"
  const received = "up"
  const sent = "down"
  const denied = "no-change"


  useEffect(()=> {
    if (archivedIcon === "received") {
      setIcon(up) 
      setCaption(received)
    }
    else if (archivedIcon === "sent") {
      setIcon(down)
      setCaption(sent)
    }
    else if (archivedIcon === "declined") {
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
          {transactionDetail.split(' ')[0] === 'sent' ?
          <p className="message">{name.split(' ')[0]} {transactionDetail}</p>
          : <p className="message">{transactionDetail} {name.split(' ')[0]}</p>
          }
        </div>
      </div>

      <div className="amount">
        <h4 className={archivedIcon}><i className={icon}></i>{amount}</h4>
        <p className={caption}>{archivedIcon}</p>
      </div>
    </div>
  )
}