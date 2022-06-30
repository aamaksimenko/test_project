import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: false,
    immutableCheck: false,
    serializableCheck: false,
  }).concat(sagaMiddleware),
});

const persistor = persistStore(store);

export default persistor;
sagaMiddleware.run(rootSaga);
