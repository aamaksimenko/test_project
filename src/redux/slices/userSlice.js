import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistration: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userRegistration(state) {
      if (state.isRegistration === false) {
        state.isRegistration = true;
      }
    },
    trueRegistration(state) {
      if (state.isRegistration === true) {
        state.isRegistration = false;
      }
    },
    falseRegistration(state, action) {
      state.isRegistration = false;
      state.error = action.payload;
    },
  },
});

export const { userRegistration, trueRegistration, falseRegistration } = userSlice.actions;
export default userSlice.reducer;
