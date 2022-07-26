import { useSelector } from "react-redux";
import { selectOurProductItems } from "../../../../redux/selectors";
import { Category } from "./category/Category";
import "./ourProductsLink.scss";

type Props = {
  closeBurger?: () => void
  name: string
}

export const OurProductsLink: React.FC<Props> = ({ name, closeBurger }) => {
  let Categories = useSelector(selectOurProductItems).map((c, index) => <Category key={index} name={c.name} id={c.id} icon={c.icon} />)

  return <li className="page-links__page-link our-products-link">
    <p className="text our-products-link__name">{name}</p>
    <div className="our-products-link__categories">
      {Categories}
      {/* <Category icon="https://i.postimg.cc/7hJn8rtF/8.png" name={{ru: 'Нитриловые перчатки', ua: 'Нiтриловые перчаткi'}} /> */}
    </div>
  </li>
};