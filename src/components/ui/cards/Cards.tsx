import "./cards.scss";
import { Link } from "react-router-dom";
import { Card } from "./card/Card";
import { classNameHelper } from "../../../helpers/classNameHelper";
import { useTranslation } from "react-i18next";
import { RuUaTextType } from "../../../redux/reducers/staticReducer";

export type CardType = {
  name: RuUaTextType | string
  description: RuUaTextType | JSX.Element
  id: string
  img?: string
  price?: number
  button?: boolean
  to?: string
  link?: boolean
}

type Props = {
  heading: string
  link?: {
    link: string
    path: string
  }
  items: CardType[]
  className?: string
  headingNumber?: 3 | 2
  headingColor?: 'white' | 'black' | 'gray'
  threeCardsPerRow?: boolean
  button?: boolean
  disabledImgPaddings?: boolean
}

export const Cards: React.FC<Props> = ({ heading, link, items, className, headingNumber = 3, threeCardsPerRow = false, headingColor = 'black', button, disabledImgPaddings }) => {
  const { t } = useTranslation();
  
  let Items = items.map(i => <Card {...i} button={button} disabledImgPaddings={disabledImgPaddings} key={i.id} />)

  return <div className={classNameHelper('cards', {}, className)}>
    <div className='cards__headingContainer'>
      {headingNumber === 3 ? <h3 className='cards__heading'>{t(heading)}</h3> : <h2 data-color={headingColor} className='cards__heading'>{t(heading)}</h2>}
      {link && <Link className='cards__link' to={link.path}><span className='text'>{t(link.link)}</span></Link>}
    </div>
    <div className={`cards__items ${threeCardsPerRow ? 'cards__items_threeCardsPerRow' : 'cards__items_fourCardsPerRow'}`}>
      {Items}
    </div>
  </div>
};