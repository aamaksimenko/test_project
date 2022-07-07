import { put, takeEvery } from 'redux-saga/effects';

import { loginUser } from '../api/api';
import { successLogIn, failedLogIn } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* startLoginUser({ payload }) {
  try {
    const data = yield loginUser(payload);
    yield put(successLogIn(data.data));
    localStorage.setItem('token', data.headers.authorization);
  } catch (error) {
    yield put(failedLogIn(error.message));
  }
}

function* listenerStartLoginSaga() {
  yield takeEvery(actions.userLogIn, startLoginUser);
}

export default listenerStartLoginSaga;
