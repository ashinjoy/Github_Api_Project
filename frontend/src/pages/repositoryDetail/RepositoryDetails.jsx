import "./RepositoryDetail.css";
function RepositoryDetails() {
  console.log("ll");

  return (
    <>
     <div className="repo-maindiv">
  <div className="repo-container">
    <div className="img-container">
      <img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        alt="Repository Logo"
      />
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
    <h1>gitpod.io</h1>
    <button className="plan-btn">Set up a plan</button>
  </div>
</div>


    </>
  );
}

export default RepositoryDetails;
