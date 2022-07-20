import { useTranslation } from "react-i18next";
import basketImg from "./../../../../assets/images/basket.png";
import "./basket.scss";

export const Basket: React.FC = () => {
  const { t } = useTranslation();
  
  return <div className="basket">
    <img alt={t('nav.basket')} src={basketImg} />
  </div>
};