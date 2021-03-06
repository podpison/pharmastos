import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { classNameHelper } from "../../../../helpers/classNameHelper";
import { lngHelper } from "../../../../helpers/lngHelper";
import { ProductType } from "../../../../redux/reducers/staticReducer";
import { Button } from "../../../ui/button/Button";
import { CountArrow } from "./countArrow/countArrow";
import "./productPreview.scss";

type Props = ProductType & { className?: string }

export const ProductPreview: React.FC<Props> = ({ className, img, price, name, enName, glovesDescription, usage, content, id }) => {
  const [currentSize, setCurrentSize] = useState<number | null>(content.details.sizes[0].size);
  const [itemsCount, setItemsCount] = useState(1);
  const { t } = useTranslation()
  const { pathname } = useLocation();

  const changeCurrentSize = (size: number) => setCurrentSize(currentSize === size ? null : size);
  let Sizes = content?.details.sizes.map((s, index) => <li onClick={() => changeCurrentSize(s.size)} className="product-preview__size" key={index}>
    <input onChange={() => { }} checked={currentSize === s.size} type="checkbox" id={String(s.size)} />
    <label htmlFor={String(s.size)}>{s.size}</label>
  </li>);
  const onCountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let numberValue = Number(e.target.value);
    setItemsCount(numberValue >= 1000 ? 999 : numberValue);
  };

  return <div className={classNameHelper("product-preview", {}, className)}>
    <img className='product-preview__productImg' src={img} alt={t('ourProducts.productPreview.product')} />
    <div className="product-preview__content">
      <h5 className="product-preview__name">{lngHelper(name)}</h5>
      <p className="product-preview__enName text2 text2_color_grayBright">{enName}</p>
      <p className="product-preview__descriptionItem text"><span>{t('ourProducts.productPreview.description')}:</span> {lngHelper(glovesDescription)}</p>
      <p className="product-preview__descriptionItem text"><span>{t('ourProducts.productPreview.use')}:</span> {lngHelper(usage)}</p>
      <div className="product-preview__sizes product-preview__descriptionItem"><span>{t('ourProducts.productPreview.size')}</span> <ul>{Sizes}</ul></div>
      <div className="product-preview__items-count-and-price">
        <div className="product-preview__items-count">
          <input value={itemsCount} type='number' className="product-preview__editValue" onChange={onCountChangeHandler} onKeyDown={(e) => e.key === '.' && e.preventDefault()} />
          <div className="product-preview__items-actions">
            <CountArrow type="increase" setItemsCount={setItemsCount} />
            <CountArrow type="decrease" setItemsCount={setItemsCount} />
          </div>
        </div>
        <h4>{price * itemsCount} ???</h4>
      </div>
      <div className="product-preview__actions">
        <Button disabled={currentSize === null || itemsCount === 0} className="product-preview__action">{t('ourProducts.productPreview.toBasket')}</Button>
        {pathname.split('/').length === 3 && <Link to={`${id}`}>
          <Button className="product-preview__action">{t('ourProducts.productPreview.more')}</Button>
        </Link>
        }
      </div>
    </div>
  </div>
};