import {useState, useEffect} from 'react'
import friendProfilePicture from '../../assets/demo_assets/peridot.png'
import NumberFormat from 'react-number-format'
import '../../styles/Member/autocomplete.scss'
import axios from 'axios'


export default function PayRequestForm() {
  const [searchInput, setSearchInput] = useState('')
  
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [button, setButton] = useState('Pay/Request')
  
  const [dropdownList, setDropdownList] = useState([])
  const [allFriends, setAllFriends] = useState([])
  const [selectedFriend, setSelectedFriend] = useState(false)
  const [friend, setFriend] = useState('')
  
  const getAllFriends = async () => {
    const resp = await axios.get('/api/member/friend/find-all')
    const formatedFriends = resp.data.map(d => {
      return {id: d.id, name: d.first+' '+d.last, profilePic: d.profilePic, username: d.username}
    })
    setAllFriends(formatedFriends)
  }

  // evnt handler 
  const showForm = (name, id, pic, username) => {
    setSelectedFriend(true)
    setDropdownList([])
    setSearchInput('')
    setFriend({name, id, pic, username})
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(amount, description, type, friend.id)
  }
  
  useEffect(()=>{
    if (searchInput.length === 0) {
      setDropdownList([])
    } else {
      const filteredFriends = allFriends.filter(i => 
        {
          if (
            i.name.toLowerCase().includes(searchInput.toLowerCase()) 
            || i.username.toLowerCase().includes(searchInput.toLowerCase())
            ){
              return i
            }
        })
      console.log(filteredFriends)
      setDropdownList(filteredFriends)
    }
  }, [searchInput])
  
  useEffect(()=> {
    setSearchInput('')
    setSelectedFriend(false)
    getAllFriends()
    setAmount('')
    setDescription('')
    setType('')
    setFriend('')
  }, []) 

  return (
    <section id="payRequestForm">
        <div className="form">
          <form onSubmit={submitHandler}>

            <div id="autocomplete-container">

              <input type="text" placeholder="Enter name or @username" onChange={e => setSearchInput(e.target.value)} value={searchInput}  className="searchBar" name="username" autoComplete="off"/>

              <div id="autocomplete-list">
                {dropdownList.map(f => <p onClick={() => showForm(f.name, f.id, f.profilePic, f.username)} id='each-item'>{f.name} | {f.username}</p>)}
              </div>
            </div>

            {/* conditionally render the rest after the user searches for a friend */}

            {

              selectedFriend &&
              <>
                <h3>{friend.name}</h3>
                {/* NEED CSS TO CENTER IN THE MIDDLE */}
                <div className="friendProfilePicture">
                  <img src={friend.pic} alt="friend icon"/>
                </div>


                <NumberFormat className="amount" placeholder="$0" required id="amount" value={amount} prefix={"$"} onChange={e => setAmount(e.target.value)} min="1" name="amount" thousandSeparator={true} decimalScale={2} allowNegative={false} allowLeadingZeros={false} autoComplete="off" fixedDecimalScale={true}/>

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