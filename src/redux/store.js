import { persistStore } from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

import rootReducer from './root.reducer';
import { apiMiddleware } from './services/middleware.api';
import { apiSlice } from './services/rest';

const middlewares = [
  apiMiddleware.middleware,
  apiSlice.middleware,
];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
