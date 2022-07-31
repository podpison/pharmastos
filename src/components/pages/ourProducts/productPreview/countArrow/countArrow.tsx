import arrowTop from "./../../../../../assets/images/pages/ourProducts/arrowUp.png";
import "./countArrow.scss";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  type: "increase" | 'decrease'
  setItemsCount: Dispatch<SetStateAction<number>>
}

export const CountArrow: React.FC<Props> = ({ type, setItemsCount }) => {
  const { t } = useTranslation();

  const clickHandler = () => {
    type === 'increase' ? setItemsCount(p => p === 999 ? p : p + 1) : setItemsCount(p => p === 0 ? p : p - 1);
  }
  let alt = type === 'increase' ? t('ourProducts.productPreview.arrowTop') : t('ourProducts.productPreview.arrowDown')

  return <button onClick={clickHandler} className="product-preview__items-action">
    <img alt={alt} src={arrowTop} />
  </button>
}
