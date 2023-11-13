import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import auth from "./slice/authSlice";
import app from "./slice/appSlice";

export default configureStore({
  reducer: {
    auth,
    app,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
