import { useInsertionEffect } from "react";
import { useDispatch } from "react-redux";
import { getStaticItems, StateKeysType } from "../redux/reducers/staticReducer";
import { DispatchType } from "../redux/store";

export const useStaticItems = (collection: StateKeysType) => {
  const dispatch = useDispatch<DispatchType>();
  useInsertionEffect(() => {
    dispatch(getStaticItems(collection));
  }, []);
};