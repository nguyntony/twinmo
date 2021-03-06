import axios from 'axios';
import {useEffect, useState} from 'react';
import Transaction from './Transaction'
import numeral from 'numeral'
import moment from 'moment'
import {Link} from 'react-router-dom'

export default function Pending() {
  const [outgoingPayments, setOutgoingPayments] = useState([])
  const [completedPayments, setCompletedPayments] = useState([])
  const [receivedPayments, setReceivedPayments] = useState([])
  const [outgoing, setOutgoing] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [received, setReceived] = useState(true)
  const [refreshData, setRefreshData] = useState(false)

  const getRequests = async () => {
    const resp = await axios.get('/api/member/payment/list')
    // console.log(resp.data.filter(d => d.type === 'payment'))
    const data = resp.data
    setOutgoingPayments(data.filter(d => !d.status && d.type === 'request'))
    setCompletedPayments(data.filter(d => d.status && d.type === 'request' && !d.archived))
    setReceivedPayments(data.filter(d => d.type === 'payment' && !d.archived))
  }

  const completedList = () => {
    if (!completed) {
      setCompleted(true)
      setOutgoing(false)
      setReceived(false)
    }
  }

  const outgoingList = () => {
    if (!outgoing) {
      setOutgoing(true)
      setCompleted(false)
      setReceived(false)
    }
  }

  const receivedList = () => {
    if (!received) {
      setReceived(true)
      setCompleted(false)
      setOutgoing(false)
    }
  }

  const archivePage = async () => {
    let ids = []
    if (received) {
      ids = receivedPayments.map(p => p.id)
    } else if (completed) {
      ids = completedPayments.map(p => p.id)
    }

    const resp = await axios.put('/api/member/transaction/archive', {ids})  
    
    if (resp.data.status) setRefreshData(!refreshData)
  }
  
  const selectedList = {
    backgroundColor: '#ffdab9',
    cursor: 'unset'
  }

  useEffect(()=>{
    getRequests()
  }, [refreshData])

  return (
    <section id="memberView">
      <div className="title">
        <h1>payments</h1>
        <h4><Link to="/member/request" className="request-link">requests <i className="fas fa-caret-right"></i></Link></h4>
      </div>

        <div className="paymentNav">
          <div className="titleBar">
            <h3
            onClick={receivedList}
            style={received ? selectedList : null}>
              received

              <span className="badge">
                {receivedPayments.length === 0 ? null : receivedPayments.length}
              </span>
            </h3>
          </div>

          <div className="titleBar">
            <h3 
            onClick={completedList}
            style={completed ? selectedList : null}
            >completed

              <span className="badge">
                {completedPayments.length === 0 ? null : completedPayments.length}
              </span>
          </h3>
          </div>
  
          <div className="titleBar">
              <h3 
              onClick={outgoingList}
              style={outgoing ? selectedList : null}
              >outgoing

              <span className="badge">
                {outgoingPayments.length === 0 ? null : outgoingPayments.length}
              </span>
              </h3>
          </div>

          {
            received &&
            <div className="checkmark">
              <h3 onClick={archivePage}><i className="fas fa-check"></i></h3>
            </div>
          }
          {
            completed &&
            <div className="checkmark">
              <h3 onClick={archivePage}><i className="fas fa-check"></i></h3>
            </div>
          }
        </div>

      
      <div className="receivedContentContainer">
        {
          received &&
          <div className="list">
            {
              receivedPayments &&
              receivedPayments.map(p => (
                <Transaction
                key={p.id}
                img={p.friendProfilePic}
                date={moment(p.createdAt).format('MMMM D, YYYY')}
                name={p.friendName}
                description={p.description}
                amount={numeral(p.amount).format('$0,0.00')}
                username={p.friendUsername}
                status={false}
                approved={p.approved}
                />
              ))
              }
            {
              receivedPayments.length === 0 && 
              <div className="noNotif">
                <h1>no notifications</h1>
              </div>
            }
          </div>
        }
      </div>


      <div className="inactiveContentContainer">
        {
          completed && 
          <div className="list">
            {
              completedPayments &&
              completedPayments.map(r => (
                <Transaction
                key={r.id}
                img={r.friendProfilePic}
                date={moment(r.createdAt).format('MMMM D, YYYY')}
                name={r.friendName}
                description={r.description}
                amount={numeral(r.amount).format('$0,0.00')}
                username={r.friendUsername}
                status={r.status}
                approved={r.approved}
                />
              ))
            }
            {
              completedPayments.length === 0 && 
              <div className="noNotif">
                <h1>no notifications</h1>
              </div>
            }
          </div>
        }
      </div>

        <div className="activeContentContainer">

        {  
            outgoing &&
            <div className="list">
            {
              outgoingPayments && 
              outgoingPayments.map(r => (
                <Transaction
                key={r.id}
                img={r.friendProfilePic}
                date={moment(r.createdAt).format('MMMM D, YYYY')}
                name={r.friendName}
                description={r.description}
                amount={numeral(r.amount).format('$0,0.00')}
                username={r.friendUsername}
                status={r.status}
                />
              ))
            }
            {
              outgoingPayments.length === 0 && 
              <div className="noNotif">
                <h1>no notifications</h1>
              </div>
            }
            </div>
          }
        </div>

    </section>
  )
}