import { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import './FollowersList.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFollowersData } from '../../features/user/userActions'
function FollowersList() {
  const {uname} = useParams()
  const {followerDetails} = useSelector((state)=>state.user)
  const [followersList,setFollowers] = useState(null)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!followerDetails && uname){
      dispatch(fetchFollowersData(uname))
      return
    }
  },[])
  useEffect(()=>{
    if(followerDetails){
      setFollowers(followerDetails)
    } 
  },[followerDetails])
  
  return (
    <div className='followMain'>
        <div className="user-table-container">
          { followersList && <Table followersList={followersList}/>}
        </div>
       
    </div>
  )
}

export default FollowersList
