import axios from 'axios'
import {useEffect, useState, useContext} from 'react'
import {useLocation} from 'react-router-dom'
import { FundsContext } from "./FundsContext";

export default function Transaction({img, name, description, amount, username, status, approved, transactionID, friendID, requestProcessed, setRequestProcessed}) {

  const [showAction, setShowAction] = useState(true)
  const [errorMsg, setErrorMsg] = useState(false)

  const {updateFundsContext} = useContext(FundsContext)
  const [updateFunds, setUpdateFunds] = updateFundsContext
  const pendingPath = '/member/payment'

  const location = useLocation()
  const currentPath = location.pathname

  const approvedResponseHandler = async (e) => {
    const resp = await axios.put('/api/member/transaction/user-approve', {
      transactionID,
      friendID,
      amount
    })

    if (resp.data.status) {
      // console.log(resp.data.message)
      setUpdateFunds(!updateFunds)
      setRequestProcessed(!requestProcessed)
    } else {
      setErrorMsg(true)
    }
  }

  const denyResponseHandler = async (e) => {
    const resp = await axios.put('/api/member/transaction/user-deny', {
      transactionID
    })

    setRequestProcessed(!requestProcessed)
  }

  useEffect(()=> {
    if (currentPath === pendingPath) {setShowAction(false)}
  }, [])

  return (
    <div className="transaction" >
      <div className="card-bg"></div>
      <div className="name">
        <h3>{name}</h3>
      </div>


      <div className="iconStatus">
        <div className="icon">
          <img src={img} alt="friend icon"/>
        </div>
        {
          status && 
          <div className={ approved ? "status approved" : "status denied"}>
            <h4>
              {
                approved ? <i className="fas fa-check"></i> : 
                <i className="fas fa-times"></i>
              }
            </h4>
          </div>
          }
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
      <>
        <div className="action">
          <h4 onClick={approvedResponseHandler}><i className="far fa-check-circle approve"></i></h4>
          <h4 onClick={denyResponseHandler}><i className="far fa-times-circle deny"></i></h4>
        </div>
        { errorMsg && <p className='errorMsg'>Insufficient Funds</p> }
      </>
    }


    </div>
  )
}