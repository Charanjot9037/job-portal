

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from './authSlice.js';
// import jobSlice from './jobSlice.js';
// import companySlice from './companySlice.js';
// import ApplicationSlice from './applicationslice.js';
// import storage from './storage.js'
// // Always import persist methods
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// // // For storage, we’ll conditionally import
// // import storage from 'redux-persist/lib/storage';

// const rootReducer = combineReducers({
//   auth: authSlice,
//   job: jobSlice,
//   company: companySlice,
//   Application: ApplicationSlice,
// });

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
// };

// // Create persisted reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Create store
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // Export a fallback persistor
// export const persistor =
//   typeof window !== 'undefined' ? persistStore(store) : { purge: () => {}, flush: () => {} };

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import authSlice from "./authSlice.js";
// import jobSlice from "./jobSlice.js";
// import companySlice from "./companySlice.js";
// import applicationSlice from "./applicationslice.js";

// import storage from "./storage.js";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const rootReducer = combineReducers({
//   auth: authSlice,
//   job: jobSlice,
//   company: companySlice,
//   application: applicationSlice,
// });

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// // ✅ only create persistor on client
// export const persistor =
//   typeof window !== "undefined" ? persistStore(store) : null;
"use client";
import authSlice from "./authSlice.js";
import jobSlice from "./jobSlice.js";
import companySlice from "./companySlice.js";
import applicationSlice from "./applicationslice.js";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "./storage"; // 👈 import safe storage
const rootReducer = combineReducers({
  auth: authSlice,
  job: jobSlice,
  company: companySlice,
  application: applicationSlice,
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // only persist needed reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
