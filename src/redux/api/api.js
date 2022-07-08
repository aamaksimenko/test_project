import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_AXIOS,
  headers: { Authorization: localStorage.getItem('token') },
});

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = localStorage.getItem('token');
    if (token) {
      headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const registrationUserApi = async ({ username, email, password }) => {
  const data = await api.post('/users', { user: { username, email, password } });
  return data;
};

export const loginUser = async ({ email, password }) => {
  const data = await api.post('/users/sign_in', { user: { email, password } });
  return data;
};

export const logOutUser = async () => {
  const data = await api.get('/users/sign_out');
  return data;
};
