import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import rootSaga from './sagas/rootSaga';
import userReducer from './slices/userSlice';
import loginReducer from './slices/loginSlice';
import addCompanyReducer from './slices/addCompanySlice';
import getUserReducer from './slices/getUserSlice';

const configureAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store = configureStore({
    reducer: {
      registration: userReducer,
      login: loginReducer,
      add_company: addCompanyReducer,
      user: getUserReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: false,
    }).concat(middlewares),
    preloadedState: initialState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
