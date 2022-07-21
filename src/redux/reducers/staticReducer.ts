import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api/api";

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


export type BlogItemContentItem = {
  name: RuUaTextType
  text: {
    ru: (RuUaArrayTextType['ru'] | string)[]
    ua: (RuUaArrayTextType['ru'] | string)[]
  }
}
export type BlogItemType = {
  id: string
  name: RuUaTextType
  description: RuUaTextType
  img: string
  imgDescription: RuUaTextType
  content: {
    [key: string]: BlogItemContentItem
  }
}
const initialState = {
  blog: [] as BlogItemType[],
}
type StateKeysType = keyof typeof initialState

type SetStaticItemsType = {
  items: DocumentData[]
  key: StateKeysType
}
const setStaticItems = createAction<SetStaticItemsType>('static/setItem');

export const staticReducer = createReducer(initialState, builder => {
  builder.addCase(setStaticItems, (state, action) => {
    type KeyType = typeof action.payload.key;
    return {
      ...state,
      [action.payload.key]: action.payload.items as typeof initialState[KeyType]
    }
  });
  builder.addDefaultCase(() => { });
});

export const getStaticItems = createAsyncThunk('static/getItems', async (collection: StateKeysType, thunkAPI) => {
  let items = await itemsAPI.get(collection);
  thunkAPI.dispatch(setStaticItems({ items, key: collection }));
});