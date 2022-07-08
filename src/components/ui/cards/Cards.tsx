import "./cards.scss";
import { Link } from "react-router-dom";
import { Card } from "./card/Card";
import { classNameHelper } from "../../../helpers/classNameHelper";

export type CardType = {
  name: string
  description: string | JSX.Element
  to?: string
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
  button?: boolean
  disabledImgPaddings?: boolean
}

export const Cards: React.FC<Props> = ({ heading, link, items, className, headingNumber, button, disabledImgPaddings }) => {
  let Items = items.slice(0, 4).map((i, index) => <Card {...i} button={button} disabledImgPaddings={disabledImgPaddings} key={index} />)

  return <div className={classNameHelper('cards', {}, className)}>
    <div className='cards__headingContainer'>
      {headingNumber === 3 ? <h3 className='cards__heading'>{heading}</h3> : <h2 className='cards__heading'>{heading}</h2>}
      {link && <Link className='cards__link' to={link.path}><span className='text'>{link.link}</span></Link>}
    </div>
    <div className="cards__items">
      {Items}
    </div>
  </div>
};