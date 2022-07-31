import logo from "./../../../assets/images/logo.svg";
import "./nav.scss"
import { Languages } from "./languages/Languages";
import { Search } from "./search/Search";
import { Basket } from "./basket/Basket";
import { Link } from "react-router-dom";
import { PageLinks } from "../pageLinks/PageLinks";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { useState } from "react";
import burgerImg from "./../../../assets/images/burger.png";
import { Breadcrumbs } from "./breadcrumbs/Breadcrumbs";
import { Contacts } from "../contacts/Contacts";
import { useTranslation } from "react-i18next";

export const Nav: React.FC = () => {
  const { t } = useTranslation();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const changeBurgerStatus = () => setIsBurgerOpen(p => !p);

  return <nav className="nav">
    <div className="nav__boxContainer">
      <div className="nav__box">
        <Link className="nav__logo" to='/'>
          <img alt={t('alts.logo')} src={logo} />
        </Link>
        <PageLinks className="nav__page-links" />
        <Languages className="nav__languagues" />
        <Contacts phoneNumbers={['(067) 570-34-89']} className='nav__phone' />
        <Search />
        <Basket />
        <img onClick={changeBurgerStatus} className='nav__burger-icon' src={burgerImg} alt={t('nav.burger')} /> {/* Menu icon by Icons8 */}
        <BurgerMenu closeBurger={changeBurgerStatus} onClose={changeBurgerStatus} open={isBurgerOpen} />
      </div>
    </div>
    <Breadcrumbs />
  </nav>
};