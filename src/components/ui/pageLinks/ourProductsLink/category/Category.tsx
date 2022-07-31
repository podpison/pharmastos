import { Link } from "react-router-dom"
import { lngHelper } from "../../../../../helpers/lngHelper"
import { RuUaTextType } from "../../../../../redux/store";
import "./category.scss";

type Props = {
  icon: string
  name: RuUaTextType
  id: string
}

export const Category: React.FC<Props> = ({ icon, name, id }) => {
  let link = `/ourProducts/${id}`;

  return <Link to={link} className="our-products-link__category">
    <img className="our-products-link__categoryIcon" src={icon} alt="icon" />
    <p className="our-products-link__categoryName">{lngHelper(name)}</p>
  </Link>
};