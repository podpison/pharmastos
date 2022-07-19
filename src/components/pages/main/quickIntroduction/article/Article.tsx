import { useTranslation } from "react-i18next";
import { Button } from "../../../../ui/button/Button";
import "./article.scss";

export const Article: React.FC = () => {
  const { t } = useTranslation();

  return <article className="quickIntroduction__article">
    <h1 data-color="white" className="quickIntroduction__articleHeading">{t('mainPage.quickIntroduction.article.heading')}</h1>
    <div className="quickIntroduction__articleTexts">
      <p className="text text_color_white quickIntroduction__articleText">{t('mainPage.quickIntroduction.article.texts.text1')}</p>
      <p className="text text_color_white quickIntroduction__articleText">{t('mainPage.quickIntroduction.article.texts.text2')}</p>
    </div>
    <Button className="quickIntroduction__articleButton">{t('mainPage.quickIntroduction.article.viewProducts')}</Button>
  </article>
};