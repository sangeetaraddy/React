import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice"
import enquiriesReducer from "./enquiriesSlice";

export const store = configureStore({
    reducer: {
        course: courseReducer,
        enquiries:enquiriesReducer
    }
});

export default store;