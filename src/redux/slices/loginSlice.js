import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogIn: false,
  user: [],
  isAccess: Boolean(localStorage.getItem('token')),
  error: null,
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
    trueLogIn(state, action) {
      if (state.isLogIn === true) {
        state.isLogIn = false;
        state.user = action.payload;
        state.isAccess = true;
      }
    },
    falseLogIn(state, action) {
      state.isLogIn = false;
      state.isAccess = false;
      state.error = action.payload;
    },
    logoutUser(state) {
      state.isAccess = false;
    },
  },
});

export const {
  userLogIn,
  trueLogIn,
  falseLogIn,
  logoutUser,
} = loginSlice.actions;
export default loginSlice.reducer;
