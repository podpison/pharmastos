import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBreadcrumbsItem, BreadcrumbsItemType, deleteBreadcrumbItem } from "../redux/reducers/breadcrumbsReducer";

export const useBreadcrumbs = (item: BreadcrumbsItemType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    item.name && dispatch(addBreadcrumbsItem(item));
    return () => {
      item.name && dispatch(deleteBreadcrumbItem(item.name));
    }
  }, [item.name]);
};