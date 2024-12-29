import axios from 'axios'
import { GITHUB_API_BASEURL } from "../constants/constants";
import { axiosInstance } from "../utils/axios";

export const fetchGitHubData = async (uname: string) => {
  try {
    console.log(`${GITHUB_API_BASEURL}/users/${uname}`);
    const resonse =  await axiosInstance.get(`/users/${uname}`);
    return resonse.data
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const fetchRepoList = async(url:string)=>{
    try {
        const response =  await axios.get(url)
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const fetchFollowingList = async(uname:string)=>{
  try {  
    const response = await axiosInstance.get(`/users/${uname}/following`)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}

export const fetchFollowersList = async(url:string)=>{
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}
export const fetchFollowersRepoDetails = async(uname:string)=>{
  try {
    const response = await axiosInstance.get(`/users/${uname}/repos`)
    return response.data
  } catch (error) {
    console.error(error);
    throw error
  }
}