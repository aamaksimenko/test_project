import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootSaga from './sagas/rootSaga';
import userReducer from './slices/userSlice';
import loginReducer from './slices/loginSlice';

const configureAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];

  const store = configureStore({
    reducer: {
      user: userReducer,
      login: loginReducer,
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
