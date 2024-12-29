import axiosInstance from "../../utils/axios/baseUrl";

export const fetchUserGithubData = async (uname) => {
  try {
    const response = await axiosInstance.get(`/user/${uname}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchFollowersService = async (uname) => {
  try {
    const response = await axiosInstance.get(`/user/followers/${uname}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchFollowersRepoService = async (uname) => {
    try {
      const response = await axiosInstance.get(`/user/follower/${uname}/repo`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export const editUserProfileService = async (uname,updatedData) => {
    try {
      const response = await axiosInstance.put(`/user/${uname}`,updatedData);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

