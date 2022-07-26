import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOurProductItems } from "../redux/selectors";

export const useProduct = () => {
  const { categoryId, productId } = useParams();
  let currentCategory = useSelector(selectOurProductItems).find(c => c.id === categoryId);
  let currentProduct = currentCategory?.items.find(p => p.id === productId);
  return { currentCategory, currentProduct };
};