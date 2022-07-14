import { put, takeEvery } from 'redux-saga/effects';

import { loginUserRequest } from '../api/api';
import { successLogIn, failedLogIn } from '../slices/loginSlice';
import * as actions from '../slices/loginSlice';

function* loginUser({
  payload
}: any) {
  try {
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    const response = yield loginUserRequest(payload);
    yield put(successLogIn(response.data));
    localStorage.setItem('currentUser', JSON.stringify(response.data.message))
    localStorage.setItem('token', response.headers.authorization);
  } catch (error) {
    yield put(failedLogIn((error as any).message));
  }
}

export function* listenerLoginSaga() {
  yield takeEvery(actions.userLogIn, loginUser);
}
