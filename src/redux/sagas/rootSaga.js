import { all } from 'redux-saga/effects';

import { listenerRegistrationUserSaga } from './registrationUserSaga';
import { listenerLoginSaga } from './loginSaga';
import { listenerLogoutSaga } from './logoutSaga';
import { listenerAddCompanySaga } from './addCompanySaga';
import { listenerAddUserInCompanySaga } from './addUserInCompanySaga';
import { listenerGetCompaniesSaga } from './getCompaniesSaga';
import { listenerGetUsersInCompanySaga } from './getUserInCompanySaga';
import { listenerGetAllDocumentsSaga } from './getAllDocumentsSaga';
import { listenerGetOneDocumentSaga } from './getOneDocumentSaga';

export function* rootSaga() {
  yield all([
    listenerRegistrationUserSaga(),
    listenerLoginSaga(),
    listenerLogoutSaga(),
    listenerAddCompanySaga(),
    listenerAddUserInCompanySaga(),
    listenerGetCompaniesSaga(),
    listenerGetUsersInCompanySaga(),
    listenerGetAllDocumentsSaga(),
    listenerGetOneDocumentSaga(),
  ]);
}
