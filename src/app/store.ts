import { configureStore } from "@reduxjs/toolkit";
import { doorReduser } from "../Containers /Counter/counterSlice.ts";

export const store = configureStore({
  reducer: {
    door: doorReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
