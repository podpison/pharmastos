import { Link } from "react-router-dom"
import { lngHelper } from "../../../../../helpers/lngHelper"
import { RuUaTextType } from "../../../../../redux/reducers/staticReducer"

type Props = {
  icon: string
  name: RuUaTextType
}

export const Category: React.FC<Props> = ({ icon, name }) => {
  let link = `/ourProducts/${name.ru}`;

  return <div className="our-products-link__category">
    <img className="our-products-link__categoryIcon" src={icon} alt="icon" />
    <Link to={link} className="our-products-link__categoryName">{lngHelper(name)}</Link>
  </div>
};