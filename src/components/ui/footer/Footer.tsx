import "./footer.scss";
import logo from "./../../../assets/images/logo.svg";
import { PageLinks } from "../pageLinks/PageLinks";
import { Link } from "react-router-dom";
import { Contacts } from "./contacts/Contacts";

export const Footer: React.FC = () => {
  return <footer className="footer">
    <div className="footer__box">
      <Link className="footer__logo" to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <PageLinks className="footer__page-links" />
      <Contacts />
    </div>
  </footer>
};