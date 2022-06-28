import "./aboutUs.scss";
import "./aboutUsItem_type.scss";

type Props = {
 type: 0 | 1 | 2 | 3
 text: string
}

export const Item: React.FC<Props> = ({ type, text }) => {
  return <div className={`aboutUs__item aboutUs__item_type_${type}`}>
    <div className="aboutUs__itemImg" />
    <p className="aboutUs__itemDesciption">{text}</p>
  </div>
};