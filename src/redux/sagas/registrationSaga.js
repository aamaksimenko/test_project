import { put, takeEvery } from 'redux-saga/effects';

import { registrationUserApi } from '../api/api';
import { successRegistration, failedRegistration } from '../slices/registrationSlice';
import { userLogIn } from '../slices/loginSlice';
import * as actions from '../slices/registrationSlice';

function* registrationUser({ payload }) {
  try {
    const data = yield registrationUserApi(payload);
    yield put(successRegistration(data.data));
    yield put(userLogIn(payload));
  } catch (error) {
    yield put(failedRegistration(error.message));
  }
}

function* listenerUserSaga() {
  yield takeEvery(actions.userRegistration, registrationUser);
}

export default listenerUserSaga;
