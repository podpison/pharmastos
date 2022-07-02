import logo from "./../../../assets/images/logo.svg";
import "./nav.scss"
import { Languages } from "./languages/Languages";
import { Phone } from "./phone/Phone";
import { Search } from "./search/Search";
import { Basket } from "./basket/Basket";
import { Link } from "react-router-dom";
import { PageLinks } from "../pageLinks/PageLinks";
import burgerImg from "./../../../assets/images/burger.png";
import { useState } from "react";
import cn from 'classNames';
import closeImg from "./../../../assets/images/close.png";

export const Nav: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const onBurgerMunuClick = (e: React.MouseEvent<HTMLElement>) => {
    e.target === e.currentTarget && setIsBurgerOpen(false);
  };

  return <nav className="nav">
    <div className="nav__box">
      <Link className="nav__logo" to='/'>
        <img alt='logo' src={logo} />
      </Link>
      <PageLinks className="nav__page-links" />
      <Languages className="nav__languagues" />
      <Phone className="nav__phone" />
      <Search />
      <Basket />
      <img onClick={() => setIsBurgerOpen(p => !p)} className='nav__burgerIcon' src={burgerImg} alt='burger' /> {/* burger icon by https://www.flaticon.com/authors/andy-horvath */}
      <div onClick={onBurgerMunuClick} className={cn('nav__burgerMenu', !isBurgerOpen && 'nav__burgerMenu_disabled')}>
        <div className='nav__burgerMenuBox'>
          <img className="nav__closeBurger" alt='close' src={closeImg} onClick={() => setIsBurgerOpen(false)} /> {/* Close icon by Icons8 */}
          <div className="nav__burgerPhoneAndLng">
            <Languages className="nav__burgerLngs" />
            <Phone />
          </div>
          <PageLinks className="nav__burgerPageLinks" />
        </div>
      </div>
    </div>
  </nav>
};