import { useTranslation } from "react-i18next";
import { classNameHelper } from "../../../helpers/classNameHelper";
import "./advantages.scss";
import "./advantages_linearBC.scss";
import { Item } from "./item/Item";

type ItemType = {
  text: string
}

type Props = {
  heading: string
  description: string
  items: ItemType[]
  className: string
  linearBC?: boolean
}

export const Advantages: React.FC<Props> = ({ heading, description, items, className, linearBC = false }) => {
  const { t } = useTranslation();

  let otherWords = t(heading).split(' ').slice(0, -1).join(' ');
  let lastWord = t(heading).split(' ').slice(-1).join(' ');

  return <div className={classNameHelper("advantages", {linearBC}, className)}>
    <div className="advantages__descriptionContainer">
      <h3 className="advantages__name">{otherWords} <br />{lastWord}</h3>
      <p className="text advantages__description">{t(description)}</p>
    </div>
    <div className='advantages__items'>
      <Item text={items[0].text} type={0} />
      <Item text={items[1].text} type={1} />
      <Item text={items[2].text} type={2} />
      <Item text={items[3].text} type={3} />
    </div>
  </div>
};