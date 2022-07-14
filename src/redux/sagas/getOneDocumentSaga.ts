import { put, takeEvery } from 'redux-saga/effects';

import { getOneDocumentRequest } from '../api/api';
import { successGetOneDocument, failedGetOneDocument } from '../slices/getOneDocumentSlice';
import * as actions from '../slices/getOneDocumentSlice';

function* getOneDocument({ payload }) {
  try {
    const { data } = yield getOneDocumentRequest(payload);
    yield put(successGetOneDocument(data));
  } catch (error) {
    yield put(failedGetOneDocument(error.message));
  }
}

export function* listenerGetOneDocumentSaga() {
  yield takeEvery(actions.getOneDocument, getOneDocument);
}
