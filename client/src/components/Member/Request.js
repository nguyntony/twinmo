import axios from 'axios'
import {useEffect, useState} from 'react'

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
      <h1>request</h1>
      {
        requests && 
        requests.map((r,idx) => (
          <p key={idx}>{r.friendUsername} - {r.amount}</p>
        ))
      }

    </section>

  )
}