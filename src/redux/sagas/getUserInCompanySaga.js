import { put, takeEvery } from 'redux-saga/effects';

import { getUsersInCompanyRequest } from '../api/api';
import { successGetUser, failedGetUser } from '../slices/getUsersInCompanySlice';
import * as actions from '../slices/getUsersInCompanySlice';

function* getUserInCompany({ payload }) {
  try {
    const { data } = yield getUsersInCompanyRequest(payload);
    yield put(successGetUser(data));
  } catch (error) {
    yield put(failedGetUser(error.message));
  }
}

export function* listenerGetUserInCompanySaga() {
  yield takeEvery(actions.getUser, getUserInCompany);
}