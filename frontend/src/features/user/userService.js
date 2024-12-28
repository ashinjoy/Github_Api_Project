import axiosInstance from "../../utils/axios/baseUrl"

export const fetchUserGithubData = async(uname)=>{
try {
   const response =  await axiosInstance.get(`/user/${uname}`)
   return response.data
} catch (error) {
    console.error(error);
    throw error
}
}