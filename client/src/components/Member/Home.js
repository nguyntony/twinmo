import {useState, useEffect} from 'react'
import axios from 'axios'
import requestProfilePicture from '../../assets/demo_assets/peridot.png'
import pendingProfilePicture from '../../assets/demo_assets/connie.png'
import numeral from 'numeral'

export default function Home() {
  const [requestAmt, setRequestAmt] = useState('')
  const [MRRequest, setMRRequest] = useState('')
  const [pendingAmt, setPendingAmt] = useState('')
  const [MRPending, setMRPending] = useState('')

  const getPending = async () => {
    const resp = await axios.get('/api/member/pending/list')
    const data = resp.data
    console.log(data[0])
    setPendingAmt(data.length)
    setMRPending(data[0])
  }

  useEffect(()=> {
    getPending()
  }, [])

  return (
    <section id="dashboardContentContainer">
      <div className="request-container">
        <div className="half-circle-bg"></div>
        <div className="icon">
          {/* img will go here */}
          <img src={requestProfilePicture} alt="profile pic of requester"/>
        </div>
        <div className="mostRecent">
          <h3>$10<span className="divider"></span>🌮 Dinner</h3>
        </div>

        <div className="title">
          <h1><a href="#">requests</a></h1>
          <div className="badge">
            <p>
              5
              {/* will grab data */}
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