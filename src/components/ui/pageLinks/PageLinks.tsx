import { PageLink } from "./PageLink";
import "./pageLinks.scss";
import cn from "classnames";

type Props = {
  className: string
}

export const PageLinks: React.FC<Props> = ({ className }) => {
  return <nav className={cn('page-links', className)}>
    <ul className="page-links__box">
      <PageLink name="Наша продукция" to="/ourProducts" />
      <PageLink name="О компании" to="/aboutCompany" />
      <PageLink name="Блог" to="/blog" />
      <PageLink name="Контакты" to="/Contacts" />
    </ul>
  </nav>
};