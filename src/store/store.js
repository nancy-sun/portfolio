import { configureStore } from "@reduxjs/toolkit";
import theme from "../reducers/themeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
    key: "theme",
    storage,
};

const persistedReducer = persistReducer(persistConfig, theme);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

const persistor = persistStore(store)

export { store, persistor };