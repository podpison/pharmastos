import { PageLink } from "./PageLink";
import "./pageLinks.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { OurProductsLink } from "./ourProductsLink/OurProductsLink";

type Props = {
  closeBurger?: () => void
  className: string
}

export const PageLinks: React.FC<Props> = ({ closeBurger, className }) => {
  const { t } = useTranslation();

  return <nav className={cn('page-links', className)}>
    <ul className="page-links__box">
      <PageLink onClick={closeBurger} name={t('pageLinks.main')} to="/" />
      <OurProductsLink closeBurger={closeBurger} name={t('pageLinks.ourProducts')} />
      <PageLink onClick={closeBurger} name={t('pageLinks.aboutCompany')} to="/aboutCompany" />
      <PageLink onClick={closeBurger} name={t('pageLinks.blog')} to="/blog" />
      <PageLink onClick={closeBurger} name={t('pageLinks.contacts')} to="/contacts" />
    </ul>
  </nav>
};