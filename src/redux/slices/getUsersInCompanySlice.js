import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  company: [],
  error: null,
};

const getUsersInCompanySlice = createSlice({
  name: 'getCompanyUsers',
  initialState,
  reducers: {
    getUsers(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetUsers(state, action) {
      state.isLoading = false;
      state.company = action.payload;
    },
    failedGetUsers(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getUsers,
  successGetUsers,
  failedGetUsers,
} = getUsersInCompanySlice.actions;
export default getUsersInCompanySlice.reducer;