import { useProduct } from "../../../../../../hooks/useProduct";
import "./details.scss";

export const Details: React.FC = () => {
  let { currentProduct } = useProduct();

  if (!currentProduct) return <></>
  let details = currentProduct.content.details;
  console.log(details)
  return <div>
    <div>
      <h5>Толщина</h5>
      <div>

      </div>
    </div>
  </div>
};