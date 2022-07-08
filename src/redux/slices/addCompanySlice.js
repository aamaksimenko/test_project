import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAddCompany: false,
  company: [],
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
};

const addCompanySlice = createSlice({
  name: 'add_company',
  initialState,
  reducers: {
    addCompany(state) {
      if (state.isAccess === true) {
        state.isAddCompany = true;
        state.isAccess = false;
      }
    },
    successAddCompany(state, action) {
      if (state.isAddCompany === true) {
        state.isAddCompany = false;
        state.company = action.payload;
        state.isAccess = true;
      }
    },
    failedAddCompany(state, action) {
      state.isAddCompany = false;
      state.isAccess = false;
      state.error = action.payload;
    },
  },
});

export const {
  addCompany,
  successAddCompany,
  failedAddCompany,
} = addCompanySlice.actions;
export default addCompanySlice.reducer;