"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const persistor=persistStore(store);



export function Providers({ children }) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {children}
    </PersistGate>
    </Provider>;
}
