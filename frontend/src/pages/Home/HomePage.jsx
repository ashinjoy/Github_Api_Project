
import './Home.css'
import SearchInput from "../../components/searchInput/SearchInput";
import RepositoryList from '../../components/repository/repositoryList/RepositoryList';
import UserInfo from '../../components/userInfo/UserInfo';
function HomePage() {
  return <>
    <div className="maindiv">
        <div className="search">
            <form className="searchform">
                <SearchInput/>
                <button>Search</button>
            </form>
        </div>
        <div className='section'>
            <UserInfo/>
            <RepositoryList/>
        </div>

    </div>
  </>;
}

export default HomePage;