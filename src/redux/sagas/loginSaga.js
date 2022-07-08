import { put, takeEvery } from 'redux-saga/effects';

import { loginUserRequest } from '../api/api';
import { successLogIn, failedLogIn } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* loginUser({ payload }) {
  try {
    const response = yield loginUserRequest(payload);
    yield put(successLogIn(response.data));
    localStorage.setItem('token', response.headers.authorization);
  } catch (error) {
    yield put(failedLogIn(error.message));
  }
}

export function* listenerLoginSaga() {
  yield takeEvery(actions.userLogIn, loginUser);
}
