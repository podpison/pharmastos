import phoneImg from "./../../../../assets/images/phone.png";
import "./phone.scss";

export const Phone: React.FC = () => {
  return <div className="phone">
    <img className="phone__img" src={phoneImg} alt='phone' />
    <a className="phone__number" href='tel: (067) 570 34 89'>(067) 570 34 89</a>
  </div>
};