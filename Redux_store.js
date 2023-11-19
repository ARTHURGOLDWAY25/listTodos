import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import { createSlice } from "./todosSlice";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, createSlice);

const store = configureStore({
    reducer: persistedReducer, // <-- Use persistedReducer here
    devTools: process.env.NODE_ENV !== 'development',
  });
  

const persistor = persistStore(store);

export { store, persistor };


