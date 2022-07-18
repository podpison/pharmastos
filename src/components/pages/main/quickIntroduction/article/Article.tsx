import { useTranslation } from "react-i18next";
import { Button } from "../../../../ui/button/Button";
import "./article.scss";

export const Article: React.FC = () => {
  const { t } = useTranslation();

  return <article className="quickIntroduction__article">
    <h1 data-color="white" className="quickIntroduction__articleHeading">ТМН-групп Украина</h1>
    <div className="quickIntroduction__articleTexts">
      <p className="text text_color_white quickIntroduction__articleText">Уполномоченные представители ряда мировых производителей изделий медицинского назначения: WRP, Heliomed, LinkMed.</p>
      <p className="text text_color_white quickIntroduction__articleText">Ваш надежный партнер в области профилактики инфекций, связанных с оказанием медецинской помощи.</p>
    </div>
    <Button className="quickIntroduction__articleButton">{t('mainPage.quickIntroduction.article.viewProducts')}</Button>
  </article>
};