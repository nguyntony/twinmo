import friendProfilePicture from '../../assets/demo_assets/connie.png'
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function FriendCard({profilePic, first, last, username, friendship, id}) {
  const [addFriend, setAddFriend] = useState(false)
  const [friendID, setFriendID] = useState('')

  const friendRequest = async () => {
    if (!friendship) {
      // console.log('Adding friend')
      const resp = await axios.post('/api/member/friend/add', {friendID})
      setAddFriend(true)
    } else {
      console.log('Already friends!');
    }
  }


  return (
    <>
    <div className="friendsCard">
      <div className="friendProfilePicture">
        <img src={profilePic} alt="friend icon"/>
        {/* will grab from db */}
      </div>
      <div className="friendInfo">
        <h4>{first} {last}</h4>
        {/* will grab from db */}
        <p className="friendUsername">@{username}</p>
        {/* will grab from db */}
      </div>
      
      {addFriend
      ? <div className="friendship"><h4><i className="fas fa-user-check"></i></h4></div>
      : <div className={friendship ? 'friendship' : 'notFriend'} 
        onMouseEnter={()=>setFriendID(id)} onClick={friendRequest}>
        {friendship 
        ? <h4><i className="fas fa-user-check"></i></h4>
        : <h4><i className="fas fa-user-plus"></i></h4>}
        </div>
      }

      

    </div>
      {/* will need to conditionally render two differnt kinds of friendship */}
    </>
  )
}
