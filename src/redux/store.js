import { configureStore } from "@reduxjs/toolkit";

import contactsReduser from "./contacts/contactsSlice";
import filterReduser from "./contacts/contactsSlice"

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "contacts",
	storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
	reducer: {
		contacts: persistedReducer,
		filter: filterReduser,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})


export const persistor = persistStore(store);
