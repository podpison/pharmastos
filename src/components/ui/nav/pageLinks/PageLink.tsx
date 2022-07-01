import { NavLink } from "react-router-dom";
import "./pageLinks.scss";

type Props = {
  name: string
  to: string
}

export const PageLink: React.FC<Props> = ({ name, to }) => {
  return <li className="text nav__page-link">
    <NavLink to={to}>{name}</NavLink>
  </li>
};