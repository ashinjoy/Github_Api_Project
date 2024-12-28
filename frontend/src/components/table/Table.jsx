
import './Table.css'
function Table() {
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
        <tr>
          <td>
            <img src="https://via.placeholder.com/50" alt="User 1" className="user-img"/>
          </td>
          <td>
            <h4>John Doe</h4>
            <p>Software Engineer at TechCorp. Passionate about coding and design.</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://via.placeholder.com/50" alt="User 2" className="user-img"/>
          </td>
          <td>
            <h4>Jane Smith</h4>
            <p>UX Designer with a knack for crafting delightful user experiences.</p>
          </td>
        </tr>
        <tr>
          <td>
            <img src="https://via.placeholder.com/50" alt="User 3" className="user-img"/>
          </td>
          <td>
            <h4>Michael Lee</h4>
            <p>Full-stack Developer specializing in JavaScript frameworks.</p>
          </td>
        </tr>
      </tbody>
    </table>
</>
  )
}

export default Table
