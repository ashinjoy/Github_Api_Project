import { useParams } from "react-router-dom";
import "./RepositoryDetail.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function RepositoryDetails({}) {
  const {repo_name} = useParams()
  console.log(repo_name);
  const {repoDetails} = useSelector((state)=>state.user)
  const [repoData,setRepoData] = useState(null)
  useEffect(()=>{
    if(!repoDetails){
      return
    }
   const [repositoryDetails] =  repoDetails.filter((data)=>{
     return data?.name == repo_name
    })
    console.log();
    
    setRepoData(repositoryDetails)
  },[])
  useEffect(()=>{
console.log(repoData);

  },[repoData])
  
  return (
    <>
 <div className="repo-maindiv">
  <div className="repo-container">  
    <div className="img-container">
     {repoData && <img
        src={repoData?.owner?.avatar_url}
        alt="Repository Logo"
      />}
    </div>
    <div className="repo-verification">
      <h3>Verified by GitHub</h3>
      <p>GitHub confirms this app meets the requirements for verification</p>
    </div>
    <div className="repo-category">
      <h4>Categories</h4>
      <div className="category">
      <span className="cat-type">Code Reviews</span>
      <span className="cat-type">Code </span>
      <span className="cat-type">Code Reviews</span>
      <span className="cat-type">Code Reviews</span>
      <span className="cat-type">Code Reviews</span>
      </div>
    </div>
  </div>
  <div className="repo-description">
    <h3>Application</h3>
  { repoData && <h1>{repoData?.name}</h1>}
    <button className="plan-btn">Set up a plan</button>
  </div>
</div>


    </>
  );
}

export default RepositoryDetails;
