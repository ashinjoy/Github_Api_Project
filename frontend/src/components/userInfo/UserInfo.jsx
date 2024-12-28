import './Userinfo.css'

function UserInfo() {
  return <>
  <div className="userInfo">
    <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
    <h3>ashinjoy</h3>
    <button className='editbtn'>EditProfile</button>
    <div className='followlist'>
        <h4>followers</h4>
        <h4>following</h4>
    </div>
  </div>
  </>;
}

export default UserInfo;
