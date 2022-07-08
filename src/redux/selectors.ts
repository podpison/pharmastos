import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { StateType } from "./store";

const selectSelf = (state: StateType) => state;

//breadcrumbs reducer
export const selectBreadcrumbItems = createDraftSafeSelector(selectSelf, state => state.breadcrumbs.items);