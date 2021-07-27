import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '../../feed/sample.json'
});

export default axiosInstance;