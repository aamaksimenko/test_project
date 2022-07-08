import { put, takeEvery } from 'redux-saga/effects';

import { addUserInCompanyRequest } from '../api/api';
import { successAddUserCompany, failedAddUserCompany } from '../slices/addUserInCompanySlice';
import * as actions from '../slices/addUserInCompanySlice';

function* addUserInCompany({ payload }) {
  try {
    const data = yield addUserInCompanyRequest(payload);
    yield put(successAddUserCompany(data.data));
  } catch (error) {
    yield put(failedAddUserCompany(error.message));
  }
}

export function* listenerAddUserInCompanySaga() {
  yield takeEvery(actions.addUserInCompany, addUserInCompany);
}