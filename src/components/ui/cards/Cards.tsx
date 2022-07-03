import "./cards.scss";
import { Link } from "react-router-dom";
import { Card } from "./card/Card";

export type CardType = {
  to: string
  img: string
  name: string
  description: string
  price?: number
}

type Props = {
  heading: string
  link: {
    link: string
    path: string
  }
  items: CardType[]
}

export const Cards: React.FC<Props> = ({ heading, link, items }) => {
  let Items = items.slice(0, 4).map((i, index) => <Card {...i} key={index} />)

  return <div className='cards'>
    <div className='cards__headingContainer'>
      <h3 className='cards__heading'>{heading}</h3>
      <Link className='cards__link' to={link.path}><span className='text'>{link.link}</span></Link>
    </div>
    <div className="cards__items">
      {Items}
    </div>
  </div>
};