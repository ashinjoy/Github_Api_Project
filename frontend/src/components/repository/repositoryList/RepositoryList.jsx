import "./RepositoryList.css";
import {Link} from 'react-router-dom'
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
                    <Link to={`/repo-detail/${repoData?.name}`}>{repoData?.name}</Link>
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
