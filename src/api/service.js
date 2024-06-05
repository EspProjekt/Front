import axios from 'axios';

const apiUrl = 'localhost:5000';
const apiClient = axios.create({
    baseURL: `http://${apiUrl}/`,
    withCredentials: true
});

export  { apiClient, apiUrl };