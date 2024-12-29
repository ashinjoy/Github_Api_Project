import { createSlice } from "@reduxjs/toolkit";
import { fetchUserGithubDetails } from "./userActions";


const getData = (key)=>{
return JSON.parse(localStorage.getItem(key))
}

const persistData = (key,data)=>{
return localStorage.setItem(key,JSON.stringify(data))
}

const initialState = {
  userData: getData('userData') || null,
  repoDetails: getData('repoData') ||null,
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
            persistData('userData',action.payload?.userData)
            persistData('repoData',action.payload?.repoDetails)
            state.success = true
            state.repoDetails  = action.payload?.repoDetails
            state.userData =  action.payload?.userData
            state.message = action.payload.message
        })
        .addCase(fetchUserGithubDetails.rejected,(state,action)=>{
            state.error = action.payload
        })
    }
})
export default userSlice.reducer
