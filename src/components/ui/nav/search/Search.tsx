import { useTranslation } from "react-i18next";
import search from "./../../../../assets/images/search.png";
import "./search.scss";

export const Search: React.FC = () => {
  const { t } = useTranslation();

  return <div className="search">
    <img alt={t('nav.search')} src={search} />
  </div>
};