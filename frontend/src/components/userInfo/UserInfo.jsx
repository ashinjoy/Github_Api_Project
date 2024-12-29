import { Link } from 'react-router-dom';
import './Userinfo.css'
import { FiUsers } from "react-icons/fi";
function UserInfo({userData}) {
  return <>
  <div className="userInfo">
    <img src={userData?.avatar_url} alt="" />
    <h3>{userData?.login}</h3>
    <button className='editbtn'>EditProfile</button>
    <div className='followlist'>
      <div className='followers'>
        <FiUsers style={{color:'black'}}/>
        <Link to={`/followers/${userData?.login}`} style={{textDecoration:'none', color:'black'}}>{userData && userData?.followers} followers</Link>
      </div>
        <div className='followers'>
          <p>{userData && userData?.following}</p>
        <p>following</p>
        </div>
       
    </div>
  </div>
  </>;
}

export default UserInfo;
