import { createReducer, createAction } from "@reduxjs/toolkit";
import { RuUaTextType } from "../store";

export type BreadcrumbsItemType = {
  name: RuUaTextType | undefined | string
  link: string
}

const isItRuUaTextType = (item: BreadcrumbsItemType['name']): item is RuUaTextType => {
  return (item as RuUaTextType).ru !== undefined;
};

const initialState = {
  items: [] as BreadcrumbsItemType[]
}

export const addBreadcrumbsItem = createAction<BreadcrumbsItemType>('breadcrumbs/addItem');
export const deleteBreadcrumbItem = createAction<RuUaTextType | string>('breadcrumbs/deleteItem');

export const breadcrumbsReducer = createReducer(initialState, builder => {
  builder.addCase(addBreadcrumbsItem, (state, action) => {
    state.items.push(action.payload);
  });
  builder.addCase(deleteBreadcrumbItem, (state, action) => {
    state.items = state.items.filter(i => {
      if ((isItRuUaTextType(i.name) && isItRuUaTextType(action.payload))) {
        return i.name.ru !== action.payload.ru;
      };
      return i.name !== action.payload;
    }
    )
  });
  builder.addDefaultCase(() => { });
});
