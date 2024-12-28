
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import RepositoryDetails from '../pages/repositoryDetail/RepositoryDetails'

function Router() {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/repo-detail' element={<RepositoryDetails/>}/>
  </Routes>
  )
}

export default Router
