import logo from "./../../../assets/images/logo.svg";
import { PageLinks } from "./pageLinks/PageLinks";
import "./nav.scss"
import { Languages } from "./languages/Languages";
import { Phone } from "./phone/Phone";
import { Search } from "./search/Search";
import { Basket } from "./basket/Basket";
import { Link } from "react-router-dom";

export const Nav: React.FC = ({ }) => {
  return <nav className="nav">
    <div className="nav__box">
      <Link className="nav__logo" to='/'>
        <img alt='logo' src={logo} />
      </Link>
      <PageLinks />
      <Languages />
      <Phone />
      <Search />
      <Basket />
    </div>
  </nav>
};