import { put, takeEvery } from 'redux-saga/effects';

import { addUserInCompanyRequest } from '../api/api';
import { successAddUserInCompany, failedAddUserInCompany } from '../slices/addUserInCompanySlice';
import * as actions from '../slices/addUserInCompanySlice';

function* addUserInCompany({
  payload
}: any) {
  try {
    // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
    const data = yield addUserInCompanyRequest(payload);
    // @ts-expect-error TS(2554): Expected 0 arguments, but got 1.
    yield put(successAddUserInCompany(data.data));
  } catch (error) {
    yield put(failedAddUserInCompany((error as any).message));
  }
}

export function* listenerAddUserInCompanySaga() {
  yield takeEvery(actions.addUserInCompany, addUserInCompany);
}