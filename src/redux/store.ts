import { configureStore } from "@reduxjs/toolkit";
import { breadcrumbsReducer } from "./reducers/breadcrumbsReducer";

export const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbsReducer
  }
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;