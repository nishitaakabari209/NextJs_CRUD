"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";
import { useEffect, useState } from "react";

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(true);
  }, []);

  if (!user) {
    return null; 
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
