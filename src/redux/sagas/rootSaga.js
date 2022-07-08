import { all } from 'redux-saga/effects';

import registrationSaga from './registrationSaga';
import loginSaga from './loginSaga';
import logoutSaga from './logoutSaga';

export function* rootSaga() {
  yield all([
    registrationSaga(),
    loginSaga(),
    logoutSaga(),
  ]);
}
