import { put, takeEvery } from 'redux-saga/effects';

import { logOutUser } from '../api/api';
import { successLogout, failedLogout } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* logoutUser() {
  try {
    yield logOutUser();
    yield put(successLogout());
    localStorage.removeItem('token');
  } catch (error) {
    yield put(failedLogout(error.message));
  }
}

function* listenerLogoutSaga() {
  yield takeEvery(actions.logoutUser, logoutUser);
}

export default listenerLogoutSaga;
