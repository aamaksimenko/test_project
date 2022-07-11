import { put, takeEvery } from 'redux-saga/effects';

import { logOutUserRequest } from '../api/api';
import { successLogout, failedLogout } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* logoutUser() {
  try {
    yield logOutUserRequest();
    yield put(successLogout());
    localStorage.clear();
  } catch (error) {
    yield put(failedLogout(error.message));
  }
}

export function* listenerLogoutSaga() {
  yield takeEvery(actions.logoutUser, logoutUser);
}
