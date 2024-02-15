import { configureStore } from "@reduxjs/toolkit";
import { drawerSlice } from "./slices/drawerSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerSlice.reducer,
  },
});
