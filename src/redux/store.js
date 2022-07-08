import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootSaga } from './sagas/rootSaga';
import registrationReducer from './slices/registrationSlice';
import loginReducer from './slices/loginSlice';
import addCompanyReducer from './slices/addCompanySlice';
import addUserReducer from './slices/addUserSlice';
import getCompaniesReducer from './slices/getCompaniesSlice';
import getUsersInCompanyReducer from './slices/getUsersInCompanySlice';

export const configureAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store = configureStore({
    reducer: {
      registration: registrationReducer,
      login: loginReducer,
      add_company: addCompanyReducer,
      add_user_company: addUserReducer,
      get_companies: getCompaniesReducer,
      get_users_company: getUsersInCompanyReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: false,
    }).concat(middlewares),
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
