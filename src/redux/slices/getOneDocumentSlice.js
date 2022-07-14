import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  partsOfDocument: [],
  error: null,
};

const getOneDocumentSlice = createSlice({
  name: 'getOneDocument',
  initialState,
  reducers: {
    getOneDocument(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetOneDocument(state, action) {
      state.isLoading = false;
      state.partsOfDocument = action.payload;
    },
    failedGetOneDocument(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getOneDocument,
  successGetOneDocument,
  failedGetOneDocument,
} = getOneDocumentSlice.actions;
export default getOneDocumentSlice.reducer;
