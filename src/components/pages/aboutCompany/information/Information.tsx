import "./information.scss";
import glovesImg from "./../../../../assets/images/pages/aboutCompany/gloves.png";
import favicon from "./../../../../assets/images/favicon.png";
import { useTranslation } from "react-i18next";

export const Information: React.FC = () => {
  const { t } = useTranslation();

  return <div className="information">
    <div className="information__content">
      <h2 className="information__heading">{t('aboutCompany.information.heading')}</h2>
      <p className="text">{t('aboutCompany.information.texts.0')}</p>
      <p className="text">{t('aboutCompany.information.texts.1')}</p>
      <p className="text">{t('aboutCompany.information.texts.2')}</p>
    </div>
    <div className="information__gloves">
      <img className="information__glovesImg" alt={t('aboutCompany.information.alts.gloves')} src={glovesImg} />
      <div className="information__glovesBackground" />
      <img alt={t('aboutCompany.information.alts.favicon')} src={favicon} className='information__favicon' />
    </div>
  </div>
};