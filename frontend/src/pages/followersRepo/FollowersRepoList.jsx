
import { Link, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFollowersRepoData } from '../../features/user/userActions'
import './FollowersList.css'
function FollowersRepoList() {
    const {uname} = useParams() 
    console.log(uname);
    
    const {followersRepoList} = useSelector((state)=>state.user)
    const [repoDetails,setRepoDetails] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchFollowersRepoData(uname))
    },[])
    useEffect(()=>{
        setRepoDetails(followersRepoList)
        console.log(followersRepoList);
        
    },[followersRepoList])
  return (
<>
<div className='main'>
<div className="repolist">
        {repoDetails &&
          repoDetails.length > 0 &&
          repoDetails.map((repoData, index) => {
            return (
              <>
                <div className="item" key={index}>
                  <img
                    src={repoData?.owner?.avatar_url}
                    alt=""
                  />
                  <div className="itemdesc">
                    <Link to={`/repo-detail/${repoData?.name}`}>{repoData?.name}</Link>
                    <p className="desc">{repoData?.description}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
</div>
</>
  )
}

export default FollowersRepoList
