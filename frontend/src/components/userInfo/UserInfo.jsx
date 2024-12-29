import './Userinfo.css'

function UserInfo({userData}) {
  return <>
  <div className="userInfo">
    <img src={userData?.avatar_url} alt="" />
    <h3>{userData?.login}</h3>
    <button className='editbtn'>EditProfile</button>
    <div className='followlist'>
        <h4>followers</h4>
        <h4>following</h4>
    </div>
  </div>
  </>;
}

export default UserInfo;
