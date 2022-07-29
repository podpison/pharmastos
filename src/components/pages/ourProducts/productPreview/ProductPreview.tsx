import { ChangeEvent, useState } from "react";
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
  const { pathname } = useLocation();

  const changeCurrentSize = (size: number) => setCurrentSize(currentSize === size ? null : size);
  let Sizes = content?.details.sizes.map((s, index) => <li onClick={() => changeCurrentSize(s.size)} className="product-preview__size" key={index}>
    <input onChange={() => { }} checked={currentSize === s.size} type="checkbox" id={String(s.size)} />
    <label htmlFor={String(s.size)}>{s.size}</label>
  </li>);
  const onCountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value
    let numberValue = Number(newValue);

    // if (newValue.includes('0') && newValue.length === 1) {setItemsCount(0); return} 
    setItemsCount(numberValue >= 1000 ? 999 : numberValue);
  };
  
  return <div className={classNameHelper("product-preview", {}, className)}>
    <img className='product-preview__productImg' src={img} alt='product' />
    <div className="product-preview__content">
      <h5 className="product-preview__name">{lngHelper(name)}</h5>
      <p className="product-preview__enName text2 text2_color_grayBright">{enName}</p>
      <p className="product-preview__descriptionItem text"><span>Описание:</span> {lngHelper(glovesDescription)}</p>
      <p className="product-preview__descriptionItem text"><span>Применение:</span> {lngHelper(usage)}</p>
      <div className="product-preview__sizes product-preview__descriptionItem"><span>Размер</span> <ul>{Sizes}</ul></div>
      <div className="product-preview__items-count-and-price">
        <div className="product-preview__items-count">
          <input value={itemsCount} type='number' className="product-preview__editValue" onChange={onCountChangeHandler} onKeyDown={(e) => e.key === '.' && e.preventDefault()} />
          <div className="product-preview__items-actions">
            <CountArrow type="increase" setItemsCount={setItemsCount} />
            <CountArrow type="decrease" setItemsCount={setItemsCount} />
          </div>
        </div>
        <h4>{price * itemsCount} ₴</h4>
      </div>
      <div className="product-preview__actions">
        <Button disabled={currentSize === null || itemsCount === 0} className="product-preview__action">В корзину</Button>
        {pathname.split('/').length === 3 && <Button className="product-preview__action">
          <Link to={`${id}`}>Подробнее</Link>
        </Button>}
      </div>
    </div>
  </div>
};
// Как СИЗ в клинико-диагностических, амбулаторных процедурах и осмотрах;
// В терапевтических и педиатрических процедурах для забора биоматериала, ухода за пациентами;
// Не использовать повторно;
// Нежелательно носить перчатки более 2 часов;
// Не применять при обнаружении разрывов поверхности перчатки;
// При длительном использовании может потребоваться дополнительный уход за кожей рук;
// Избегать попадания прямых солнечных лучей и флуоресцентного освещения.

// Хранить 3 года с даты изготовления при температуре 0-25°С;
// При температуре до 40°С срок хранения – до 2х месяцев;
// Не хранить вблизи генерирующего озон оборудования (например, ртутные лампы, высоковольтные электроприборы или другие, вызывающие электрические искры или разряды);
// Избегать контакта с масляными антисептическими фенолами или их производными, смазками, вазелином, нефтяным спиртом, парафином или другими родственными соединениями;
// Перчатки не должны находиться в непосредственном контакте с такими металлами как медь, марганец и железо. 