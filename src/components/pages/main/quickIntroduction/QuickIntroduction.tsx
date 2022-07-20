import { Article } from "./article/Article";
import "./quickIntroduction.scss";
import { Representatives } from "./representatives/Representatives";
import bc from "./../../../../assets/images/bc/quickIntroductionBC.png";
import { useTranslation } from "react-i18next";

export const QuickIntroduction: React.FC = () => {
  const { t } = useTranslation();

  return <div className="quickIntroduction">
    <img className='quickIntroduction__backgroundImage' alt={t('mainPage.background')} src={bc} />
    <Article />
    <Representatives />
  </div>
};