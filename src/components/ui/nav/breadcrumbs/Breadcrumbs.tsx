import "./breadcrumbs.scss";
import { useLocation } from "react-router-dom";
import { selectBreadcrumbItems } from "../../../../redux/selectors";
import { useSelector } from "react-redux";
import { Item } from "./item/Item";

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const contactsPageClasses = (arrow?: boolean) => pathname === '/contacts' ? !arrow ? 'text2_color_white' : 'breadcrumbs__separator_color_white' : '';
  let items = useSelector(selectBreadcrumbItems).map((i, index) => <Item contactsPageClasses={contactsPageClasses} key={index} firstItem={false} {...i} />)

  if (pathname === '/') return <></>

  return <ul className="breadcrumbs">
    <Item link="/" contactsPageClasses={contactsPageClasses} firstItem={true} name='pageLinks.main' />
    {items}
  </ul>
};