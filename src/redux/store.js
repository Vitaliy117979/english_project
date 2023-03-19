import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { wordsReducer } from './wordSlise';

// Persisting token field from auth slice to localstorage
const persistConfig = {
  key: 'words',
  storage,
  whitelist: ['words'],
};

const rootReduser = combineReducers({
  words: wordsReducer,
});
const persistedReduser = persistReducer(persistConfig, rootReduser);
export const store = configureStore({
  reducer: persistedReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
