import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import numeral from 'numeral'

export default function Home() {
  const [requestAmt, setRequestAmt] = useState('')
  const [MRRequest, setMRRequest] = useState('')
  const [paymentAmount, setPaymentAmount] = useState('')
  const [MRPending, setMRPending] = useState('')

  const getRecentData = async () => {
    const resp = await axios.get('/api/member/payment/list')
    const data = resp.data.filter(d => d.status && !d.archived)
    console.log(data)
    setPaymentAmount(data.length)
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
              {MRRequest ? 
              <img src={MRRequest.friendProfilePic} alt={MRRequest.friendName}/>
              : <img src='/uploads/nodata1.jpg' alt='default'></img>
              }
            </div>

            <div className="mostRecent">
              {/* <h3>{numeral(MRRequest.amount).format('$0,0.00')}<span className="divider"></span>{MRRequest.description}</h3> */}
              {MRRequest ?
                <>
                <h3>{numeral(MRRequest.amount).format('$0,0.00')}</h3>
                <h3>{MRRequest.description}</h3>
                </>
                : <h3>😴 <span className="italic">no active requests</span></h3>
              }
            </div>

            <div className="title">
              <h1><Link to="/member/request">requests</Link></h1>
              {requestAmt !== 0 &&
                <div className="badge">
                  <p>
                    {requestAmt}
                  </p>
                </div>
              }
            </div>

      </div>


      <div className="pending-container">

        
          <div className="half-circle-bg"></div>
          <div className="icon">
            {MRPending ? 
            <img src={MRPending.friendProfilePic} alt={MRPending.friendName}/>
            : <img src="/uploads/nodata2.jpg" alt="default"/>
            }
          </div>
          <div className="mostRecent">
            {/* <h3>{numeral(MRPending.amount).format('$0,0.00')}<span className="divider"></span>{MRPending.description}</h3> */}
            {MRPending ? 
              <>
              <h3>{numeral(MRPending.amount).format('$0,0.00')}</h3>
              <h3>{MRPending.description}</h3>
              </>
              : <h3>🥶 <span className="italic">no active payments</span></h3>
            }
          </div>
          <div className="title">
            <h1><Link to="/member/payment">payments</Link></h1>
            {paymentAmount !== 0 &&
              <div className="badge">
                <p>
                  {paymentAmount}
                </p>
              </div>
            }
          </div>
        
        

      </div>
    </section>
  )
}