import axios from 'axios'
import constants from '../../constants/constants'
const {baseUrl} = constants
const axiosInstance= axios.create({
    baseURL:baseUrl
})
export default axiosInstance