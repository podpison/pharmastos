import "./footer.scss";
import logo from "./../../../assets/images/logo.svg";
import { PageLinks } from "../pageLinks/PageLinks";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return <footer className="footer">
    <div className="footer__box">
      <Link className="footer__logo" to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <PageLinks className="footer__pageLinks" />
      <div className='footer__contacts'>
        <div className="footer__phones">
          <a className='text footer__phone' href='tel: (044) 426-64-44'>(044) 426-64-44</a>
          <a className='text footer__phone' href='tel: (067) 570-34-89'>(067) 570-34-89</a>
        </div>
        <a className="text footer__mail" href='mailto: office@tmngroup.com.ua'>office@tmngroup.com.ua</a>
      </div>
    </div>
  </footer>
};