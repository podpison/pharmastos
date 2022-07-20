import phoneImg from "./../../../../assets/images/phone.png";
import "./phone.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string
}

export const Phone: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return <a href='tel: (067) 570-34-89' className={cn("phone", className)}>
    <img className="phone__img" src={phoneImg} alt={t('nav.phone')} />
    <p className="text phone__number">(067) 570-34-89</p>
  </a>
};