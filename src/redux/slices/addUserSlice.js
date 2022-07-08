import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddUser: false,
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
};

const addUserSlice = createSlice({
  name: 'add_user_company',
  initialState,
  reducers: {
    addUserCompany(state) {
      if (state.isAccess === true) {
        state.isAddUser = true;
        state.isAccess = false;
      }
    },
    successAddUserCompany(state) {
      if (state.isAddUser === true) {
        state.isAddUser = false;
        state.isAccess = true;
      }
    },
    failedAddUserCompany(state, action) {
      state.isAddUser = false;
      state.isAccess = false;
      state.error = action.payload;
    },
  },
});

// success
// failed


export const {
  addUserCompany,
  successAddUserCompany,
  failedAddUserCompany,
} = addUserSlice.actions;
export default addUserSlice.reducer;