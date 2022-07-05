import { put, takeEvery } from 'redux-saga/effects';

import { logOutUser } from '../api/api';
import { trueLogout, falseLogout } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* logoutUser() {
  try {
    yield logOutUser();
    yield put(trueLogout());
    localStorage.removeItem('token');
  } catch (error) {
    yield put(falseLogout(error.message));
  }
}

function* listenerLogoutSaga() {
  yield takeEvery(actions.logoutUser, logoutUser);
}

export default listenerLogoutSaga;
