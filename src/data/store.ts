import { authSlice } from './slices/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ [authSlice.name]: authSlice.reducer });

const persistConfig = {
  key: 'root',
  storage: storage,
  debug: process.env.NODE_ENV !== 'production',
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
