import friendProfilePicture from '../../assets/demo_assets/connie.png'

export default function FriendCard() {
  return (
    <>
    {/* will delete the frag */}
    <div className="friendsCard">
      <div className="friendProfilePicture">
        <img src={friendProfilePicture} alt="friend icon"/>
        {/* will grab from db */}
      </div>
      <div className="friendInfo">
        <h4>Connie</h4>
        {/* will grab from db */}
        <p className="friendUsername">@fighterconnie</p>
        {/* will grab from db */}
      </div>
      
      <div className="friendship">
        <h4><i className="fas fa-user-check"></i></h4>
      </div>

      {/* will need to conditionally render two differnt kinds of friendship */}
    </div>

    <div className="friendsCard">
      <div className="friendProfilePicture">
        <img src={friendProfilePicture} alt="friend icon"/>
        {/* will grab from db */}
      </div>
      <div className="friendInfo">
        <h4>Connie</h4>
        {/* will grab from db */}
        <p className="friendUsername">@fighterconnie</p>
        {/* will grab from db */}
      </div>

      <div className="friendship notFriend">
        <h4><i className="fas fa-user-plus"></i></h4>
      </div>
    </div>

    <div className="friendsCard">
      <div className="friendProfilePicture">
        <img src={friendProfilePicture} alt="friend icon"/>
        {/* will grab from db */}
      </div>
      <div className="friendInfo">
        <h4>Connie</h4>
        {/* will grab from db */}
        <p className="friendUsername">@fighterconnie</p>
        {/* will grab from db */}
      </div>
    </div>

    <div className="friendsCard">
      <div className="friendProfilePicture">
        <img src={friendProfilePicture} alt="friend icon"/>
        {/* will grab from db */}
      </div>
      <div className="friendInfo">
        <h4>Connie</h4>
        {/* will grab from db */}
        <p className="friendUsername">@fighterconnie</p>
        {/* will grab from db */}
      </div>
    </div>
    </>
  )
}