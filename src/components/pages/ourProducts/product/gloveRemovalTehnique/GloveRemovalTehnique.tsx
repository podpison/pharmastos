import { useTranslation } from "react-i18next";
import "./gloveRemovalTehnique.scss";
import "./gloveRemovalTehnique_type.scss";

export const GloveRemovalTehnique: React.FC = () => {
  const { t } = useTranslation();

  const getRulesSignPart = (part: 0 | 1) => { 
    let rulesSign = t('ourProducts.gloveRemovalTehnique.rules');
    return rulesSign.split('.')[part]
  }

  return <div className="gloveRemovalTehnique">
    <div className="gloveRemovalTehnique__headingContainer">
      <h3 data-color='white' className="gloveRemovalTehnique__heading">{t('ourProducts.gloveRemovalTehnique.heading')}</h3>
      <h5 data-color='white' className="gloveRemovalTehnique__tehniqueName">{t('ourProducts.gloveRemovalTehnique.tehniqueName')}</h5>
      <p className="gloveRemovalTehnique__rules">
        <span className="text text_color_white">{getRulesSignPart(0)}.</span>
        <br />
        <span  className="text text_color_white">{getRulesSignPart(1)}.</span>
      </p>
    </div>
    <div className="gloveRemovalTehnique__steps">
      <div data-id='1' className="gloveRemovalTehnique__step gloveRemovalTehnique__step_type_0" />
      <div data-id='2' className="gloveRemovalTehnique__step gloveRemovalTehnique__step_type_1" />
      <div data-id='3' className="gloveRemovalTehnique__step gloveRemovalTehnique__step_type_2" />
      <div data-id='4' className="gloveRemovalTehnique__step gloveRemovalTehnique__step_type_3" />
      <div data-id='5' className="gloveRemovalTehnique__step gloveRemovalTehnique__step_type_4" />
      <div data-id='6' className="gloveRemovalTehnique__step gloveRemovalTehnique__step_type_5" />
    </div>
  </div>
};