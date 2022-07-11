import { createReducer, createAction } from "@reduxjs/toolkit";

export type BreadcrumbsItemType = {
  name: string
  link: string
}

const initialState = {
  items: [] as BreadcrumbsItemType[]
}

export const addBreadcrumbsItem = createAction<BreadcrumbsItemType>('breadcrumbs/addItem');
export const deleteBreadcrumbItems = createAction('breadcrumbs/deleteItems');

export const breadcrumbsReducer = createReducer(initialState, builder => {
  builder.addCase(addBreadcrumbsItem, (state, action) => {
    state.items.push(action.payload);
  });
  builder.addCase(deleteBreadcrumbItems, (state) => {
    state.items = [];
  });
  builder.addDefaultCase(() => {});
});
