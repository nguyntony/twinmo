import FriendCard from './FriendCard'
import {useEffect, useState} from 'react'

export default function Friends() {

  // state hooks
  const [searchInput, setSearchInput] = useState('')
  const [showFriends, setShowFriends] = useState(true)
  const [showResults, setShowResults] = useState(false)

  // evt handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(searchInput)
    setShowFriends(false)
    setShowResults(true)
  }

  useEffect(()=> {
    setShowFriends(true)
    setShowResults(false)
  }, [])

  return (
    <section id="friendsContainer">
      <div className="searchBar">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter name or @username" required autoComplete="off" onChange={e => setSearchInput(e.target.value)}/>
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>

      <div className="friendsList">
        {/* <h3>existing friends will show here already</h3> */}
        { showFriends && <FriendCard/> }
        {/* I will map cards here */}
        { showResults && <h4>these will be searched results</h4>}
        {/* the second condition here wil be a mapping */}
      </div>
    </section>
  )
}