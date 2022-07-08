import { put, takeEvery } from 'redux-saga/effects';

import { getCompaniesRequest } from '../api/api';
import { successGetUserCompany, failedGetUserCompany } from '../slices/getCompaniesSlice';
import * as actions from '../slices/getCompaniesSlice';

function* getCompanies() {
  try {
    const { data } = yield getCompaniesRequest();
    yield put(successGetUserCompany(data));
  } catch (error) {
    yield put(failedGetUserCompany(error.message));
  }
}

export function* listenerGetCompaniesSaga() {
  yield takeEvery(actions.getUserCompany, getCompanies);
}