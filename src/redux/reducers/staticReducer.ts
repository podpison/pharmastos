import { createReducer, createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";
import { itemsAPI } from "../../api/api";
import { RuUaArrayTextType, RuUaTextType } from "../store";

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

export type ProductType = {
  id: string
  name: RuUaTextType
  enName: string
  img: string
  glovesDescription: RuUaTextType
  price: number
  usage: RuUaTextType
  certificate: string[]
  CEOText: RuUaArrayTextType
  content: {
    description: {
      type: RuUaTextType
      material: RuUaTextType
      powder: RuUaTextType
      color: RuUaTextType
      design: RuUaTextType
      package: RuUaTextType
      medicalDevice: RuUaTextType
      personalProtectiveEquipment: RuUaTextType
      qualityAssurance: RuUaTextType
    }
    details: {
      thickness: {
        finger: string
        palm: string
        cuff: string
      }
      sizes: {
        size: number
        weight: number
        vendorСode: string
        palmWidth: string
        length: string
      }[]
    }
  }
}

export type OurProductsCategoryType = {
  icon: string
  name: RuUaTextType
  id: string
  items: ProductType[]
}

const initialState = {
  blog: [] as BlogItemType[],
  ourProducts: [
    {
      icon: 'https://i.postimg.cc/cJTWpVV4/1.png',
      name: {ru: 'Нитриловые перчатки', ua: 'Нiтриловые перчаткi'},
      items: [
        {
          name: {ru: 'Хирургические перчатки профил®'}
        }
      ]
    }
  ] as OurProductsCategoryType[]
}
export type StateKeysType = keyof typeof initialState

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