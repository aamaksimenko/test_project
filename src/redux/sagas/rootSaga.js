import { all } from 'redux-saga/effects';

import registrationSaga from './registrationSaga';
import startLoginSaga from './startLoginSaga';
import logoutSaga from './logoutSaga';

export default function* rootSaga() {
  yield all([
    registrationSaga(),
    startLoginSaga(),
    logoutSaga(),
  ]);
}
