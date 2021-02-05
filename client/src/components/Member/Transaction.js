import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'


export default function Transaction({img, date, name, description, amount, username, status, approved}) {

  const [showAction, setShowAction] = useState(true)
  const requestPath = '/member/request'
  const pendingPath = '/member/payment'

  const location = useLocation()
  const currentPath = location.pathname

  useEffect(()=> {
    if (currentPath === pendingPath) {setShowAction(false)}
  }, [])

  return (
    <div className="transaction">
      <div className="card-bg"></div>
      {/* {
        status &&
        <div className="archive"><h4 id="test"><i className="fas fa-archive"></i></h4></div>
        
      } */}
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

    {  
      showAction &&
      <div className="action">
        <h4><i className="far fa-check-circle approve"></i></h4>
        <h4><i className="far fa-times-circle deny"></i></h4>
      </div>
    }

    {
      status && 
      <div className="action">
        <h4>
          {
            approved ? <i className="far fa-check-circle approved"></i> : 
            <i className="far fa-times-circle denied"></i>
          }
          
          </h4>
        <h4><i className="fas fa-archive archive"></i></h4>
      </div>
    }
    </div>
  )
}