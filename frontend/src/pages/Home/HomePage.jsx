import "./Home.css";

import SearchInput from "../../components/searchInput/SearchInput";
import RepositoryList from "../../components/repository/repositoryList/RepositoryList";
import UserInfo from "../../components/userInfo/UserInfo";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserGithubDetails } from "../../features/user/userActions";
function HomePage() {
  const [userInp, setUserInp] = useState("");
  const dispatch = useDispatch();
  const { repoDetails, userData } = useSelector((state) => state.user);
  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (userInp?.trim() == "") {
      toast.error("Provide Valid Username");
      return;
    }
    dispatch(fetchUserGithubDetails(userInp));
  };
  return (
    <>
      <div className="maindiv">
        <div className="search">
          <form className="searchform" onSubmit={handleFormSubmission}>
            <SearchInput userInp={userInp} setUserInp={setUserInp} />
            <button id="usersearch">Save User</button>
          </form>
        </div>
        <div className="section">
          {userData && <UserInfo userData={userData} />}
          {repoDetails && repoDetails.length > 0 && (
            <RepositoryList repoDetails={repoDetails} />
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
