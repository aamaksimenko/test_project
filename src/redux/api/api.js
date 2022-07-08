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

export const registrationUserRequest = async ({ username, email, password }) => {
  const data = await api.post('/users', { user: { username, email, password } });
  return data;
};

export const loginUserRequest = async ({ email, password }) => {
  const data = await api.post('/users/sign_in', { user: { email, password } });
  return data;
};

export const logOutUserRequest = async () => {
  const data = await api.get('/users/sign_out');
  return data;
};

export const addCompanyRequest = async (payload) => {
  const data = await api.post('/companies', payload);
  return data;
};

export const addUserInCompanyRequest = async ({ id, values }) => {
  const data = await api.post(`/companies/${id}`, { values });
  return data;
};

export const getCompaniesRequest = async () => {
  const data = await api.get('/companies');
  return data;
};

export const getUsersInCompanyRequest = async (id) => {
  const data = await api.get(`/companies/${id}`);
  return data;
};