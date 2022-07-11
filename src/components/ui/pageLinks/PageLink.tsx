import { NavLink } from "react-router-dom";
import "./pageLinks.scss";

type Props = {
  onClick?: () => void
  name: string
  to: string
}

export const PageLink: React.FC<Props> = ({ onClick, name, to }) => {
  return <li onClick={onClick} className="page-links__page-link">
    <NavLink className={({isActive}) => isActive ? 'text page-links__page-link_active' : 'text'} to={to}>{name}</NavLink>
  </li>
};