import { Link } from "react-router-dom"
import { Button } from "../../button/Button"
import { CardType } from "../Cards";
import "./card.scss";

export const Card: React.FC<CardType> = ({ to, img, name, description, price }) => {
  return <Link to={to} className='card'>
    <img className='card__img' alt='card' src={img} />
    <div className='card__content'>
      <p className='text card__name'>{name}</p>
      <p className='card__description'>{description}</p>
      {price ? <div className='card__priceContainer'>
        <h5 className='card__price'>{price} ₴</h5>
        <p className="text2 card__priceClarification">(При покупке от 10 уп)</p>
      </div> : null}
      <Button className='card__button'>Подробнее</Button>
    </div>
  </Link>
};