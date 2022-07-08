import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddUser: false,
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
};

const addUserInCompanySlice = createSlice({
  name: 'add_user_company',
  initialState,
  reducers: {
    addUserInCompany(state) {
      if (state.isAccess === true) {
        state.isAddUser = true;
        state.isAccess = false;
      }
    },
    successAddUserInCompany(state) {
      if (state.isAddUser === true) {
        state.isAddUser = false;
        state.isAccess = true;
      }
    },
    failedAddUserInCompany(state, action) {
      state.isAddUser = false;
      state.isAccess = false;
      state.error = action.payload;
    },
  },
});

export const {
  addUserInCompany,
  successAddUserInCompany,
  failedAddUserInCompany,
} = addUserInCompanySlice.actions;
export default addUserInCompanySlice.reducer;