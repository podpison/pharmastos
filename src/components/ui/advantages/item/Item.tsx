import "./item.scss";
import "./item_type.scss";

type Props = {
 type: 0 | 1 | 2 | 3
 text: string
}

export const Item: React.FC<Props> = ({ type, text }) => {
  return <div className={`advantages__item advantages__item_type_${type}`}>
    <div className="advantages__itemImg" />
    <p className="text advantages__itemDesciption">{text}</p>
  </div>
};