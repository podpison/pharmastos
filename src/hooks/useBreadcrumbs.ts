import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBreadcrumbsItem, BreadcrumbsItemType, deleteBreadcrumbItems } from "../redux/reducers/breadcrumbsReducer";

export const useBreadcrumbs = (item: BreadcrumbsItemType) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addBreadcrumbsItem(item));
    return () => {
      dispatch(deleteBreadcrumbItems());
    }
  }, []);
};