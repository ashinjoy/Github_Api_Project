import "./RepositoryList.css";
function RepositoryList({ repoDetails }) {
  return (
    <>
      <div className="repolist">
        {repoDetails &&
          repoDetails.length > 0 &&
          repoDetails.map((repoData, index) => {
            return (
              <>
                <div className="item" key={index}>
                  <img
                    src={repoData?.owner?.avatar_url}
                    alt=""
                  />
                  <div className="itemdesc">
                    <h3>{repoData?.name}</h3>
                    <p className="desc">{repoData?.description}</p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default RepositoryList;
