import phoneImg from "./../../../../assets/images/phone.png";
import "./phone.scss";
import cn from "classnames";

type Props = {
  className?: string
}

export const Phone: React.FC<Props> = ({ className }) => {
  return <a href='tel: (067) 570-34-89' className={cn("phone", className)}>
    <img className="phone__img" src={phoneImg} alt='phone' />
    <p className="text phone__number">(067) 570-34-89</p>
  </a>
};