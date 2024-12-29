
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import RepositoryDetails from '../pages/repositoryDetail/RepositoryDetails'
import FollowersList from '../pages/followersList/FollowersList'
import FollowersRepoList from '../pages/followersRepo/FollowersRepoList'
import UserProfile from '../pages/userProfile/UserProfile'

function Router() {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/repo-detail/:repo_name' element={<RepositoryDetails/>}/>
    <Route path='/followers/:uname' element={<FollowersList/>}/>
    <Route path='/followers/repo/:uname'element={<FollowersRepoList/>}/>
    <Route path='/userprofile'element={<UserProfile/>}/>

  </Routes>
  )
}

export default Router
