import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
}

interface ContactState {
  contacts: Contact[];
}

const contactSlice = createSlice({
  name: "contacts",
  initialState: { contacts: [] } as ContactState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;

const rootReducer = combineReducers({
  contacts: contactSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
