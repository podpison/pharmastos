import "./gloveAdvantages.scss";
import "./gloveAdvantage_type.scss";
import example1Img from "./../../../../assets/images/pages/mainPage/gloveAdvantagesExample1.png";
import example2Img from "./../../../../assets/images/pages/mainPage/gloveAdvantagesExample3.png";
import example3Img from "./../../../../assets/images/pages/mainPage/gloveAdvantagesExample2.png";
import { useTranslation } from "react-i18next";

export const GloveAdvantages: React.FC = () => {
  const { t } = useTranslation();

  return <div className="gloveAdvantages">
    <div className="gloveAdvantages__content">
      <div className="gloveAdvantages__headingContainer">
        <h3 className='gloveAdvantages__heading'>{t('mainPage.gloveAdvantages.heading.heading')}</h3>
        <p className='gloveAdvantages__headingClarification'>{t('mainPage.gloveAdvantages.heading.clarification')}</p>
      </div>
      <div className="gloveAdvantages__advantages">
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_0'>{t('mainPage.gloveAdvantages.advantages.0')}</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_3'>{t('mainPage.gloveAdvantages.advantages.1')}</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_1'>{t('mainPage.gloveAdvantages.advantages.2')}</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_4'>{t('mainPage.gloveAdvantages.advantages.3')}</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_2'>{t('mainPage.gloveAdvantages.advantages.4')}</p>
        <p className='text gloveAdvantages__advantage gloveAdvantages__advantage_type_5'>{t('mainPage.gloveAdvantages.advantages.5')}</p>
      </div>
    </div>
    <div className="gloveAdvantages__examples">
      <img className="gloveAdvantages__example" src={example1Img} alt={t('mainPage.gloveAdvantages.examples.0')} />
      <img className="gloveAdvantages__example" src={example2Img} alt={t('mainPage.gloveAdvantages.examples.1')} />
      <img className="gloveAdvantages__example" src={example3Img} alt={t('mainPage.gloveAdvantages.examples.2')} />
    </div>
  </div>
};