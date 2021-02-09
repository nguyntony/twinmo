import Archive from './Archive'
import {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import numeral from 'numeral'

export default function History() {

  const [archived, setArchived] = useState([])
  const [month, setMonth] = useState(moment(new Date()).format('MMMM'))
  const [year, setYear] = useState(moment(new Date()).format("YYYY"))

  const getArchives = async () => {
    const resp = await axios.post('/api/member/transaction/archive/list', {
      month, 
      year
    })
    const data = resp.data
    console.log(data)
    setArchived(data)
  }

  useEffect(()=> {
    getArchives()
  }, [])

  return (
    <section id="historyContainer">
      <h1>history</h1>
      <div className="filterSearch">
        <form>
          {/* going to add a filter here, so we can look at past months I don't want to do this tho, bc working with a dropdwon menu */}
          <h3>February 2021</h3>
        </form>
      </div>

      <div className="list">
        {/* I will map here, I will need to grab data for archived true items */}
        {
          archived &&
          archived.map(a => (
            <Archive
            key={a.id}
            img={a.friendProfilePic}
            date={moment(a.createdAt).format('MMMM D, YYYY')}
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

      </div>

    </section>
  )
}