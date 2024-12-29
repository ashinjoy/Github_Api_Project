import { useDispatch, useSelector } from "react-redux";
import "./UserProfile.css";
import { useEffect, useState } from "react";
import { editUserProfile } from "../../features/user/userActions";

function UserProfile() {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const [userDetails, setUserDetails] = useState({
    company: "",
    name: "",
    location: "",
    email: "",
    bio: "",
  });
  console.log(userData);
  const handleChange = (e) => {
    if (e.target.id === "name") {
      setUserDetails((prev) => {
        return {
          ...prev,
          name: e.target.value,
        };
      });
      return;
    }
    if (e.target.id === "company") {
      setUserDetails((prev) => {
        return {
          ...prev,
          company: e.target.value,
        };
      });
      return;
    }
    if (e.target.id === "email") {
      setUserDetails((prev) => {
        return {
          ...prev,
          email: e.target.value,
        };
      });
      return;
    }
    if (e.target.id === "location") {
      setUserDetails((prev) => {
        return {
          ...prev,
          location: e.target.value,
        };
      });
      return;
    }
    if (e.target.id === "bio") {
      setUserDetails((prev) => {
        return {
          ...prev,
          bio: e.target.value,
        };
      });
      return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUserProfile({...userDetails,uname:userData?.login}))
  };

  useEffect(() => {
    const data = {
      company: userData?.company,
      name: userData?.name,
      location: userData?.location,
      email: userData?.email,
      bio: userData?.bio,
    };
    console.log('kjjj',data);
    
    setUserDetails(data);
  }, [userData]);
  return (
    <>
      <div className="userProfile-main">
        <div className="userprofile">
          <form className="form" onSubmit={handleSubmit}>
            <div className="imagewrap">
              {userData && <img src={userData?.avatar_url} alt="kjkkkj" />}
              {userData && <h1>userData?.login</h1>}
            </div>
            <div className="details">
              {userDetails && (
                <input
                  type="text"
                  name=""
                  id="name"
                  value={userDetails?.name}
                  onChange={handleChange}
                />
              )}
              <input
                type="text"
                name=""
                id="email"
                value={userDetails?.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name=""
                id="company"
                value={userDetails?.company}
                onChange={handleChange}
              />
              <input
                type="text"
                name=""
                id="location"
                value={userDetails?.location}
                onChange={handleChange}
              />
              <input
                type="text"
                name=""
                id="bio"
                value={userDetails?.bio}
                onChange={handleChange}
              />
            </div>
            <button>Edit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
