import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { positionReducer } from "./reducers/reducers-positions";
import { filterReducer } from "../store/reducers/reducers-filter";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, combineReducers({
    positions: positionReducer,
    filter: filterReducer,
  }))

export const store = createStore(
    persistedReducer
//   combineReducers({
//     positions: positionReducer,
//     filter: filterReducer,
//   })
);

export const persistor = persistStore(store)
