import { put, takeEvery } from 'redux-saga/effects';

import { registrationUserRequest } from '../api/api';
import { successRegistration, failedRegistration } from '../slices/registrationSlice';
import { userLogIn } from '../slices/loginSlice';
import * as actions from '../slices/registrationSlice';

function* registrationUser({
  payload
}: any) {
  try {
    const { data } = yield registrationUserRequest(payload);
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    yield put(successRegistration(data));
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    yield put(userLogIn(payload));
  } catch (error) {
    yield put(failedRegistration((error as any).message));
  }
}

export function* listenerRegistrationUserSaga() {
  yield takeEvery(actions.userRegistration, registrationUser);
}
