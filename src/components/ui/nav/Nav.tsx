import logo from "./../../../assets/images/logo.svg";
import "./nav.scss"
import { Languages } from "./languages/Languages";
import { Phone } from "./phone/Phone";
import { Search } from "./search/Search";
import { Basket } from "./basket/Basket";
import { Link } from "react-router-dom";
import { PageLinks } from "../pageLinks/PageLinks";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState } from "react";
import burgerImg from "./../../../assets/images/burger.png";

export const Nav: React.FC = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const changeBurgerStatus = () => setIsBurgerOpen(p => !p);

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
      <img onClick={changeBurgerStatus} className='nav__burger-icon' src={burgerImg} alt='burger' /> {/* Menu icon by Icons8 */}
      <BurgerMenu closeBurger={changeBurgerStatus} onClose={changeBurgerStatus} open={isBurgerOpen} />
    </div>
  </nav>
};