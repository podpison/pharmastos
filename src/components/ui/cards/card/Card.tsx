import { useTranslation } from "react-i18next";
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

export const Card: React.FC<Props> = ({ link, to, id, img, name, description = '', price, button = true, disabledImgPaddings = false }) => {
  const { t } = useTranslation();

  let descriptionToRender = typeof description === 'string' ? t(description) : description;

  return link
    ? <Link to={to ? to : `${id}`} className={classNameHelper('card', { disabledImgPaddings })}>
      <img className='card__img' alt={t('cards.card.alt')} src={img} />
      <div className='card__content'>
        <p className='text card__name'>{t(name)}</p>
        <p className='card__description'>{descriptionToRender}</p>
        {price ? <div className='card__priceContainer'>
          <h5 className='card__price'>{price} ₴</h5>
          <p className="text2 card__priceClarification">(При покупке от 10 уп)</p>
        </div> : null}
        <Button className='card__button'>{t('cards.card.more')}</Button>
      </div>
    </Link>
    : <div className={classNameHelper('card', { disabledImgPaddings })}>
      <h5 className="card__heading">{t(name)}</h5>
      <div className='card__content'>
        <div className='card__description'>{descriptionToRender}</div>
        {button && <Button className='card__button'>{t('cards.card.more')}</Button>}
      </div>
    </div>
};