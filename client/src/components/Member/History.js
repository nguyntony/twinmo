import Archive from './Archive'
import {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import numeral from 'numeral'
import Loader from './Loading'

export default function History() {

  const [archived, setArchived] = useState([])
  const [month, setMonth] = useState(moment(new Date()).format('MMMM'))
  const [year, setYear] = useState(moment(new Date()).format("YYYY"))
  const [monthCache, setMonthCache] = useState([])
  const [showDropDown, setShowDropDown] = useState(false)
  const [loading, setLoading] = useState(true)

  const getArchives = async () => {
    setArchived([])
    const resp = await axios.post('/api/member/transaction/archive/list', {
      month, 
      year
    })
    // console.log(resp.data)
    const data = resp.data
    setArchived(data)
    setLoading(false)
  }

  const monthSelection = async (date) => {
    if (date === (month+' '+year)){
      setShowDropDown(!showDropDown)
    } else {
      setMonth(date.split(' ')[0])
      setYear(date.split(' ')[1])
      setShowDropDown(!showDropDown)
      setLoading(true)
    }
  }

  const getMonths = async () => {
    const resp = await axios.get('/api/member/transaction/archive/date-list')
    // console.log('this is months', resp.data);
    const data = resp.data
    setMonthCache(data)
  }

  useEffect(()=> {
    getMonths()
  }, [])

  useEffect(()=> {
    getArchives()
  }, [month, year])

  return (
    <section id="historyContainer">
      <h1>history</h1>

      <div id="history-autocomplete-container">

        <h3 onClick={()=> monthCache.length > 0 && setShowDropDown(!showDropDown)}>{month} {year}</h3>

        {showDropDown && 
          <div id="history-autocomplete-list">
            {monthCache.map((f, idx) => 
              <p key={idx} onClick={() => monthSelection(f)} id='history-each-item'><span className='date'>{f}</span></p>)
            }
          </div>
        }

      </div>

    {  
    loading ? <Loader loading={loading}/> :
    <div className={archived.length === 0 ? 'list history-center' : 'list'}>
      {
        archived &&
        archived.map(a => (
          <Archive
          key={a.id}
          img={a.friendProfilePic}
          date={moment(a.createdAt).format('MM/DD')}
          name={a.friendName}
          description={a.description}
          amount={numeral(a.amount).format('$0,0.00')}
          username={a.friendUsername}
          transactionDetail={a.transactionDetail}
          archivedIcon={a.archivedIcon}
          month={a.month}
          year={a.year}
          />
        ))
      }

      {
      archived.length === 0 && 
      <section className='historyPlaceholder'>
        <h4><i class="far fa-folder-open"></i></h4>
        <p>No recent data</p>
      </section>
      }
    </div>
    }


    </section>
  )
}