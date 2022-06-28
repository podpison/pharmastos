import { Link } from "react-router-dom";
import { Button } from "../../../ui/button/Button";
import "./popularItems.scss";

type Props = {
  img: string
  name: string
  price: number
  description: string
}

export const PopularItem: React.FC<Props> = ({ description, img, name, price }) => {
  return <Link to='somewhere' className='popularItems__item'>
    <img className='popularItems__itemImg' alt='popular product' src={img} />
    <div className='popularItems__itemContent'>
      <h4 className='popularItems__itemName'>{name}</h4>
      <p className='popularItems__itemDescription'>{description}</p>
      <div className='popularItems__itemPriceContainer'>
        <h5 className='popularItems__itemPrice'>{price} ₴</h5>
        <p className="popularItems__itemPriceClarification">(При покупке от 10 уп)</p>
      </div>
      <Button className='popularItems__itemButton'>Подробнее</Button>
    </div>
  </Link>
};