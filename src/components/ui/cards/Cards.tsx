import "./cards.scss";
import { Link } from "react-router-dom";
import { Card } from "./card/Card";
import { classNameHelper } from "../../../helpers/classNameHelper";

export type CardType = {
  name: string
  description: string | JSX.Element
  id?: number
  img?: string
  price?: number
  button?: boolean
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
  let Items = items.map((i, index) => <Card {...i} button={button} disabledImgPaddings={disabledImgPaddings} key={index} />)

  return <div className={classNameHelper('cards', {}, className)}>
    <div className='cards__headingContainer'>
      {headingNumber === 3 ? <h3 className='cards__heading'>{heading}</h3> : <h2 data-color={headingColor} className='cards__heading'>{heading}</h2>}
      {link && <Link className='cards__link' to={link.path}><span className='text'>{link.link}</span></Link>}
    </div>
    <div className={`cards__items ${threeCardsPerRow ? 'cards__items_threeCardsPerRow' : 'cards__items_fourCardsPerRow'}`}>
      {Items}
    </div>
  </div>
};