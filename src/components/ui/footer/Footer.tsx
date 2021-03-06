import "./footer.scss";
import logo from "./../../../assets/images/logo.svg";
import { PageLinks } from "../pageLinks/PageLinks";
import { Link } from "react-router-dom";
import { Contacts } from "../contacts/Contacts";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return <footer className="footer">
    <div className="footer__box">
      <Link className="footer__logo" to='/'>
        <img src={logo} alt={t('alts.logo')} />
      </Link>
      <PageLinks className="footer__page-links" />
      <Contacts className="footer__contacts" phoneNumbers={['(044) 426-64-44', '(067) 570-34-89']} email />
    </div>
  </footer>
};