import { put, takeEvery } from 'redux-saga/effects';

import { getUsersInCompanyRequest } from '../api/api';
import { successGetUsers, failedGetUsers } from '../slices/getUsersInCompanySlice';
import * as actions from '../slices/getUsersInCompanySlice';

function* getUsersInCompany({ payload }) {
  try {
    const { data } = yield getUsersInCompanyRequest(payload);
    yield put(successGetUsers(data));
  } catch (error) {
    yield put(failedGetUsers(error.message));
  }
}

export function* listenerGetUsersInCompanySaga() {
  yield takeEvery(actions.getUsers, getUsersInCompany);
}