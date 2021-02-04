import axios from 'axios'
import {useEffect, useState} from 'react'
import Transaction from './Transaction'
import moment from 'moment'
import numeral from 'numeral'

export default function Request() {

  const [requests, setRequests] = useState([])

  const getRequests = async () => {
    const resp = await axios.get('/api/member/request/list')
    console.log(resp.data)
    setRequests(resp.data)
  }

  useEffect(()=> {
    getRequests()
    console.log(requests)
  }, [])

  return (
    <section id="requestContainer">
      <div className="title">
        <h1>request</h1>
      </div>
      {/* {
        requests && 
        requests.map((r,idx) => (
          <p key={idx}>{r.friendUsername} - {r.amount}</p>
        ))
      } */}

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
            />
          ))
        }
      </div>

    </section>

  )
}