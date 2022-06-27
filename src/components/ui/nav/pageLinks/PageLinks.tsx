import { PageLink } from "./PageLink";
import "./pageLinks.scss"

export const PageLinks: React.FC = () => {
  return <ul className="nav__page-links">
    <PageLink name="Наша продукция" to="/ourProducts" />
    <PageLink name="О компании" to="/aboutCompany" />
    <PageLink name="Блог" to="/blog" />
    <PageLink name="Контакты" to="/Contacts" />
  </ul>
};