import { useProduct } from "../../../../../../hooks/useProduct";
import "./details.scss";
import { Sizes } from "./sizes/sizes";
import { Thickness } from "./thickness/Thickness";

export const Details: React.FC = () => {
  let { currentProduct } = useProduct();

  if (!currentProduct) return <></>

  let { thickness, sizes } = currentProduct.content.details;

  return <div className="product__details">
    <Thickness thickness={thickness} />
    <Sizes sizes={sizes} />
  </div>
};