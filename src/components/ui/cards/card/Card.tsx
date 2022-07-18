import { Link } from "react-router-dom"
import { classNameHelper } from "../../../../helpers/classNameHelper";
import { Button } from "../../button/Button"
import { CardType } from "../Cards";
import "./card.scss";
import "./card_disabledImgPaddings.scss";

type Props = {
  disabledImgPaddings: boolean | undefined
  button: boolean | undefined
} & CardType

export const Card: React.FC<Props> = ({ link, to, id, img, name, description, price, button = true, disabledImgPaddings = false }) => {

  return link
    ? <Link to={to ? to : `${id}`} className={classNameHelper('card', { disabledImgPaddings })}>
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
    : <div className={classNameHelper('card', { disabledImgPaddings })}>
      <h5 className="card__heading">{name}</h5>
      <div className='card__content'>
        <div className='card__description'>{description}</div>
        {button && <Button className='card__button'>Подробнее</Button>}
      </div>
    </div>
};