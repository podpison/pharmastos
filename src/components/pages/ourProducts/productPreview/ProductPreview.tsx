import { useState } from "react";
import { Link } from "react-router-dom";
import { lngHelper } from "../../../../helpers/lngHelper";
import { ProductType } from "../../../../redux/reducers/staticReducer";
import { Button } from "../../../ui/button/Button";
import "./productPreview.scss";

export const ProductPreview: React.FC<ProductType> = ({ img, name, enName, glovesDescription, usage, content }) => {
  const [currentSize, setCurrentSize] = useState<number | null>(null);
  
  const changeCurrentSize = (size: number) => setCurrentSize(currentSize === size ? null : size);
  let Sizes = content?.details.sizes.map((s, index) => <li onClick={() => changeCurrentSize(s.size)} className="product-preview__size" key={index}>
    <input onChange={() => {}} checked={currentSize === s.size} type="checkbox" id={String(s.size)} />
    <label htmlFor={String(s.size)}>{s.size}</label>
  </li>)
  
  return <div className="product-preview">
    <img src={img} alt='product' />
    <div className="product-preview__content">
      <h5 className="product-preview__name">{lngHelper(name)}</h5>
      <p className="product-preview__enName text2 text2_color_grayBright">{enName}</p>
      <p className="product-preview__descriptionItem text"><span>Описание:</span> {lngHelper(glovesDescription)}</p>
      <p className="product-preview__descriptionItem text"><span>Применение:</span> {lngHelper(usage)}</p>
      <div className="product-preview__sizes product-preview__descriptionItem"><span>Размер</span> <ul>{Sizes}</ul></div>
      <div className="product-preview__actions">
        <Button disabled={currentSize === null} className="product-preview__action">В корзину</Button>
        <Button className="product-preview__action">
          <Link to={`${name.ru}`}>Подробнее</Link>
        </Button>
      </div>
    </div>
  </div>
};