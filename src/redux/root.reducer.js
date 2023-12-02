import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";

import { apiReducer } from "./api/api.reducer";
import { apiSlice } from "./services/rest";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [apiSlice.reducerPath], // Add this line to blacklist apiSlice from persisting
};

const rootReducer = combineReducers({
  api: apiReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default persistReducer(persistConfig, rootReducer);