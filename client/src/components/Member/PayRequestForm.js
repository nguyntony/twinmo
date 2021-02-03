import {useState, useEffect} from 'react'


export default function PayRequestForm() {
  const [searchInput, setSearchInput] = useState('')
  const [friend, setFriend] = useState(false)
  
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
            <input type="text" placeholder="Enter name or @username" required onChange={e => setSearchInput(e.target.value)} onBlur={showForm} className="searchBar"/>

            {/* conditionally render the rest after the user searches for a friend */}

            {

              friend &&
              <>
                <div className="friendProfilePicture">

                </div>

                <input type="number" min="1"/>

                <input type="text" placeholder="Description"/>

                <input type="radio" name="type" value="payment" id="payment"/>
                <label htmlFor="payment">Pay</label>

                <input type="radio" name="type" value="request" id="request"/>
                <label htmlFor="request">Request</label>



                <button type="submit">Pay</button>
              </>

            }
          </form>
        </div>
    </section>
  )
}