import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  pages: [],
  error: null,
};

const getPagesInDocumentSlice = createSlice({
  name: 'getPagesInDocument',
  initialState,
  reducers: {
    getPagesInDocument(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetPagesInDocument(state, action) {
      state.isLoading = false;
      state.pages = action.payload;
    },
    failedGetPagesInDocument(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getPagesInDocument,
  successGetPagesInDocument,
  failedGetPagesInDocument,
} = getPagesInDocumentSlice.actions;
export default getPagesInDocumentSlice.reducer;
