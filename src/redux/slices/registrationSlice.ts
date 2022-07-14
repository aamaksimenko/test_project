import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistration: false,
  error: null,
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    userRegistration(state) {
      if (state.isRegistration === false) {
        state.isRegistration = true;
      }
    },
    successRegistration(state) {
      if (state.isRegistration === true) {
        state.isRegistration = false;
      }
    },
    failedRegistration(state, action) {
      state.isRegistration = false;
      state.error = action.payload;
    },
  },
});

export const {
  userRegistration,
  successRegistration,
  failedRegistration,
} = registrationSlice.actions;
export default registrationSlice.reducer;
