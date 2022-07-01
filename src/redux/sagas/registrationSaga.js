import { put, takeEvery } from 'redux-saga/effects';

import { regUser } from '../api/api';
import { trueRegistration, falseRegistration } from '../slices/userSlice';
import { userLogIn } from '../slices/loginSlice';
import * as actions from '../slices/userSlice';

function* registrationUser({ payload }) {
  try {
    const data = yield regUser(payload);
    yield put(trueRegistration(data.data));
    console.log(payload);
    yield put(userLogIn(payload));
    console.log(payload);
  } catch (error) {
    yield put(falseRegistration(error.message));
  }
}

function* listenerUserSaga() {
  yield takeEvery(actions.userRegistration, registrationUser);
}

export default listenerUserSaga;
