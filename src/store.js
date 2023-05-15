import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PURGE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { positionReducer } from "./reducers/reducers-positions";
import { filterReducer } from "../store/reducers/reducers-filter";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    positions: positionReducer,
    filter: filterReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PURGE, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
