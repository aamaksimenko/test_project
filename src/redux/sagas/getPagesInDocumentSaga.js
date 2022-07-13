import { put, takeEvery } from 'redux-saga/effects';

import { getPagesInDocumentRequest } from '../api/api';
import { successGetPagesInDocument, failedGetPagesInDocument } from '../slices/getPagesInDocumentSlice';
import * as actions from '../slices/getPagesInDocumentSlice';

function* getPagesInDocument({ payload }) {
  try {
    const { data } = yield getPagesInDocumentRequest(payload);
    yield put(successGetPagesInDocument(data));
  } catch (error) {
    yield put(failedGetPagesInDocument(error.message));
  }
}

export function* listenerGetPagesInDocumentSaga() {
  yield takeEvery(actions.getPagesInDocument, getPagesInDocument);
}
