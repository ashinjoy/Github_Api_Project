import { createAsyncThunk } from "@reduxjs/toolkit";
import { editUserProfileService, fetchFollowersRepoService, fetchFollowersService, fetchUserGithubData } from "./userService";



export const fetchUserGithubDetails = createAsyncThunk('fetchUserGithubDetails',async(data,{rejectWithValue})=>{
    try {
      const response =   await fetchUserGithubData(data)
      console.log('response data from search',response);
      return response
    } catch (error) {
        console.error(error);
        rejectWithValue(error?.response?.data?.error)
    }

})

export const fetchFollowersData = createAsyncThunk('fetchFollowersData',async(data,{rejectWithValue})=>{
  try {
   const response =  await fetchFollowersService(data)
   return response
  } catch (error) {
    console.error(error);
    rejectWithValue(error?.response?.data?.error)
  }
})

export const fetchFollowersRepoData = createAsyncThunk('fetchFollowersRepoData',async(data,{rejectWithValue})=>{
  try {
   const response =  await fetchFollowersRepoService(data)
   return response
  } catch (error) {
    console.error(error);
    rejectWithValue(error?.response?.data?.error)
  }
})

export const editUserProfile = createAsyncThunk('editUserProfile',async(data,{rejectWithValue})=>{
  try {
    const uname = data?.uname
    const updatedData = {
      company:data?.company,
      name:data?.name,
      location:data?.location,
      email:data?.email,
      bio:data?.email
    }
   const response =  await editUserProfileService(uname,updatedData)
   return response
  } catch (error) {
    console.error(error);
    rejectWithValue(error?.response?.data?.error)
  }
})