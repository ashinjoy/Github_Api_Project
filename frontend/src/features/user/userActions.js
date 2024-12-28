import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserGithubData } from "./userService";


export const fetchUserGithubDetails = createAsyncThunk('fetchUserGithubDetails',async(data,{rejectWithValue})=>{
    try {
      const data =   await  fetchUserGithubData(data)
    } catch (error) {
        console.error(error);
        rejectWithValue(error?.response?.data?.error)
    }

})