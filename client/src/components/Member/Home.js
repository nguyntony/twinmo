import {useState, useEffect} from 'react'
import axios from 'axios'
import numeral from 'numeral'

export default function Home() {
  const [requestAmt, setRequestAmt] = useState('')
  const [MRRequest, setMRRequest] = useState('')
  const [pendingAmt, setPendingAmt] = useState('')
  const [MRPending, setMRPending] = useState('')

  const getRecentData = async () => {
    const resp = await axios.get('/api/member/pending/list')
    const data = resp.data
    console.log(data[0])
    setPendingAmt(data.length)
    setMRPending(data[0])

    const resp2 = await axios.get('/api/member/request/list')
    const data2 = resp2.data
    console.log(data2[0])
    setRequestAmt(data2.length)
    setMRRequest(data2[0])
  }

  useEffect(()=> {
    getRecentData()
  }, [])

  return (
    <section id="dashboardContentContainer">
      <div className="request-container">
        <div className="half-circle-bg"></div>
        <div className="icon">
          <img src={MRRequest.friendProfilePic} alt={MRRequest.friendName}/>
        </div>
        <div className="mostRecent">
          <h3>{numeral(MRRequest.amount).format('$0,0.00')}<span className="divider"></span>🌮 {MRRequest.description}</h3>
        </div>

        <div className="title">
          <h1><a href="/member/request">requests</a></h1>
          <div className="badge">
            <p>
              {requestAmt}
            </p>
          </div>
        </div>
      </div>


      <div className="pending-container">
        <div className="half-circle-bg"></div>
        <div className="icon">
          <img src={MRPending.friendProfilePic} alt={MRPending.friendName}/>
        </div>
        <div className="mostRecent">
          <h3>{numeral(MRPending.amount).format('$0,0.00')}<span className="divider"></span>{MRPending.description} 💸</h3>
        </div>
        <div className="title">
          <h1><a href="#">pending</a></h1>
          <div className="badge">
            <p>
              {pendingAmt}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}