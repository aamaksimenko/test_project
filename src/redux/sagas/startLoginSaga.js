import { put, takeEvery } from 'redux-saga/effects';

import { loginUser } from '../api/api';
import { trueLogIn, falseLogIn } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* startLoginUser({ payload }) {
  try {
    const data = yield loginUser(payload);
    yield put(trueLogIn(data.data));
    localStorage.setItem('token', data.headers.authorization);
  } catch (error) {
    yield put(falseLogIn(error.message));
  }
}

function* listenerStartLoginSaga() {
  yield takeEvery(actions.userLogIn, startLoginUser);
}

export default listenerStartLoginSaga;
