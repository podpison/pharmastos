import "./item.scss";
import arrowDownImg from "./../../../../../assets/images/arrowDown.png";
import { Link } from "react-router-dom";

type Props = {
  name: string
  firstItem: boolean
  link: string
  contactsPageClasses: (arrow?: boolean) => void
}

export const Item: React.FC<Props> = ({ name, contactsPageClasses, firstItem, link }) => {

  return <>
    {!firstItem && <li className={`text2 breadcrumbs__separator ${contactsPageClasses(true)}`}><img alt='arrow' src={arrowDownImg} /></li>}
    <li className={`breadcrumbs__item`}>
      <Link className={`text2 ${contactsPageClasses()}`} to={`/${link}`}>{name}</Link>
    </li>
  </>
};