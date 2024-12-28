
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import RepositoryDetails from '../pages/repositoryDetail/RepositoryDetails'
import FollowersList from '../pages/followersList/FollowersList'

function Router() {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/repo-detail' element={<RepositoryDetails/>}/>
    <Route path='/followers-list' element={<FollowersList/>}/>

  </Routes>
  )
}

export default Router
