import axios from 'axios';

const api = axios.create({ baseURL: 'http://192.241.153.213:8080/' });

export default api;
