import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addBreadcrumbsItem, BreadcrumbsItemType, deleteBreadcrumbItems } from "../redux/reducers/breadcrumbsReducer";

export const useBreadcrumbs = (item: BreadcrumbsItemType, additionalItem?: boolean) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
  useEffect(() => {
    dispatch(addBreadcrumbsItem(item));
    return () => {
      console.log(pathname, window.location.pathname)
      if (additionalItem && window.location.pathname.includes(pathname)) return;
      dispatch(deleteBreadcrumbItems());
    }
  }, []);
};