import axios from 'axios';
import {useEffect, useState} from 'react';
import Transaction from './Transaction'
import numeral from 'numeral'
import moment from 'moment'

export default function Pending() {
  const [activeRequests, setActiveRequests] = useState([])
  const [inactiveRequests, setInactiveRequests] = useState([])
  const [outgoing, setOutgoing] = useState(false)
  const [completed, setCompleted] = useState(true)

  const getRequests = async () => {
    const resp = await axios.get('/api/member/pending/list')
    console.log(resp.data)
    const data = resp.data
    setActiveRequests(data.filter(d => d.status !== true))
    setInactiveRequests(data.filter(d => d.status === true))
  }

  const completedList = () => {
    if (!completed) {
      setCompleted(true)
      setOutgoing(false)
    }
  }

  const outgoingList = () => {
    if (!outgoing) {
      setOutgoing(true)
      setCompleted(false)
    }
  }
  
  const selectedList = {
    backgroundColor: '#ffd8be',
    cursor: 'unset'
  }

  useEffect(()=>{
    getRequests()
  }, [])

  return (
    <section id="memberView">
      <div className="title">
        <h1>payments</h1>
        <h4><a href="/member/request" className="request-link">requests <i className="fas fa-caret-right"></i></a></h4>
      </div>

        <div className="pendingNav">
          <div className="titleBar">
            <h3 
            onClick={completedList}
            style={completed ? selectedList : null}
            >completed
{/*             
            {
              completed ? <i className="fas fa-caret-up"></i> :
              <i className="fas fa-caret-down"></i>
  
            } */}
          </h3>
          
          </div>
  
          <div className="titleBar">
              <h3 
              onClick={outgoingList}
              style={outgoing ? selectedList : null}
              >outgoing
              
              {/* {
                outgoing ? <i className="fas fa-caret-up"></i> : 
                <i className="fas fa-caret-down"></i>
              }
               */}
              </h3></div>
        </div>


      <div className="inactiveContentContainer">
        {
          completed && 
          <div className="list">
            {
              inactiveRequests &&
              inactiveRequests.map(r => (
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
          </div>
        }
      </div>

        <div className="activeContentContainer">
          {/* <div className="titleBar">
            <h3 
            onClick={outgoingList}
            style={outgoing ? selectedList : null}
            >outgoing requests 
            
            {
              outgoing ? <i className="fas fa-caret-up"></i> : 
              <i className="fas fa-caret-down"></i>
            }
            
            </h3></div> */}

        {  
            outgoing &&
            <div className="list">
            {
              activeRequests && 
              activeRequests.map(r => (
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
            </div>
          }
        </div>

    </section>
  )
}