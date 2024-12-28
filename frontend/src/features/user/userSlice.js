import { createSlice } from "@reduxjs/toolkit";
import { fetchUserGithubDetails } from "./userActions";


const initialState = {
  userData: null,
  repoDetails:null,
  loading: false,
  success: false,
  error: "",
  message: "",
};

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUserGithubDetails.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUserGithubDetails.fulfilled,(state,action)=>{
            state.success = true
            state.repoDetails  = action.payload?.repoData
            state.userData =  action.payload.userData
            state.message = action.payload.message
        })
        .addCase(fetchUserGithubDetails.rejected,(state,action)=>{
            state.error = action.payload
        })
    }
})
export default userSlice.reducer
