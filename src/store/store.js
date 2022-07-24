import { configureStore } from "@reduxjs/toolkit";
import theme from "../reducers/themeSlice";

const store = configureStore({
    reducer: {
        theme,
    }
});

export default store;