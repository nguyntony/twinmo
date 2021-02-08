import axios from 'axios'
import {useEffect, useState} from 'react'
import Transaction from './Transaction'
import moment from 'moment'
import numeral from 'numeral'
import {Link} from 'react-router-dom'

export default function Request() {

  const [requests, setRequests] = useState([])
  const [requestProcessed, setRequestProcessed] = useState(false)

  const getRequests = async () => {
    const resp = await axios.get('/api/member/request/list')
    console.log(resp.data)
    setRequests(resp.data.filter(d => !d.status))
  }

  useEffect(()=> {
    getRequests()
    console.log(requests)
  }, [requestProcessed])

  return (
    <section id="memberView">
      <div className="title">
        <h1>requests from friends</h1>
        <h4><Link to="/member/payment" className="pending-link">payments <i className="fas fa-caret-right"></i></Link></h4>
      </div>
    
      <div className="requestContentContainer">
        {
          requests &&
          requests.map(r=> (
            <Transaction 
            key={r.id}
            img={r.friendProfilePic}
            date={moment(r.createdAt).format('MMMM D, YYYY')}
            name={r.friendName}
            description={r.description}
            amount={numeral(r.amount).format('$0,0.00')}
            username={r.friendUsername}
            transactionID={r.id}
            friendID={r.senderID}
            requestProcessed={requestProcessed}
            setRequestProcessed={setRequestProcessed}
            />
          ))
        }
      </div>

    </section>

  )
}