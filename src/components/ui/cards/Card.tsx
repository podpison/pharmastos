import { Link } from "react-router-dom"
import { Button } from "../button/Button"
import { CardType } from "./Cards";
import "./cards.scss";

export const Card: React.FC<CardType> = ({ to, img, name, description, price }) => {
  return <Link to={to} className='cards__card'>
    <img className='cards__cardImg' alt='card' src={img} />
    <div className='cards__cardContent'>
      <p className='text cards__cardName'>{name}</p>
      <p className='cards__cardDescription'>{description}</p>
      {price ? <div className='cards__cardPriceContainer'>
        <h5 className='cards__cardPrice'>{price} ₴</h5>
        <p className="text2 cards__cardPriceClarification">(При покупке от 10 уп)</p>
      </div> : null}
      <Button className='cards__cardButton'>Подробнее</Button>
    </div>
  </Link>
};