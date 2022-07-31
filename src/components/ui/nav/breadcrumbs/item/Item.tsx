import "./item.scss";
import arrowDownImg from "./../../../../../assets/images/arrowDown.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { lngHelper } from "../../../../../helpers/lngHelper";
import { RuUaTextType } from "../../../../../redux/store";

type Props = {
  name: RuUaTextType | undefined | string
  link: string
  firstItem: boolean
  contactsPageClasses: (arrow?: boolean) => void
}

export const Item: React.FC<Props> = ({ name = '', contactsPageClasses, firstItem, link }) => {
  const { t } = useTranslation();

  return <>
    {!firstItem && <li className={`text2 breadcrumbs__separator ${contactsPageClasses(true)}`}><img alt={t('breadcrumbs.separator')} src={arrowDownImg} /></li>}
    <li className={`breadcrumbs__item`}>
      <Link className={`text2 ${contactsPageClasses()}`} to={`/${link}`}>{t(lngHelper(name))}</Link>
    </li>
  </>
};