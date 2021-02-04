import {useState, useEffect} from 'react'


export default function PayRequestForm() {
  const [searchInput, setSearchInput] = useState('')
  const [friend, setFriend] = useState(false)
  const [amount, setAmount] = useState(null)
  const [type, setType] = useState('')
  
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
            <input type="text" placeholder="Enter name or @username" required onChange={e => setSearchInput(e.target.value)} value={searchInput} onBlur={showForm} className="searchBar"/>

            {/* conditionally render the rest after the user searches for a friend */}

            {

              friend &&
              <>
                <div className="friendProfilePicture">

                </div>


                <input type="number" min="1" className="amount" placeholder="$0" value={amount} onChange={e => setAmount(e.target.value)} id="amount"/>

                <input type="text" placeholder="Description"/>

                <div className="type">
                  <ul>
                    <li>
                      <input type="radio" name="type" value="payment" id="payment" onClick={() => setType('payment')}/>
                      <label htmlFor="payment">Payment</label>
                    </li>
    
                    <li>
                      <input type="radio" name="type" value="request" id="request" onClick={() => setType('request')}/>
                      <label htmlFor="request">Request</label>
                    </li>
                  </ul>
                </div>



                <button type="submit">Pay</button>
              </>

            }
          </form>
        </div>
    </section>
  )
}