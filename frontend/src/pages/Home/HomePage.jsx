
import './Home.css'
import SearchInput from "../../components/searchInput/SearchInput";
function HomePage() {
  return <>
    <div className="maindiv">
        <div className="search">
            <form className="searchform">
                <SearchInput/>
                <button>Search</button>
            </form>
        </div>

    </div>
  </>;
}

export default HomePage;