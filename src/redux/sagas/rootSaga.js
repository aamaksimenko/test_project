import { all } from 'redux-saga/effects';

import registrationSaga from './registrationSaga';
import LoginSaga from './LoginSaga';
import logoutSaga from './logoutSaga';

export default function* rootSaga() {
  yield all([
    registrationSaga(),
    LoginSaga(),
    logoutSaga(),
  ]);
}
