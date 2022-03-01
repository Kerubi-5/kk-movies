import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import movieReducer from "./movieReducer";
export const store = configureStore({
  reducer: {
    movies: movieReducer,
    auth: authReducer,
  },
});
