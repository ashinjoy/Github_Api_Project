import { useParams } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import "./RepositoryDetail.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function RepositoryDetails() {
  const { repo_name } = useParams();
  const { repoDetails } = useSelector((state) => state.user);
  const [repoData, setRepoData] = useState(null);
  useEffect(() => {
    if (!repoDetails) {
      return;
    }
    const [repositoryDetails] = repoDetails.filter((data) => {
      return data?.name == repo_name;
    });

    setRepoData(repositoryDetails);
  }, []);

  return (
    <>
      <div className="repo-maindiv">
  <div className="repo-container">
    <div className="img-container">
      {repoData && (
        <img src={repoData?.owner?.avatar_url} alt="Repository Logo" />
      )}
    </div>
    <div className="repo-verification">
      <div className="repo-verify">
        <MdVerified size={"1.5rem"} style={{ color: "green" }} />
        <h3>GitHub Repository</h3>
      </div>
    </div>
    {repoData && (
      <div className="repo-category">
        <h4>Repository Details</h4>
        <div className="category">
          <div className="cat-detail">
            <span>Repo Type</span>
            <span className={`cat-type ${repoData?.private ? 'private' : 'public'}`}>
              {repoData?.private ? "Private" : "Public"}
            </span>
          </div>
          <div className="cat-detail">
            <span>Stars</span>
            <span className="cat-type">{repoData?.stargazers_count}</span>
          </div>
          <div className="cat-detail">
            <span>Forks</span>
            <span className="cat-type">{repoData?.forks}</span>
          </div>
          <div className="cat-detail">
            <span>Language</span>
            <span className="cat-type">{repoData?.language}</span>
          </div>
          <div className="cat-detail">
            <span>Watchers</span>
            <span className="cat-type">{repoData?.watchers}</span>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="repo-description">
    <h3>Application</h3>
    {repoData && <h1>{repoData?.name}</h1>}
    {repoData && <p>{repoData?.description ? repoData?.description  : "No Desription Available"}</p>}
  </div>
</div>

    </>
  );
}

export default RepositoryDetails;
