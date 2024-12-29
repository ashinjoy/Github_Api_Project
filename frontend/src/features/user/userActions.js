import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserGithubData } from "./userService";


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