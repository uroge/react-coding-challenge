import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '../../feed/'
});

export default axiosInstance;