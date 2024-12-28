import axios from "axios";
import { GITHUB_API_BASEURL } from "../constants/constants";

export const axiosInstance = axios.create({
    baseURL:GITHUB_API_BASEURL
})