import "./breadcrumbs.scss";
import arrowDownImg from "./../../../../assets/images/arrowDown.png";
import { useLocation } from "react-router-dom";
import { selectBreadcrumbItems } from "../../../../redux/selectors";
import { useSelector } from "react-redux";

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  let items = useSelector(selectBreadcrumbItems);
  console.log(items)
  if (pathname === '/') return <></>

  return <ul className="breadcrumbs">
    <li className="text2 breadcrumbs__item">Главная</li>
    <li className="text2 breadcrumbs__separator"><img alt='arrow' src={arrowDownImg} /></li>
    <li className="text2 breadcrumbs__item">Контакты</li>
   </ul>
};