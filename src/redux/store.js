import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootSaga } from './sagas/rootSaga';
import registrationReducer from './slices/registrationSlice';
import loginReducer from './slices/loginSlice';
import addCompanyReducer from './slices/addCompanySlice';
import addUserInCompanyReducer from './slices/addUserInCompanySlice';
import getCompaniesReducer from './slices/getCompaniesSlice';
import getUsersInCompanyReducer from './slices/getUsersInCompanySlice';
import getAllDocumentsReducer from './slices/getAllDocumentsSlice';

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
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: false,
    }).concat(middlewares),
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
