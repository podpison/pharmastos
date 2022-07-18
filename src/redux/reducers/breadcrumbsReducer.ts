import { createReducer, createAction } from "@reduxjs/toolkit";

export type BreadcrumbsItemType = {
  name: string | undefined
  link: string
}

const initialState = {
  items: [] as BreadcrumbsItemType[]
}

export const addBreadcrumbsItem = createAction<BreadcrumbsItemType>('breadcrumbs/addItem');
export const deleteBreadcrumbItem = createAction<string>('breadcrumbs/deleteItem');

export const breadcrumbsReducer = createReducer(initialState, builder => {
  builder.addCase(addBreadcrumbsItem, (state, action) => {
    state.items.push(action.payload);
  });
  builder.addCase(deleteBreadcrumbItem, (state, action) => {
    state.items = state.items.filter(i => i.name !== action.payload);
  });
  builder.addDefaultCase(() => {});
});
