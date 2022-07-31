import { configureStore } from "@reduxjs/toolkit";
import { breadcrumbsReducer } from "./reducers/breadcrumbsReducer";
import { staticReducer } from "./reducers/staticReducer";

export const store = configureStore({
  reducer: {
    breadcrumbs: breadcrumbsReducer,
    static: staticReducer
  }
});

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export type RuUaTextType = {
  ru: string
  ua: string
}
export type RuUaArrayTextType = {
  ru: {
    array: string[]
  }
  ua: {
    array: string[]
  }
}