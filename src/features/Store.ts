import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/Slices"; // Jobs state management
import authReducer from "../features/auth/AuthSlice"; // Authentication state
import Api from "../features/Api";


export const Store = configureStore({
  reducer: {
    slice: jobsReducer,  // Manages jobs-related state
    auth: authReducer,  // Manages authentication state
    [Api.reducerPath]: Api.reducer, // RTK Query reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
