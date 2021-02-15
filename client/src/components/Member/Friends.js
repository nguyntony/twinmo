import FriendCard from './FriendCard'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Loader from './Loading'

export default function Friends() {

  // state hooks
  const [searchInput, setSearchInput] = useState('')
  const [showFriends, setShowFriends] = useState(true)
  const [showResults, setShowResults] = useState(false)
  const [allFriends, setAllFriends] = useState([])
  const [searchedUsers, setSearchedUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const getFriends = async () => {
    const resp = await axios.get('/api/member/friend/find-all')
    setAllFriends(resp.data)
    // console.log(resp.data)
    setLoading(false)
  }

  // evt handler
  const submitHandler = async (e) => {
    e.preventDefault();
    setSearchedUsers([])
    const resp = await axios.post('/api/member/get-users', {
      input: searchInput
    })
    setSearchedUsers(resp.data)
    setShowFriends(false)
    setShowResults(true)
  }

  useEffect(()=> {
    setShowFriends(true)
    setShowResults(false)
    getFriends()
  }, [])

  return (
    <section id="friendsContainer">
      <div className="searchBar">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter name or @username" required autoComplete="off" onChange={e => setSearchInput(e.target.value)} value={searchInput}/>
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>

      {
        loading ? <Loader loading={loading}/> :

        <div className="friendsList">
        { showFriends ? 
          allFriends.length > 0 
          ? allFriends.map((f, idx) => (<FriendCard first={f.first} last={f.last} profilePic={f.profilePic} username={f.username} key={idx} friendship={true} id={f.id}/>))
          : 
          <section className="friendPlaceholder">
            <h4><i className="fas fa-search search"></i></h4>
          </section>
        : ""
        }
        { showResults && 
        searchedUsers.map((u, idx) => (<FriendCard first={u.first} last={u.last} profilePic={u.profilePic} username={u.username} key={idx} friendship={u.friendship} id={u.id} />))}
      </div>
      }
    </section>
  )
}