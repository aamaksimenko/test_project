import { put, takeEvery } from 'redux-saga/effects';

import { addCompanyRequest } from '../api/api';
import { successAddCompany, failedAddCompany } from '../slices/addCompanySlice';
import * as actions from '../slices/addCompanySlice';

function* addCompany({
  payload
}: any) {
  try {
    const { data } = yield addCompanyRequest(payload);
    yield put(successAddCompany(data));
  } catch (error) {
    yield put(failedAddCompany((error as any).message));
  }
}

export function* listenerAddCompanySaga() {
  yield takeEvery(actions.addCompany, addCompany);
}
