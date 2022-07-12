import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  companies: [],
  error: null,
};

const getCompaniesSlice = createSlice({
  name: 'getCompanies',
  initialState,
  reducers: {
    getCompanies(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetCompanies(state, action) {
      state.isLoading = false;
      state.companies = action.payload;
    },
    failedGetCompanies(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCompanies,
  successGetCompanies,
  failedGetCompanies,
} = getCompaniesSlice.actions;
export default getCompaniesSlice.reducer;