import { createSlice } from "@reduxjs/toolkit";
import {
  editUserProfile,
  fetchFollowersData,
  fetchFollowersRepoData,
  fetchUserGithubDetails,
} from "./userActions";

const getData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  console.log("ttt", data);

  return data;
};

const persistData = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

const initialState = {
  userData: getData("userData") || null,
  repoDetails: getData("repoData") || null,
  followerDetails: getData("followersData") || null,
  followersRepoList: getData("followersRepoList") || null,
  loading: false,
  success: false,
  error: "",
  message: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserGithubDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserGithubDetails.fulfilled, (state, action) => {
        persistData("userData", action.payload?.userData);
        persistData("repoData", action.payload?.repoDetails);
        state.success = true;
        state.repoDetails = action.payload?.repoDetails;
        state.userData = action.payload?.userData;
        state.message = action.payload.message;
      })
      .addCase(fetchUserGithubDetails.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFollowersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFollowersData.fulfilled, (state, action) => {
        persistData("followersData", action.payload?.followersData);
        state.success = true;
        state.message = action.payload?.message;
        state.followerDetails = action.payload?.followersData;
      })
      .addCase(fetchFollowersData.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchFollowersRepoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFollowersRepoData.fulfilled, (state, action) => {
        persistData("followersRepoList", action.payload?.followerRepoList);
        state.success = true;
        state.message = action.payload?.message;
        state.followersRepoList = action.payload.followerRepoList;
      })
      .addCase(fetchFollowersRepoData.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        persistData("userData", action.payload?.userData);
        state.success = true;
        state.message = action.payload?.message;
        state.userData = action.payload.userData;
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export default userSlice.reducer;
