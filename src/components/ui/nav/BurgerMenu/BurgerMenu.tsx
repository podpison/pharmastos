import { PageLinks } from "../../pageLinks/PageLinks";
import { Languages } from "../languages/Languages";
import "./burgerMenu.scss";
import cn from 'classnames';
import closeImg from "./../../../../assets/images/close.png";
import { Phone } from "../phone/Phone";

type Props = {
  onClose: () => void
  open: boolean
}

export const BurgerMenu: React.FC<Props> = ({ onClose, open }) => {

  const onBurgerMunuClick = (e: React.MouseEvent<HTMLElement>) => {
    e.target === e.currentTarget && onClose();
  };

  return <>
    <div onClick={onBurgerMunuClick} className={cn('burger-menu', open && 'burger-menu_opend')}>
      <div className='burger-menu__box'>
        <img className="burger-menu__close-menu" alt='close menu' src={closeImg} onClick={() => onClose()} /> {/* Close icon by Icons8 */}
        <div className="burger-menu__burger-phone-and-lng">
          <Languages className="burger-menu__burger-lngs" />
          <Phone />
        </div>
        <PageLinks className="burger-menu__burger-page-links" />
      </div>
    </div>
  </>
};