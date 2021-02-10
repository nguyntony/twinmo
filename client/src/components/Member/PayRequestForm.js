import {useState, useEffect, useContext} from 'react'
import NumberFormat from 'react-number-format'
import { FundsContext } from "./FundsContext";
import axios from 'axios'
import {useSpring, animated} from 'react-spring'

export default function PayRequestForm() {

  // FORM HOOKS
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

  // HOOK TO 
  const {updateFundsContext} = useContext(FundsContext)
  const [updateFunds, setUpdateFunds] = updateFundsContext

  // ANIMATIONS

  const [toggle, setToggle] = useState(false)
  const [errorToggle, setErrorToggle] = useState(false)
  const [sent, setSent] = useState(false)


  const fallIn = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "translateY(0%)" : "translateY(-10%)"
  })
  const slideUp = useSpring({
    opacity: errorToggle ? 1 : 0,
    transform: errorToggle ? "translateY(0%)" : "translateY(-10%)",
  })
  const grow = useSpring({
    transform: sent ? "scale(1)" : "scale(0.1)"
  })

  
  // DB AXIOS CALL
  const getAllFriends = async () => {
    const resp = await axios.get('/api/member/friend/find-all')
    const formatedFriends = resp.data.map(d => {
      return {id: d.id, name: d.first+' '+d.last, profilePic: d.profilePic, username: d.username}
    })
    setAllFriends(formatedFriends)
  }

  // EVENT HANDLER FNS
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
    setToggle(true)
    setErrorToggle(false)
    setSent(false)
  }

  
  const removeSubmittedStatus = () => {
    setErrorMsg(false)
    setSubmitted(false)
    setToggle(false)
  }

  const messageReset = () => {
    setErrorToggle(false)
    setErrorMsg(false)
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
        setSent(true)
        
        if (button === 'Pay') {setMessage('Payment')}
        if (button === 'Request') {setMessage('Request')}

        //inside here
      } else if (!resp.data.status) {
        setErrorMsg(true)
        setErrorToggle(true)
        // console.log(resp.data.message, resp.data.missingAMT)
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
      // console.log(filteredFriends)
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
              <animated.section className="confirmationSection" style={grow}>
                <div className="profilePicture">
                  <img src={friend.pic} alt=""/>
                </div>
                <div className="message">
                  <i className="far fa-check-circle"></i>
                  <p>{message} sent!</p>
                </div>
              </animated.section>
            }

            {!selectedFriend && !submitted &&
              <section className="confirmationSection">
                <h4><i className="fas fa-search search"></i></h4>
              </section>

            }

            {
              selectedFriend &&
              <>
                <animated.div className="selectedFriend" style={fallIn}>
                <h3>{friend.name}</h3>
                <div className="friendProfilePicture">
                  <img src={friend.pic} alt="friend icon"/>
                </div>


                <NumberFormat className="amount" placeholder="$0" required id="amount" value={amount} prefix={"$"} onChange={e => setAmount(e.target.value)} min="1" name="amount" thousandSeparator={true} decimalScale={2} allowNegative={false} allowLeadingZeros={false} autoComplete="off" fixedDecimalScale={true} onFocus={messageReset}/>

                <div className="descriptionField">
                {errorMsg && <animated.span className="errorMsg" style={slideUp}>Insufficient funds</animated.span>}
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
                </animated.div>
              </>
            }
          </form>
        </div>
    </section>
  )
}