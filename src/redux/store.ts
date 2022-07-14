import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import logger from 'redux-logger';

import { rootSaga } from './sagas/rootSaga';
import registrationReducer from './slices/registrationSlice';
import loginReducer from './slices/loginSlice';
import addCompanyReducer from './slices/addCompanySlice';
import addUserInCompanyReducer from './slices/addUserInCompanySlice';
import getCompaniesReducer from './slices/getCompaniesSlice';
import getUsersInCompanyReducer from './slices/getUsersInCompanySlice';
import getAllDocumentsReducer from './slices/getAllDocumentsSlice';
import getOneDocumentReducer from './slices/getOneDocumentSlice';

export const configureAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store = configureStore({
    reducer: {
      registration: registrationReducer,
      login: loginReducer,
      addCompany: addCompanyReducer,
      addUserCompany: addUserInCompanyReducer,
      getCompanies: getCompaniesReducer,
      getCompanyUsers: getUsersInCompanyReducer,
      getAllDocuments: getAllDocumentsReducer,
      getOneDocument: getOneDocumentReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: false,
    }).concat(middlewares),
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
