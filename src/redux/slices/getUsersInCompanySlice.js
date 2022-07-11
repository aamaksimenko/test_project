import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  company: [],
  error: null,
};

const getUsersInCompanySlice = createSlice({
  name: 'get_users_company',
  initialState,
  reducers: {
    getUser(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetUser(state, action) {
      state.isLoading = false;
      state.company = action.payload;
    },
    failedGetUser(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUser,
  successGetUser,
  failedGetUser,
} = getUsersInCompanySlice.actions;
export default getUsersInCompanySlice.reducer;