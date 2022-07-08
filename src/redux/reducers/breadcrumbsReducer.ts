import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  items: [] as string[]
}

export const addBreadcrumbsItem = createAction<string>('breadcrumbs/addItem');

export const breadcrumbsReducer = createReducer(initialState, builder => {
  builder.addCase(addBreadcrumbsItem, (state, action) => {
    state.items.push(action.payload)
  })
})
