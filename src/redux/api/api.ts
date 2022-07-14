import axios from 'axios';

const api = axios.create({
  // @ts-expect-error TS(2580): Cannot find name 'process'. Do you need to install... Remove this comment to see the full error message
  baseURL: process.env.REACT_APP_AXIOS,
  // @ts-expect-error TS(2322): Type 'string | null' is not assignable to type 'st... Remove this comment to see the full error message
  headers: { Authorization: localStorage.getItem('token') },
});

api.interceptors.request.use(
  (config) => {
    const { headers } = config;
    const token = localStorage.getItem('token');
    if (token) {
      // @ts-expect-error TS(2532): Object is possibly 'undefined'.
      headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export const registrationUserRequest = async ({
  username,
  email,
  password
}: any) => {
  const data = await api.post('/users', { user: { username, email, password } });
  return data;
};

export const loginUserRequest = async ({
  email,
  password
}: any) => {
  const data = await api.post('/users/sign_in', { user: { email, password } });
  return data;
};

export const logOutUserRequest = async () => {
  const data = await api.get('/users/sign_out');
  return data;
};

export const addCompanyRequest = async ({
  title
}: any) => {
  const data = await api.post('/companies', { title });
  return data;
};

export const addUserInCompanyRequest = async ({
  id,
  email
}: any) => {
  const data = await api.post(`/companies/${id}`, { email });
  return data;
};

export const getCompaniesRequest = async () => {
  const data = await api.get('/companies');
  return data;
};

export const getUsersInCompanyRequest = async (id: any) => {
  const data = await api.get(`/companies/${id}`);
  return data;
};

export const getAllDocumentsRequest = async () => {
  const data = await api.get('/documents');
  return data;
};

export const getOneDocumentRequest = async (id: any) => {
  const data = await api.get(`/documents/${id}`);
  return data;
};