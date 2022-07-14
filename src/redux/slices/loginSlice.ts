import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogIn: false,
  isLogOut: false,
  user: [],
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
  errorOut: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    userLogIn(state) {
      if (state.isLogIn === false) {
        state.isLogIn = true;
        state.isAccess = false;
      }
    },
    successLogIn(state, action) {
      if (state.isLogIn === true) {
        state.isLogIn = false;
        state.user = action.payload;
        state.isAccess = true;
      }
    },
    failedLogIn(state, action) {
      state.isLogIn = false;
      state.isAccess = false;
      state.error = action.payload;
    },
    logoutUser(state) {
      state.isLogOut = true;
    },
    successLogout(state) {
      state.isLogOut = true;
      state.isAccess = false;
      // @ts-expect-error TS(2322): Type 'null' is not assignable to type 'never[]'.
      state.user = null;
    },
    failedLogout(state, action) {
      state.errorOut = action.payload;
    },
  },
});

export const {
  userLogIn,
  successLogIn,
  failedLogIn,
  logoutUser,
  successLogout,
  failedLogout,
} = loginSlice.actions;
export default loginSlice.reducer;
