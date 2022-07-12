import { put, takeEvery } from 'redux-saga/effects';

import { addUserInCompanyRequest } from '../api/api';
import { successAddUserInCompany, failedAddUserInCompany } from '../slices/addUserInCompanySlice';
import * as actions from '../slices/addUserInCompanySlice';

function* addUserInCompany({ payload }) {
  try {
    const data = yield addUserInCompanyRequest(payload);
    yield put(successAddUserInCompany(data.data));
  } catch (error) {
    yield put(failedAddUserInCompany(error.message));
  }
}

export function* listenerAddUserInCompanySaga() {
  yield takeEvery(actions.addUserInCompany, addUserInCompany);
}