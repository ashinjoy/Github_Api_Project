
import { Link } from 'react-router-dom';
import './Table.css'
function Table({followersList}) {
  console.log('in table',followersList);
  
  return (
<>
<table className="user-table">
      <thead>
        <tr>
          <th>Profile</th>
          <th>User Information</th>
        </tr>
      </thead>
      <tbody>
{ followersList && followersList.length > 0 && followersList.map((followers)=>{
  return (<>
  <tr>
          <td>
            <img src={followers?.avatar_url} alt="User 1" className="user-img"/>
          </td>
          <td>
            {/* <h4>{followers?.login}</h4> */}
            <Link to={`/followers/repo/${followers?.login}`}>{followers?.login}</Link>
            <p>Software Engineer at TechCorp. Passionate about coding and design.</p>
          </td>
        </tr>
  </>)
})       }
        
      </tbody>
    </table>
</>
  )
}

export default Table
