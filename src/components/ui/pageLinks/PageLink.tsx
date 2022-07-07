import { NavLink } from "react-router-dom";
import "./pageLinks.scss";

type Props = {
  onClick?: () => void
  name: string
  to: string
}

export const PageLink: React.FC<Props> = ({ onClick, name, to }) => {
  return <li onClick={onClick} className="text page-links__page-link">
    <NavLink to={to}>{name}</NavLink>
  </li>
};