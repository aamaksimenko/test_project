import { all } from 'redux-saga/effects';

import { listenerRegistrationUserSaga } from './registrationUserSaga';
import { listenerLoginSaga } from './loginSaga';
import { listenerLogoutSaga } from './logoutSaga';
import { listenerAddCompanySaga } from './addCompanySaga';
import { listenerAddUserInCompanySaga } from './addUserInCompanySaga';
import { listenerGetCompaniesSaga } from './getCompaniesSaga';
import { listenerGetUserInCompanySaga } from './getUserInCompanySaga';

export function* rootSaga() {
  yield all([
    listenerRegistrationUserSaga(),
    listenerLoginSaga(),
    listenerLogoutSaga(),
    listenerAddCompanySaga(),
    listenerAddUserInCompanySaga(),
    listenerGetCompaniesSaga(),
    listenerGetUserInCompanySaga(),
  ]);
}
