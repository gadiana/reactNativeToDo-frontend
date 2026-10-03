import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reactnativetodo.onrender.com/api/todos',
});

export default api;