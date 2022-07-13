import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  documents: [],
  error: null,
};

const getAllDocumentsSlice = createSlice({
  name: 'getAllDocuments',
  initialState,
  reducers: {
    getAllDocuments(state) {
      if (state.isLoading === false) {
        state.isLoading = true;
      }
    },
    successGetAllDocuments(state, action) {
      state.isLoading = false;
      state.documents = action.payload;
    },
    failedGetAllDocuments(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getAllDocuments,
  successGetAllDocuments,
  failedGetAllDocuments,
} = getAllDocumentsSlice.actions;
export default getAllDocumentsSlice.reducer;
