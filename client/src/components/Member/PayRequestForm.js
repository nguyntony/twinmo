import {useState, useEffect} from 'react'
import friendProfilePicture from '../../assets/demo_assets/peridot.png'
import NumberFormat from 'react-number-format'


export default function PayRequestForm() {
  const [searchInput, setSearchInput] = useState('')
  const [friend, setFriend] = useState(false)
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [button, setButton] = useState('Pay/Request')
  
  // evnt handler 
  const showForm = () => {
    setFriend(true)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useEffect(()=> {
    setSearchInput('')
    setFriend(false)
  }, []) 

  return (
    <section id="payRequestForm">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter name or @username" required onChange={e => setSearchInput(e.target.value)} value={searchInput} onBlur={showForm} className="searchBar" name="username" autoComplete="off"/>

            {/* conditionally render the rest after the user searches for a friend */}

            {

              friend &&
              <>
                <div className="friendProfilePicture">
                  <img src={friendProfilePicture} alt="friend icon"/>
                </div>


                {/* <input type="number" min="1" className="amount" placeholder="$0" value={amount} onChange={e => setAmount(e.target.value)} id="amount" name="amount" required/> */}

                {/* testing */}
                <NumberFormat className="amount" placeholder="$0" required id="amount" value={amount} prefix={"$"} onChange={e => setAmount(e.target.value)} min="1" name="amount" thousandSeparator={true} decimalScale={2} allowNegative={false} allowLeadingZeros={false} autoComplete="off"/>

                <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="description" name="description" autoComplete="off"/>

                <div className="type">
                  <ul>
                    <li>
                      <input type="radio" name="type" value={type} id="payment" 
                      onClick={() => {
                        setType('payment')
                        setButton('Pay')
                        }} required/>
                      <label htmlFor="payment">Payment</label>
                    </li>
    
                    <li>
                      <input type="radio" name="type" value={type} id="request" 
                      onClick={() => {
                        setType('request')
                        setButton('Request')
                      }}/>
                      <label htmlFor="request">Request</label>
                    </li>
                  </ul>
                </div>



                {type && <button type="submit">{button} money</button>}
              </>

            }
          </form>
        </div>
    </section>
  )
}