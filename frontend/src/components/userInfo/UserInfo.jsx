import { Link } from 'react-router-dom';
import './Userinfo.css'

function UserInfo({userData}) {
  return <>
  <div className="userInfo">
    <img src={userData?.avatar_url} alt="" />
    <h3>{userData?.login}</h3>
    <button className='editbtn'>EditProfile</button>
    <div className='followlist'>
        <Link to={`/followers/${userData?.login}`}>followers</Link>
        <h4>following</h4>
    </div>
  </div>
  </>;
}

export default UserInfo;
