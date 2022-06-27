import basketImg from "./../../../../assets/images/basket.png";
import "./basket.scss";

export const Basket: React.FC = () => {
  return <div className="basket">
    <img alt='basket' src={basketImg} />
  </div>
};