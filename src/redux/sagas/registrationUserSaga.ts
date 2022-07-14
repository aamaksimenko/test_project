import { put, takeEvery } from 'redux-saga/effects';

import { registrationUserRequest } from '../api/api';
import { successRegistration, failedRegistration } from '../slices/registrationSlice';
import { userLogIn } from '../slices/loginSlice';
import * as actions from '../slices/registrationSlice';

function* registrationUser({ payload }) {
  try {
    const { data } = yield registrationUserRequest(payload);
    yield put(successRegistration(data));
    yield put(userLogIn(payload));
  } catch (error) {
    yield put(failedRegistration(error.message));
  }
}

export function* listenerRegistrationUserSaga() {
  yield takeEvery(actions.userRegistration, registrationUser);
}
