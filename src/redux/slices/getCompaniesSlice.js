import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  company: [],
  error: null,
};

const getCompaniesSlice = createSlice({
  name: 'get_companies',
  initialState,
  reducers: {
    getUserCompany(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetUserCompany(state, action) {
      state.isLoading = false;
      state.company = action.payload;
    },
    failedGetUserCompany(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUserCompany,
  successGetUserCompany,
  failedGetUserCompany,
} = getCompaniesSlice.actions;
export default getCompaniesSlice.reducer;