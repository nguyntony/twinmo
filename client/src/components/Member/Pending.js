import axios from 'axios';
import {useEffect, useState} from 'react';
import Transaction from './Transaction'
import numeral from 'numeral'
import moment from 'moment'

export default function Pending() {
  const [activeRequests, setActiveRequests] = useState([])
  const [inactiveRequests, setInactiveRequests] = useState([])
  const [showActive, setShowActive] = useState(false)
  const [showInactive, setShowInactive] = useState(true)

  const getRequests = async () => {
    const resp = await axios.get('/api/member/pending/list')
    console.log(resp.data)
    const data = resp.data
    setActiveRequests(data.filter(d => d.status !== true))
    setInactiveRequests(data.filter(d => d.status === true))
  }

  useEffect(()=>{
    getRequests()
  }, [])

  return (
    <section id="memberView">
      <div className="title">
        <h1>pending requests</h1>
        <h4><a href="/member/request" className="request-link">requests <i className="fas fa-caret-right"></i></a></h4>
      </div>


      <div className="inactiveContentContainer">
        <div className="titleBar">
          <h3 
          onClick={()=>setShowInactive(!showInactive)}
          >completed requests 
          
          {
            showInactive ? <i className="fas fa-caret-up"></i> :
            <i className="fas fa-caret-down"></i>

          }
          
          </h3></div>

        {
          showInactive && 
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
          <div className="titleBar">
            <h3 
            onClick={()=>setShowActive(!showActive)}
            >outgoing requests 
            
            {
              showActive ? <i className="fas fa-caret-up"></i> : 
              <i className="fas fa-caret-down"></i>
            }
            
            </h3></div>

        {  
            showActive &&
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
                />
              ))
            }
            </div>
          }
        </div>

    </section>
  )
}