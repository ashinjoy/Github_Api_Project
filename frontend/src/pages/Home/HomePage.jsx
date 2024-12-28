import './Home.css'
import SearchInput from "../../components/searchInput/SearchInput";
import RepositoryList from '../../components/repository/repositoryList/RepositoryList';
import UserInfo from '../../components/userInfo/UserInfo';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { fetchUserGithubDetails } from '../../features/user/userActions';
function HomePage() {
    const [userInp,setUserInp] = useState('')
    const dispatch = useDispatch()
    const handleFormSubmission = (e)=>{
        e.preventDefault()
        if(userInp?.trim() == ""){
            toast.error("Provide Valid Username")
            return
        }
        dispatch(fetchUserGithubDetails(userInp))

    }
  return <>
    <div className="maindiv">
        <div className="search">
            <form className="searchform">
                <SearchInput userInp={userInp} setUserInp={setUserInp}/>
                <button onClick={handleFormSubmission}>Search</button>
            </form>
        </div>
        {/* <div className='section'>
            <UserInfo/>
            <RepositoryList/>
        </div> */}
    </div>
  </>;
}

export default HomePage;