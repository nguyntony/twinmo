import friendProfilePicture from '../../assets/demo_assets/connie.png'

export default function FriendCard({profilePic, first, last, username, friendship}) {
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
      
      <div className={friendship ? 'friendship' : 'notFriend'}>
        {friendship ? <h4><i className="fas fa-user-check"></i></h4> : <h4><i className="fas fa-user-plus"></i></h4>}
        
      </div>

    </div>
      {/* will need to conditionally render two differnt kinds of friendship */}
    </>
  )
}
