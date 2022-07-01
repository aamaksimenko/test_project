import { all } from 'redux-saga/effects';

import registrationSaga from './registrationSaga';
import startLoginSaga from './startLoginSaga';

export default function* rootSaga() {
  yield all([
    registrationSaga(),
    startLoginSaga(),
  ]);
}
