import { all } from 'redux-saga/effects';

import { listenerRegistrationUserSaga } from './registrationUserSaga';
import { listenerLoginSaga } from './loginSaga';
import { listenerLogoutSaga } from './logoutSaga';

export function* rootSaga() {
  yield all([
    listenerRegistrationUserSaga(),
    listenerLoginSaga(),
    listenerLogoutSaga(),
  ]);
}
