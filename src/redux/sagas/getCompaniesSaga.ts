import { put, takeEvery } from 'redux-saga/effects';

import { getCompaniesRequest } from '../api/api';
import { successGetCompanies, failedGetCompanies } from '../slices/getCompaniesSlice';
import * as actions from '../slices/getCompaniesSlice';

function* getCompanies() {
  try {
    const { data } = yield getCompaniesRequest();
    yield put(successGetCompanies(data));
  } catch (error) {
    yield put(failedGetCompanies((error as any).message));
  }
}

export function* listenerGetCompaniesSaga() {
  yield takeEvery(actions.getCompanies, getCompanies);
}