import {useState, useEffect, useContext} from 'react'
import friendProfilePicture from '../../assets/demo_assets/peridot.png'
import NumberFormat from 'react-number-format'
import { FundsContext } from "./FundsContext";
import axios from 'axios'


export default function PayRequestForm() {
  const [searchInput, setSearchInput] = useState('')
  const [payChecked, setPayChecked] = useState(false)
  const [requestChecked, setRequestChecked] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const [amount, setAmount] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [button, setButton] = useState('')
  const [message, setMessage] = useState('')
  
  const [errorMsg, setErrorMsg] = useState(false)
  const [dropdownList, setDropdownList] = useState([])
  const [allFriends, setAllFriends] = useState([])
  const [selectedFriend, setSelectedFriend] = useState(false)
  const [friend, setFriend] = useState('')

  const {updateFundsContext} = useContext(FundsContext)
  const [updateFunds, setUpdateFunds] = updateFundsContext
  
  
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
    setAmount('')
    setDescription('')
    setType('')
    setButton('')
    setPayChecked(false)
    setRequestChecked(false)
    setFriend({name, id, pic, username})
  }

  const removeSubmittedStatus = () => {
    setErrorMsg(false)
    setSubmitted(false)
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (type) {
      const resp = await axios.post('/api/member/transaction/new', {
        amount,
        description,
        type,
        recipientID: friend.id,
      })

      if (resp.data.status) {
        setSubmitted(true)
        setSelectedFriend(false)
        setUpdateFunds(!updateFunds)
        
        if (button === 'Pay') {setMessage('Payment')}
        if (button === 'Request') {setMessage('Request')}

        //inside here
      } else if (!resp.data.status) {
        setErrorMsg(true)
        console.log(resp.data.message, resp.data.missingAMT)
        // MAYBE MAKE THIS A MODAL THAT POPS OUT? HAVE THE USER EXIT OUT OR CLICK ON MODAL OR OUTSIDE TO GET OUT.
        // if there is an error then you need to set the value to true to see msg
      }
    }
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
  }, []) 

  return (
    <section id="payRequestForm">
        <div className="form">
          <form onSubmit={submitHandler}>

            <div id="autocomplete-container">

              <input type="text" placeholder="Enter name or @username" onChange={e => setSearchInput(e.target.value)} value={searchInput}  className="searchBar" name="username" autoComplete="off" onFocus={removeSubmittedStatus} />

              <div id="autocomplete-list">{dropdownList.map((f, idx) => <p key={idx} onClick={() => showForm(f.name, f.id, f.profilePic, f.username)} id='each-item'>{f.name} <span className="username">@{f.username}</span></p>)}</div>

            </div>

            {!selectedFriend && submitted &&
              <section className="confirmationSection">
                <div className="profilePicture">
                  <img src={friend.pic} alt=""/>
                </div>
                <div className="message">
                  <i className="far fa-check-circle"></i>
                  <p>{message} sent!</p>
                </div>
              </section>
            }

            {!selectedFriend && !submitted &&
              <section className="confirmationSection">
                <h4><i className="fas fa-search search"></i></h4>
              </section>

            }

            {
              selectedFriend &&
              <>
                <h3>{friend.name}</h3>
                <div className="friendProfilePicture">
                  <img src={friend.pic} alt="friend icon"/>
                </div>


                <NumberFormat className="amount" placeholder="$0" required id="amount" value={amount} prefix={"$"} onChange={e => setAmount(e.target.value)} min="1" name="amount" thousandSeparator={true} decimalScale={2} allowNegative={false} allowLeadingZeros={false} autoComplete="off" fixedDecimalScale={true} onFocus={()=> setErrorMsg(false)}/>

                <div className="descriptionField">
                {errorMsg && <span className="errorMsg">Insufficient funds</span>}
                  <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="description" name="description" autoComplete="off" maxLength="20" onBlur={undefined}/>
                  <span className="descriptionLength">{description.length}/20</span>
                </div>

                <div className="type">
                  <ul>
                    <li>
                      <input checked={payChecked} type="radio" name="type" value={type} id="payment" 
                      onChange={() => {
                        if (requestChecked) {
                          setRequestChecked(false)
                        }
                        setPayChecked(true)
                        setType('payment')
                        setButton('Pay')
                        }} required/>
                      <label htmlFor="payment">Payment</label>
                    </li>
    
                    <li>
                      <input checked={requestChecked} type="radio" name="type" value={type} onClick={()=> setErrorMsg(false)} id="request" 
                      onChange={() => {
                        if (payChecked) {
                          setPayChecked(false)
                        }
                        setRequestChecked(true)
                        setType('request')
                        setButton('Request')
                      }}/>
                      <label htmlFor="request">Request</label>
                    </li>
                  </ul>
                </div>

                {type && <button type="submit">{button}</button>}
              </>
            }
          </form>
        </div>
    </section>
  )
}