import { PageLink } from "./PageLink";
import "./pageLinks.scss";
import cn from "classnames";

type Props = {
  closeBurger?: () => void
  className: string
}

export const PageLinks: React.FC<Props> = ({ closeBurger, className }) => {
  return <nav className={cn('page-links', className)}>
    <ul className="page-links__box">
      <PageLink onClick={closeBurger} name="Главная" to="/" />
      <PageLink onClick={closeBurger} name="Наша продукция" to="/ourProducts" />
      <PageLink onClick={closeBurger} name="О компании" to="/aboutCompany" />
      <PageLink onClick={closeBurger} name="Блог" to="/blog" />
      <PageLink onClick={closeBurger} name="Контакты" to="/Contacts" />
    </ul>
  </nav>
};