import { put, takeEvery } from 'redux-saga/effects';

import { getOneDocumentRequest } from '../api/api';
import { successGetOneDocument, failedGetOneDocument } from '../slices/getOneDocumentSlice';
import * as actions from '../slices/getOneDocumentSlice';

function* getOneDocument({
  payload
}: any) {
  try {
    const { data } = yield getOneDocumentRequest(payload);
    yield put(successGetOneDocument(data));
  } catch (error) {
    yield put(failedGetOneDocument((error as any).message));
  }
}

export function* listenerGetOneDocumentSaga() {
  yield takeEvery(actions.getOneDocument, getOneDocument);
}
