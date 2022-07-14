import { put, takeEvery } from 'redux-saga/effects';

import { getAllDocumentsRequest } from '../api/api';
import { successGetAllDocuments, failedGetAllDocuments } from '../slices/getAllDocumentsSlice';
import * as actions from '../slices/getAllDocumentsSlice';

function* getAllDocuments() {
  try {
    const { data } = yield getAllDocumentsRequest();
    yield put(successGetAllDocuments(data));
  } catch (error) {
    yield put(failedGetAllDocuments(error.message));
  }
}

export function* listenerGetAllDocumentsSaga() {
  yield takeEvery(actions.getAllDocuments, getAllDocuments);
}